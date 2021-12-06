describe("Add Discussion", () => {
    before(() => {
        cy.visit("http://127.0.0.1:3000/login");
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.login-create-account-container').click();
        cy.get('Button').click();
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.contains("Crear discusión").click();
    });

    it("Add Discussion Error Theme", () => {
        cy.get('[name="title"]').type("Miros");
        cy.get('[name="comment"]').type("Miros");
        cy.get('.userprofile-dashboard-container').click();
        cy.get('.adddiscussion-main-container').get('form').submit();
        cy.get('.errorMessage').contains("Seleccione un tema por favor");
    });

    it("Add Discussion Empty Data", () => {
        cy.visit("http://127.0.0.1:3000/discussion");
        cy.get('[name="title"]').type("      ");
        cy.get('[name="comment"]').type("       ");
        cy.get('.userprofile-dashboard-container').click();
        cy.get('.adddiscussion-main-container').get('form').submit();
        cy.get('.errorInput').contains("Ingrese solo letras y caracteres !?¡¿.,#. Solo de 5 a 600 caracteres");
        cy.get('.errorInput').contains("Ingrese solo letras y caracteres !?¡¿.,#. Solo de 4 a 200 caracteres");
    });

    it("Add Discussion Error Data", () => {
        cy.visit("http://127.0.0.1:3000/discussion");
        cy.get('.adddiscussion-main-container').get('form').submit();
    });
});