describe("Unblock Account", () => {
    before(() => {
        cy.visit("http://127.0.0.1:3000/login");
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.button').click();
        cy.get('.button').click();
        cy.contains('Cuentas').click();
    });

    it("Unblock Account Cancel", () => {
        cy.wait(1000);
        cy.get('#61ad1cd71a1532db106c36d2').contains("Ver detalles de usuario").click();
        cy.wait(1000);
        cy.get(".userprofile-button-panel-container").contains("Desbloquear usuario").click();
        cy.get(".changestatususer-button-panel").contains("Cancelar").click();
    });

    
    it("Unblock Account Data Error", () => {
        cy.wait(1000);
        cy.get(".userprofile-button-panel-container").contains("Desbloquear usuario").click();
        cy.intercept('PATCH', '/accounts', {
            status: 400
        });
        cy.get(".changestatususer-button-panel").contains("Desbloquear usuario").click();
        cy.get(".color-red").contains("La solicitud enviada no es válida");
        cy.get(".changestatususer-button-panel").contains("Cancelar").click();
    });

    it("Finish Time Token Unblock Account", () => {
        cy.wait(1000);
        cy.get(".userprofile-button-panel-container").contains("Desbloquear usuario").click();
        cy.intercept('PATCH', '/accounts', {
            status: 419
        });
        cy.get(".changestatususer-button-panel").contains("Desbloquear usuario").click();
        cy.get(".color-red").contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
        cy.get(".changestatususer-button-panel").contains("Cancelar").click();
    });

    it("Not Token Unblock Account", () => {
        cy.wait(1000);
        cy.get(".userprofile-button-panel-container").contains("Desbloquear usuario").click();
        cy.intercept('PATCH', '/accounts', {
            status: 401
        });
        cy.get(".changestatususer-button-panel").contains("Desbloquear usuario").click();
        cy.get(".color-red").contains("Requieres iniciar sesión o no tienes acceso a esta funcionalidad");
        cy.get(".changestatususer-button-panel").contains("Cancelar").click();
    });

    it("Unblock Account Close", () => {
        cy.wait(1000);
        cy.get(".userprofile-button-panel-container").contains("Desbloquear usuario").click();
        cy.get(".modal-button > .button-container > svg").click();
    });

    it("Unblock Account Successful", () => {
        cy.wait(1000);
        cy.get(".userprofile-button-panel-container").contains("Desbloquear usuario").click();
        cy.get(".changestatususer-button-panel").contains("Desbloquear usuario").click();
        cy.get(".userprofile-user-data-container").contains("Martha");
    });
});
