describe("Add Discussion", () => {
    before(() => {
        cy.visit("http://127.0.0.1:3000/login");
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.button background-orange').click();
        cy.get('.button background-orange').click();
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.contains("Crear discusión").click();
    });

    it("Add Discussion Error Theme", () => {
        cy.get('[name="title"]').type("¿Porque no estan disponibles cuentos?");
        cy.get('[name="comment"]').type("Las cuentos no están disponicles");
        cy.get('.userprofile-dashboard-container').click();
        cy.get('.adddiscussion-main-container').get('form').submit();
        cy.get('.errorMessage').contains("Seleccione un tema por favor");
    });

    it("Add Discussion Empty Data", () => {
        cy.get('[name="title"]').clear().type("      ");
        cy.get('[name="comment"]').clear().type("       ");
        cy.get('.userprofile-dashboard-container').click();
        cy.get('.adddiscussion-main-container').get('form').submit();
        cy.get('.errorInput').contains("Ingrese solo letras y caracteres !?¡¿.,#. Solo de 5 a 600 caracteres");
        cy.get('.errorInput').contains("Ingrese solo letras y caracteres !?¡¿.,#. Solo de 4 a 200 caracteres");
    });

    it("Add Discussion Exists", () => {
        cy.contains("Crear discusión").click();
        cy.contains('info').click();
        cy.get('[name="title"]').clear().type("¿Qué opinan de las cuentos?");
        cy.get('[name="comment"]').clear().type("Que opinan de los cuentos");
        cy.get('.adddiscussion-main-content').click();
        cy.get('.adddiscussion-main-container').get('form').submit();
    });

    it("Add Discussion Successful", () => {
        cy.contains('info').click();
        cy.get('[name="title"]').clear().type("¿Qué opinan de las lecciones?");
        cy.get('[name="comment"]').clear().type("Las lecciones son un poco fáciles");
        cy.get('.adddiscussion-main-content').click();
        cy.get('.adddiscussion-main-container').get('form').submit();
        cy.get('.successfulMessage').contains("La discusión se registro exitosamente");
    });

    it("Error Server Add Discussions", () => {
        cy.contains('info').click();
        cy.get('[name="title"]').clear().type("¿Qué opinan de las cuentos?");
        cy.get('[name="comment"]').clear().type("Qué opinan de los cuentos");
        cy.get('.adddiscussion-main-content').click();
        cy.intercept('POST', '/discussions', {
            status: 500
        });
        cy.get('.adddiscussion-main-container').get('form').submit();
        cy.get('.errorMessage').contains("Error en el servidor. Intenta más tarde");
    });

    it("Not Token Add Discussions", () => {
        cy.contains('info').click();
        cy.get('[name="title"]').clear().type("¿Qué opinan de las cuentos?");
        cy.get('[name="comment"]').clear().type("Que opinan de los cuentos");
        cy.get('.adddiscussion-main-content').click();
        cy.intercept('POST', '/discussions', {
            status: 401
        });
        cy.get('.adddiscussion-main-container').get('form').submit();
        cy.get('.alert-main-container').contains("No estás autorizado para realizar esta funcionalidad");
        cy.contains('Aceptar').click();
    });


    it("Finish Time Add Discussions", () => {
        cy.contains('info').click();
        cy.get('[name="title"]').clear().type("¿Qué opinan de las cuentos?");
        cy.get('[name="comment"]').clear().type("Que opinan de los cuentos");
        cy.get('.adddiscussion-main-content').click();
        cy.intercept('POST', '/discussions', {
            status: 419
        });
        cy.get('.adddiscussion-main-container').get('form').submit();
        cy.get('.alert-main-container').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
        cy.contains('Aceptar').click();
    });
});