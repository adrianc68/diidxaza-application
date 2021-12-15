describe("Consult Reports", () => {
    before(() => {
        cy.visit("http://127.0.0.1:3000/login");
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.button background-orange').click();
        cy.get('.button background-orange').click();
        cy.contains('Reportes').click();
    });

    it("Reports Error Data", () => {
        cy.get('input').type("            ");
        cy.contains('Buscar').click();
        cy.get('.errorInput').contains("Debes tener al menos 2 caracter(es) y no pasar los 150 caracteres.");
    });

    it("Not Found Reports User What Reported", () => {
        cy.get('input').clear().type("Martha");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("No se ha encontrado ningún resultado");
    });

    it("Reports User What Reported Successful", () => {
        cy.get('input').clear().type("Miros");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('#61b6b11a3deda1721cd3f2f4').contains("Miros");
        cy.wait(1000);
        cy.get('#61b6b11a3deda1721cd3f2f4 > .report-container > .report-data-container > .report-reported-by-container > .report-reported-by-icon > svg > path').click()
        cy.get('#61b6b11a3deda1721cd3f2f4').contains("Situación:");
        cy.get('#61b6b11a3deda1721cd3f2f4').contains("La discusion tiene muchos comentarios malos por parte de este usuario");
    });

    it("Reports User What Reported Invalid", () => {
        cy.get('input').clear().type("#$$%$%%$%%");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.errorInput').contains("No debes utilizar caracteres extraños");
    });

    it("Finish Time Token Reports User What Reported", () => {
        cy.get('input').clear().type("Martha");
        cy.wait(1000);
        cy.intercept('GET', '/reports/usernameAccount/Martha', {
            status: 419
        });
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
    });

    it("Not Found Reports User Reported", () => {
        cy.get('.form-search-filters-buttons > :nth-child(3)').click();
        cy.get('input').clear().type("Miros");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("No se ha encontrado ningún resultado");
    });

    it("Reports User Reported Invalid", () => {
        cy.get('input').clear().type("##$$$$$%%%");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('.errorInput').contains("No debes utilizar caracteres extraños");
    });

    it("Finish Time Token Reports User Reported", () => {
        cy.get('input').clear().type("Martha");
        cy.wait(1000);
        cy.intercept('GET', '/reports/usernameReported/Martha', {
            status: 419
        });
        cy.contains('Buscar').click();
        cy.get('.semibold').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesión");
    });

    it("Reports User Reported Successful", () => {
        cy.get('input').clear().type("Martha");
        cy.wait(1000);
        cy.contains('Buscar').click();
        cy.get('#61b6b11a3deda1721cd3f2f4').contains("Martha");
        cy.get('#61b6b11a3deda1721cd3f2f4 > .report-container > .report-data-container > .report-reported-by-container > .report-reported-by-icon > svg').click();
        cy.wait(1000);
        cy.get('#61b6b11a3deda1721cd3f2f4').contains("Situación:");
        cy.get('#61b6b11a3deda1721cd3f2f4').contains("La discusion tiene muchos comentarios malos por parte de este usuario");
    });
});
