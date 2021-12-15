describe("Delete Comment", () => {
    before(() => {
        cy.visit("http://127.0.0.1:3000/login");
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.button background-orange').click();
        cy.get('.button background-orange').click();
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.contains("¿Qué opinan de las cuentos?").click();
    });

    it("Delete Comment Cancel", () => {
        cy.get(':nth-child(3) > .forum-comment').contains("Eliminar").click();
        cy.get('.alert-confirmation-content-container').contains("No").click();
        cy.get(':nth-child(3) > .forum-comment').contains("Eliminar");
    });

    it("Delete Comment Close", () => {
        cy.get(':nth-child(3) > .forum-comment').contains("Eliminar").click();
        cy.get('.modal-button').click();
        cy.get(':nth-child(3) > .forum-comment').contains("Eliminar");
    });

    it("Error Server Delete Comment", () => {
        cy.get(':nth-child(3) > .forum-comment').contains("Eliminar").click();
        cy.intercept('DELETE', '/comments', {
            status: 500
        });
        cy.get('.alert-confirmation-content-container').contains("Si").click({force: true});
        cy.get('.alert-content-container').contains("Aceptar").click();
    });

    it("Not Token Delete Comment", () => {
        cy.get(':nth-child(3) > .forum-comment').contains("Eliminar").click();
        cy.intercept('DELETE', '/comments', {
            status: 401
        });
        cy.get('.alert-confirmation-content-container').contains("Si").click({force: true});
        cy.get('.alert-main-container').contains("No estás autorizado para realizar esta funcionalidad");
        cy.get('.alert-content-container').contains("Aceptar").click();
    });

    it("Finish Time Delete Comment", () => {
        cy.get(':nth-child(3) > .forum-comment').contains("Eliminar").click();
        cy.intercept('DELETE', '/comments', {
            status: 419
        });
        cy.get('.alert-confirmation-content-container').contains("Si").click({force: true});
        cy.get('.alert-main-container').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
        cy.get('.alert-content-container').contains("Aceptar").click();
    });

    it("Delete Comment Successful", () => {
        cy.visit("http://127.0.0.1:3000/forum");
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.contains("¿Qué opinan de las cuentos?").click();
        cy.get(':nth-child(3) > .forum-comment').contains("Eliminar").click();
        cy.get('.alert-confirmation-content-container').contains("Si").click({force: true});
        cy.get('.forum-discussion-forum-button-panel-container').contains("Comentarios (2)");
    });
});
