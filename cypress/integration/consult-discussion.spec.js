describe("Consult Discussion", () => {
    before(() => {
        cy.visit("http://127.0.0.1:3000/login");
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.secondary-button').click();
        cy.get('.secondary-button').click();
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
    });

    it("Not Found Discussions Title", () => {
        cy.get('[name="title"]').type("Miros");
        cy.get('.form-search-criteria').click();
        cy.get('.form-search-criteria').get('form').submit();
        cy.get('.forum-discussion-list').contains("No se encontraron discusiones");
    });

    it("Discussions Successful Title", () => {
        cy.get('[name="title"]').clear().type("¿Qu");
        cy.get('.form-search-criteria').click();
        cy.get('.form-search-criteria').get('form').submit();
        cy.wait(1000);
        cy.get('.forum-discussion-list').contains("¿Qué opinan de las cuentos?");
        cy.get('.forum-discussion-list').contains("¿Qué opinan de las canciones?");
    })

    it("Discussions Error title", () => {
        cy.get('[name="title"]').clear().type("         ");
        cy.get('.form-search-criteria').click();
        cy.get('.form-search-criteria').get('form').submit();
        cy.get('.errorInput').contains("Ingrese solo letras y caracteres !?¡¿.,#. Solo de 2 a 200 caracteres");
    });

    it("Discussions Empty title", () => {
        cy.visit("http://127.0.0.1:3000/forum");
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.get('.form-search-criteria').click();
        cy.get('.form-search-criteria').get('form').submit();
        cy.get('.errorInput').contains("Ingrese solo letras y caracteres !?¡¿.,#. Solo de 2 a 200 caracteres");
    });

    it("Not Found Discussions More popular", () => {
        cy.contains('Mas populares').click();
        cy.get('.forum-discussion-list').contains("No se encontraron discusiones");
    });

    it("Discussions More popular", () => {
        cy.visit("http://127.0.0.1:3000/forum");
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.intercept('GET', '/discussions/tracing/61abf2596d30937d186177ef', {
            fixture:'discussions.json'
        });
        cy.contains('Mas populares').click();
        cy.get('.forum-discussion-list').contains("¿Qué opinan de las cuentos?");
        cy.get('.forum-discussion-list').contains("¿Qué opinan de las canciones?");
    });

    it("Discussions News", () => {
        cy.visit("http://127.0.0.1:3000/forum");
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.contains('Mas nuevos').click();
        cy.get('.forum-discussion-list').contains("¿Qué opinan de las lecciones?");
    });

    it("Not Found Discussions News", () => {
        cy.visit("http://127.0.0.1:3000/forum");
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.intercept('GET', '/discussions/filters/news', {
            status:404
        });
        cy.contains('Mas nuevos').click();
        cy.get('.forum-discussion-list').contains("No se encontraron discusiones");
    });

    it("Discussions Following", () => {
        cy.visit("http://127.0.0.1:3000/forum");
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.contains('Siguiendo').click();
        cy.get('.forum-discussion-list').contains("¿Qué opinan de las cuentos?");
    });

    it("Click Discussion", () => {
        cy.contains('¿Qué opinan de las cuentos?').click();
        cy.get('.forum-discussion-container').contains("¿Qué opinan de las cuentos?");
    });

    it("Not Found Discussion", () => {
        cy.intercept('GET', '/discussions/61ad19e31a1532db106c36bd', {
            status: 404
        });
        cy.contains('¿Qué opinan de las cuentos?').click();
        cy.get('.not-found-discussion').contains("No se encontro la discusión");
    });

    it("Error Server Discussion", () => {
        cy.intercept('GET', '/discussions/61ad19e31a1532db106c36bd', {
            status: 500
        });
        cy.contains('¿Qué opinan de las cuentos?').click();
        cy.get('.not-found-discussion').contains("Error en el servidor. Intenta más tarde");
    });

    it("Finish Time Token Discussion", () => {
        cy.intercept('GET', '/discussions/61ad19e31a1532db106c36bd', {
            statusCode: 419
        });
        cy.contains('¿Qué opinan de las cuentos?').click();
        cy.get('.alert-main-container').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
        cy.contains('Aceptar').click();
        cy.contains("Iniciar sesión");
    });

    it("Not Token Discussion", () => {
        cy.visit("http://127.0.0.1:3000/forum");
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.intercept('GET', '/discussions/61ad19e31a1532db106c36bd', {
            status: 401
        });
        cy.contains('¿Qué opinan de las cuentos?').click();
        cy.get('.alert-main-container').contains("No estás autorizado para realizar esta funcionalidad");
        cy.contains('Aceptar').click();
    });

    it("Not Token Discussions More popular", () => {
        cy.intercept('GET', '/discussions/filters/populars', {
            status: 401
        });
        cy.contains('Mas populares').click();
        cy.get('.alert-main-container').contains("No estás autorizado para realizar esta funcionalidad");
        cy.contains('Aceptar').click();
    });

    it("Not Token Discussions News", () => {
        cy.intercept('GET', '/discussions/filters/news', {
            status: 401
        });
        cy.contains('Mas nuevos').click();
        cy.get('.alert-main-container').contains("No estás autorizado para realizar esta funcionalidad");
        cy.contains('Aceptar').click();
    });

    it("Not Token Discussions Following", () => {
        cy.intercept('GET', '/discussions/tracing/61abf2596d30937d186177ef', {
            status: 401
        });
        cy.contains('Siguiendo').click();
        cy.get('.alert-main-container').contains("No estás autorizado para realizar esta funcionalidad");
        cy.contains('Aceptar').click();
    });


    it("Finish Time Token Discussions More popular", () => {
        cy.intercept('GET', '/discussions/filters/populars', {
            status: 419
        });
        cy.contains('Mas populares').click();
        cy.get('.alert-main-container').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
        cy.contains('Aceptar').click();
        cy.contains("Iniciar sesión");
    });

    it("Finish Time Token Discussions News", () => {
        cy.visit("http://127.0.0.1:3000/forum");
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.intercept('GET', '/discussions/filters/news', {
            status: 419
        });
        cy.contains('Mas nuevos').click();
        cy.get('.alert-main-container').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
        cy.contains('Aceptar').click();
    });

    it("Finish Time Token Discussions Following", () => {
        cy.visit("http://127.0.0.1:3000/forum");
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.intercept('GET', '/discussions/tracing/61abf2596d30937d186177ef', {
            status: 419
        });
        cy.contains('Siguiendo').click();
        cy.get('.alert-main-container').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
        cy.get('.modal-button').click();
    });

    it("Not Found Discussions Following", () => {
        cy.visit("http://127.0.0.1:3000/forum");
        cy.get('.sidebar-dashboard-container').get('a[href="/forum"]').click();
        cy.intercept('GET', '/discussions/tracing/61abf2596d30937d186177ef', {
            status: 404
        });
        cy.contains('Siguiendo').click();
        cy.get('.forum-discussion-list').contains("No se encontraron discusiones");
    });
})