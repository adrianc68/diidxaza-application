describe("Report User", () => {
    before(() => {
        cy.visit("http://127.0.0.1:3000/login");
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.secondary-button').click();
        cy.get('.secondary-button').click();
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.contains("¿Qué opinan de las cuentos?").click();
    });

    it("Report User Cancel", () => {
        cy.contains('Reportar usuario').click();
        cy.get('[name="context"]').type("           ");
        cy.get(".reportuser-button-panel").contains("Cancelar").click({force: true});
        cy.contains('Reportar usuario');
    });

    it("Report User Empty", () => {
        cy.contains('Reportar usuario').click();
        cy.get('[name="context"]').type("           ");
        cy.get(".reportuser-button-panel").click();
        cy.get(".errorInput").contains("Seleccione un motivo por favor");
        cy.get(".errorInput").contains("Ingrese solo letras y caracteres !?¡¿.,#. Solo de 5 a 500 caracteres");
        cy.get(".reportuser-button-panel").contains("Cancelar").click({force: true});
    });


    it("Report User Error Data", () => {
        cy.contains('Reportar usuario').click();
        cy.get('[name="context"]').type("$%&&/((/(42");
        cy.get(".reportuser-button-panel").click();
        cy.get(".errorInput").contains("Seleccione un motivo por favor");
        cy.get(".errorInput").contains("Ingrese solo letras y caracteres !?¡¿.,#. Solo de 5 a 500 caracteres");
        cy.get(".reportuser-button-panel").contains("Cancelar").click({force: true});
    });

    it("Report User Error Context", () => {
        cy.contains('Reportar usuario').click();
        cy.get(':nth-child(2) > label').click();
        cy.get('[name="context"]').type("$%&&/((/(42");
        cy.get(".reportuser-button-panel").click();
        cy.get(".errorInput").contains("Ingrese solo letras y caracteres !?¡¿.,#. Solo de 5 a 500 caracteres");
        cy.get(".reportuser-button-panel").contains("Cancelar").click({force: true});
    });

    it("Report User Successful", () => {
        cy.wait(2000);
        cy.contains('Reportar usuario').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > label').click();
        cy.get(':nth-child(2) > label').click();
        cy.get('[name="context"]').type("No me gusta la forma en que escribe los comentarios");
        cy.get(".modal-title-container").click();
        cy.get(".reportuser-main-container").submit();
        cy.get(".successfulMessage").contains("El reporte se registro exitosamente");
    });

    it("Error Server Report User", () => {
        cy.wait(2000);
        cy.contains('Reportar usuario').click();
        cy.wait(1000);
        cy.get(':nth-child(2) > label').click();
        cy.get('[name="context"]').type("No me gusta la forma en que escribe los comentarios");
        cy.get(".reportuser-button-panel").click();
        cy.intercept('POST', '/reports', {
            status: 500
        });
        cy.get(".reportuser-main-container").submit();
        cy.get('.errorMessage').contains("Error en el servidor. Intenta más tarde");
        cy.get(".reportuser-button-panel").contains("Cancelar").click({force: true});
    });

    it("Not Account Report User", () => {
        cy.contains('Reportar usuario').click();
        cy.get(':nth-child(2) > label').click();
        cy.get('[name="context"]').type("No me gusta la forma en que escribe los comentarios");
        cy.get(".reportuser-button-panel").click();
        cy.intercept('POST', '/reports', {
            status: 400
        });
        cy.get(".reportuser-main-container").submit();
        cy.get('.errorMessage').contains("No se encontro la cuenta");
        cy.get(".reportuser-button-panel").contains("Cancelar").click({force: true});

    });

    it("Finish Time Report User", () => {
        cy.contains('Reportar usuario').click();
        cy.get(':nth-child(2) > label').click();
        cy.get('[name="context"]').type("No me gusta la forma en que escribe los comentarios");
        cy.get(".reportuser-button-panel").click();
        cy.intercept('POST', '/reports', {
            status: 419
        });
        cy.get(".reportuser-main-container").submit();
        cy.get('.alert-content-container').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
        cy.get('.alert-content-container').contains("Aceptar").click();
    });
});