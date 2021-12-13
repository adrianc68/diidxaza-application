describe("Login", () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:3000/login");
    });

    it("Login Successful", () => {
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.secondary-button').click();
        cy.get('.secondary-button').click();
        cy.wait(1000);
        cy.get(".userprofile-dashboard-container").contains("¡Bienvenido de nuevo, Martha!");
    });

    it("Login Empty Data", () => {
        cy.get('[name="username"]').type("   ");
        cy.get('[name="password"]').type("   ");
        cy.get('.login-main-container').click();
        cy.get('Button').click();
        cy.get(".errorInput").contains("Ingrese solo de 3 a 20 carácteres. Solo letras y números");
        cy.get(".errorInput").contains("Ingrese solo de 8 a 16 carácteres. Debe contener letras mayúsculas, minúsculas, números y un caracter especial @!%?#");
    });

    it("Login Error Data", () => {
        cy.get('[name="username"]').type("?¡03¿$%");
        cy.get('[name="password"]').type("mcjfmgj#");
        cy.get('.login-main-container').click();
        cy.get('Button').click();
        cy.get(".errorInput").contains("Ingrese solo de 3 a 20 carácteres. Solo letras y números");
        cy.get(".errorInput").contains("Ingrese solo de 8 a 16 carácteres. Debe contener letras mayúsculas, minúsculas, números y un caracter especial @!%?#");
    });

    it("Login Invalid Password", () => {
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol765963#");
        cy.get('.login-create-account-container').click();
        cy.get('Button').click();
        cy.get(".errorMessage").contains("La contraseña es inválida");
    });

    it("Login Not Found", () => {
        cy.get('[name="username"]').type("Miroser");
        cy.get('[name="password"]').type("Mmol765963#");
        cy.get('.login-create-account-container').click();
        cy.get('Button').click();
        cy.get(".errorMessage").contains("No se encontro la cuenta");
    });

    it("Login Blocked Account", () => {
        cy.get('[name="username"]').type("MiroStar");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.login-create-account-container').click();
        cy.get('Button').click();
        cy.get(".errorMessage").contains("La cuenta esta bloqueada o inactiva comuniquese con el administrador");
    });
});