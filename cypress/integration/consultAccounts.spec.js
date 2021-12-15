describe("Consult Accounts", () => {
    before(() => {
        cy.visit("http://127.0.0.1:3000/login");
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.button').click();
        cy.get('.button').click();
        cy.contains('Cuentas').click();
    });

    it("Accounts Error Data", () => {
        cy.get('input').type("            ");
        cy.contains('Buscar').click();
        cy.get('.errorInput').contains("Debes tener al menos 1 caracter(es) y no pasar los 150 caracteres.");
    });

    it("Not Found Accounts Name", () => {
        cy.get('input').clear().type("Valeria");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("No se ha encontrado ningún resultado");
    });

    it("Accounts Name Successful", () => {
        cy.get('input').clear().type("Martha");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.userlistitem-data-content').contains("Martha");
    });

    it("Accounts Name Invalid", () => {
        cy.get('input').clear().type("24353545");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("La solicitud enviada no es válida");
    });

    it("Finish Time Token Accounts Name", () => {
        cy.get('input').clear().type("Martha");
        cy.wait(1000);
        cy.intercept('GET', '/accounts/name/Martha', {
            status: 419
        });
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
    });

    it("Not Found Accounts Lastname", () => {
        cy.get('.form-search-filters-buttons > :nth-child(3)').click();
        cy.get('input').clear().type("Gonzalez");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("No se ha encontrado ningún resultado");
    });

    it("Accounts LastName Successful", () => {
        cy.get('input').clear().type("Ortiz");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.userlistitem-data-content').contains("Ortiz");
    });

    it("Accounts Lastname Invalid", () => {
        cy.get('input').clear().type("24353545");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("La solicitud enviada no es válida");
    });

    it("Finish Time Token Accounts Lastname", () => {
        cy.get('input').clear().type("Ortiz");
        cy.wait(1000);
        cy.intercept('GET', '/accounts/lastname/Ortiz', {
            status: 419
        });
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
    });

    it("Not Found Accounts Age", () => {
        cy.get(':nth-child(4) > .text-button > .button-container > span').click();
        cy.get('input').clear().type("10");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("No se ha encontrado ningún resultado");
    });

    it("Accounts Age Invalid", () => {
        cy.get('input').clear().type("Martha");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.errorInput').contains("No cumples con el formato adecuado");
    });

    it("Accounts Age Successful", () => {
        cy.get('input').clear().type("21");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.userlistitem-data-content').contains("Miros");
    });

    it("Finish Time Token Accounts Age", () => {
        cy.get('input').clear().type("21");
        cy.wait(1000);
        cy.intercept('GET', '/accounts/age/21', {
            status: 419
        });
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
    });

    it("Not Found Accounts Email", () => {
        cy.get(':nth-child(5) > .text-button > .button-container > span').click();
        cy.get('input').clear().type("martha_35_7@outlook.com");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("No se ha encontrado ningún resultado");
    });

    it("Accounts Email Invalid ", () => {
        cy.get('input').clear().type("12Martha");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.errorInput').contains("No cumples con el formato adecuado");
    });

    it("Accounts Email Successful", () => {
        cy.get('input').clear().type("martha_15_7@outlook.com");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.userlistitem-data-content').contains("Miros");
    });

    it("Finish Time Token Accounts Email", () => {
        cy.get('input').clear().type("martha_15_7@outlook.com");
        cy.wait(1000);
        cy.intercept('GET', '/accounts/email/martha_15_7@outlook.com', {
            status: 419
        });
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
    });

    it("Not Found Accounts Username", () => {
        cy.get(':nth-child(6) > .text-button > .button-container > span').click();
        cy.get('input').clear().type("Karl34");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("No se ha encontrado ningún resultado");
    });

    it("Accounts Username Invalid", () => {
        cy.get('input').clear().type("$%$%%%%");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.errorInput').contains("No cumples con el formato adecuado");
    });

    it("Finish Time Token Accounts Username", () => {
        cy.get('input').clear().type("Miros");
        cy.wait(1000);
        cy.intercept('GET', '/accounts/username/Miros', {
            status: 419
        });
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
    });

    it("Accounts Username Successful", () => {
        cy.get('input').clear().type("Miros");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.userlistitem-data-content').contains("Miros");
    });
    
});
