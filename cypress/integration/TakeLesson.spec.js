describe("Take Lesson", () => {
    before(() => {
        cy.visit("http://127.0.0.1:3000/login");
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.button background-orange').click();
        cy.get('.button background-orange').click();
        cy.get('.sidebar-dashboard-container').get('a[href="/learning"]').click();
    });

    it("Take Lesson Cancel", () => {
        cy.wait(1500);
        cy.get(':nth-child(2) > .lessonlistitem-main-container > .lessonlistitem-content > p').click();
        cy.get('.lesson-button-panel').get('.button background-orange').click();
    });

    it("Not Found Questions", () => {
        cy.wait(1500);
        cy.get(':nth-child(2) > .lessonlistitem-main-container > .lessonlistitem-content > p').click();
        cy.get('.lesson-button-panel').get('.button').click();
        cy.get(".not-found-questions").contains("No se encontraron preguntas. Intente más tarde");
    });

    it("Error Server Questions", () => {
        cy.wait(1000);
        cy.get('.sidebar-dashboard-container').get('a[href="/learning"]').click();
        cy.wait(1500);
        cy.get(':nth-child(2) > .lessonlistitem-main-container > .lessonlistitem-content > p').click();
        cy.intercept('GET', '/questions/61b6ce44d3d24d3a60c56e07', {
            status:500
        });
        cy.get('.lesson-button-panel').get('.button').click();
        cy.get(".not-found-questions").contains("No se encontraron preguntas. Intente más tarde");
    });

    it("Not Token Answer", () => {
        cy.wait(1000);
        cy.get('.sidebar-dashboard-container').get('a[href="/learning"]').click();
        cy.wait(1500);
        cy.get(':nth-child(1) > .lessonlistitem-main-container > .lessonlistitem-content > p').click();
        cy.get('.lesson-button-panel').get('.button').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.intercept('GET', '/answers/61b6d277d3d24d3a60c56e09', {
            status:401
        });
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.get(".alert-main-container").contains("No estás autorizado para realizar esta funcionalidad");
        cy.get(".alert-main-container").contains("Aceptar").click();
    });

    it("Error Server Answers", () => {
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains('Salir').click();
        cy.wait(1500);
        cy.get(':nth-child(1) > .lessonlistitem-main-container > .lessonlistitem-content > p').click();
        cy.get('.lesson-button-panel').get('.button').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.intercept('GET', '/answers/61b6d277d3d24d3a60c56e09', {
            status:500
        });
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.get(".errorMessage").contains("Error en el servidor. Intenta más tarde");
    });

    it("Answers Invalid", () => {
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains('Salir').click();
        cy.wait(1500);
        cy.get(':nth-child(1) > .lessonlistitem-main-container > .lessonlistitem-content > p').click();
        cy.get('.lesson-button-panel').get('.button').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.get(".errorInput").contains("Seleccione una respuesta");
    });

    it("Take Lesson Successful", () => {
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains('Salir').click();
        cy.wait(1500);
        cy.get(':nth-child(1) > .lessonlistitem-main-container > .lessonlistitem-content > p').click();
        cy.get('.lesson-button-panel').get('.button').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.wait(1000);
        cy.get(':nth-child(2) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.wait(1000);
        cy.get(':nth-child(2) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Terminar").click();
        cy.wait(1000);
        cy.get('.lessonresults-button-panel').contains("Ver resultados").click();
        cy.wait(1000);
        cy.get('.resultlesson-content').contains("¡Felicidades, Martha Ortiz!");
    });

    it("Take Lesson Successful Other", () => {
        cy.wait(1000);
        cy.get('.sidebar-dashboard-container').contains('Aprendizaje').click();
        cy.wait(1500);
        cy.get(':nth-child(1) > .lessonlistitem-main-container > .lessonlistitem-content > p').click();
        cy.get('.lesson-button-panel').get('.button').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.wait(1000);
        cy.get(':nth-child(2) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.wait(1000);
        cy.get(':nth-child(2) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Terminar").click();
        cy.wait(1000);
        cy.get('.lessonresults-button-panel').contains("Cerrar").click();
        cy.wait(1000);
        cy.get('.h1-title-black > span').contains('Da clic en una lección para comenzar.');
    });

    it("Error Server Take Lesson", () => {
        cy.wait(1000);
        cy.get('.sidebar-dashboard-container').contains('Aprendizaje').click();
        cy.wait(1500);
        cy.get(':nth-child(1) > .lessonlistitem-main-container > .lessonlistitem-content > p').click();
        cy.get('.lesson-button-panel').get('.button').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.wait(1000);
        cy.get(':nth-child(2) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.wait(1000);
        cy.get(':nth-child(2) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.intercept('POST', '/lessonRecords', {
            status:500
        });
        cy.get('.answersection-button-panel').contains("Terminar").click();
        cy.wait(1000);
        cy.get(".errorMessage").contains("Error en el servidor. Intenta más tarde");
    });

    it("Finish Time Token Answers", () => {
        cy.wait(1000);
        cy.get('.sidebar-dashboard-container').contains('Aprendizaje').click();
        cy.wait(1500);
        cy.get(':nth-child(1) > .lessonlistitem-main-container > .lessonlistitem-content > p').click();
        cy.get('.lesson-button-panel').get('.button').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .radiobutton-container > label').click();
        cy.wait(1000);
        cy.intercept('GET', '/answers/61b6d277d3d24d3a60c56e09', {
            status:419
        });
        cy.get('.answersection-button-panel').contains("Siguiente").click();
        cy.get(".alert-main-container").contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
        cy.get(".alert-main-container").contains("Aceptar").click();
    });

    it("Finish Time Token Questions", () => {
        cy.visit("http://127.0.0.1:3000/login");
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.button background-orange').click();
        cy.get('.button background-orange').click();
        cy.wait(1000);
        cy.get('.sidebar-dashboard-container').get('a[href="/learning"]').click();
        cy.wait(1500);
        cy.get(':nth-child(2) > .lessonlistitem-main-container > .lessonlistitem-content > p').click();
        cy.intercept('GET', '/questions/61b6ce44d3d24d3a60c56e07', {
            status:419
        });
        cy.get('.lesson-button-panel').get('.button').click();
        cy.get(".alert-main-container").contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
        cy.get(".alert-main-container").contains("Aceptar").click();
    });
});