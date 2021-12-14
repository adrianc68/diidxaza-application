describe("Add Comment", () => {
    before(() => {
        cy.visit("http://127.0.0.1:3000/login");
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.secondary-button').click();
        cy.get('.secondary-button').click();
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.contains("¿Qué opinan de las cuentos?").click();
    });

    it("Add Comment Empty", () => {
        cy.get('[name="comment"]').type("           ");
        cy.contains('Comentarios').click();
        cy.get('.addcomment-main-container').submit();
        cy.get('.errorInput').contains("Ingrese solo letras y caracteres !?¡¿.,#. Solo de 5 a 600 caracteres");
    });

    it("Add Comment Error", () => {
        cy.reload();
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.contains("¿Qué opinan de las cuentos?").click();
        cy.get('[name="comment"]').type("$$$$$&&&////(/&&&");
        cy.contains('Comentarios').click();
        cy.get('.addcomment-main-container').submit();
        cy.get('.errorInput').contains("Ingrese solo letras y caracteres !?¡¿.,#. Solo de 5 a 600 caracteres");
    });

    it("Add Comment Cancel", () => {
        cy.get('.adminmenubarIconToggle').click();
        cy.get(".orange-button").click();
        cy.get('.addcomment-count-characters').contains("0 Caracteres");
    });

    it("Add Comment Successful", () => {
        cy.visit("http://127.0.0.1:3000/forum");
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.contains("¿Qué opinan de las cuentos?").click();
        cy.get('[name="comment"]').type("No me gustan los cuentos");
        cy.contains('Comentarios').click();
        cy.get('.addcomment-main-container').submit();
        cy.get('.successfulMessage').contains("El comentario se registro exitosamente");
    });

    it("Not Token Add Comment", () => {
        cy.visit("http://127.0.0.1:3000/forum");
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.contains("¿Qué opinan de las cuentos?").click();
        cy.get('[name="comment"]').type("No me gustan los cuentos");
        cy.contains('Comentarios').click();
        cy.intercept('POST', '/comments', {
            status: 401
        });
        cy.get('.addcomment-main-container').submit();
        cy.get('.alert-main-container').contains("No estás autorizado para realizar esta funcionalidad");
        cy.contains('Aceptar').click();
    });

    it("Finish Time Add Comment", () => {
        cy.visit("http://127.0.0.1:3000/forum");
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.contains("¿Qué opinan de las cuentos?").click();
        cy.get('[name="comment"]').type("No me gustan los cuentos");
        cy.contains('Comentarios').click();
        cy.intercept('POST', '/comments', {
            status: 419
        });
        cy.get('.addcomment-main-container').submit();
        cy.get('.alert-main-container').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
        cy.contains('Aceptar').click();
    });

    it("Error Server Add Comment", () => {
        cy.visit("http://127.0.0.1:3000/forum");
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.contains("¿Qué opinan de las cuentos?").click();
        cy.get('[name="comment"]').type("No me gustan los cuentos");
        cy.contains('Comentarios').click();
        cy.intercept('POST', '/comments', {
            status: 500
        });
        cy.get('.addcomment-main-container').submit();
        cy.get('.errorMessage').contains("Error en el servidor. Intenta más tarde");
    });
});