describe("Following Discussion", () => {
    before(() => {
        cy.visit("http://127.0.0.1:3000/login");
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.button background-orange').click();
        cy.get('.button background-orange').click();
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.contains("¿Qué opinan de las cuentos?").click();
    });

    it("Following Discussion Successful", () => {
        cy.wait(1000);
        cy.intercept('PATCH', 'discussions', {
            status: 200,
            body: {
                messageHappened: 'La discusión se sigue exitosamente',
            }
        });
        cy.get(':nth-child(3) > .button background-dark-blue').click();
        cy.get('.alert-content-container').contains("La discusión se sigue exitosamente");
        cy.get('.alert-content-container').contains("Aceptar").click();
    });

    it("Error Server Following Discussion", () => {
        cy.intercept('PATCH', '/discussions', {
            status: 500
        });
        cy.get(':nth-child(3) > .button background-dark-blue').click();
        cy.get('.alert-content-container').contains("Error en el servidor. Intenta más tarde");
        cy.get('.alert-content-container').contains("Aceptar").click();
    });

    it("Not Token Following Discussion", () => {
        cy.intercept('PATCH', '/discussions', {
            status: 401
        });
        cy.get(':nth-child(3) > .button background-dark-blue').click();
        cy.get('.alert-main-container').contains("No estás autorizado para realizar esta funcionalidad");
        cy.get('.alert-content-container').contains("Aceptar").click();
    });

    it("Finish Time Following Discussion", () => {
        cy.intercept('PATCH', '/discussions', {
            status: 419
        });
        cy.get(':nth-child(3) > .button background-dark-blue').click();
        cy.get('.alert-main-container').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
        cy.get('.alert-content-container').contains("Aceptar").click();
    });
});