import 'cypress-file-upload';

describe("Add Account", () => {
    before(() => {
        cy.visit("http://127.0.0.1:3000/signUP");
    })

    it("Add Account Empty Data", () => {
        cy.get('[name="name"]').click();
        cy.get('.signup-input-personal-information-form').submit();
        cy.get(".errorInput").contains("Ingrese solo de 2 a 150 carácteres y solo letras");
        cy.get(".errorInput").contains("Ingrese una fecha de nacimiento válida. Un rango de 10 a 100 años");
        cy.get(".errorInput").contains("El correo debe ser válido");
        cy.get(".errorInput").contains("Ingrese solo de 3 a 20 carácteres. Solo letras y números");
        cy.get(".errorInput").contains("Ingrese solo de 8 a 16 carácteres. Debe contener letras mayúsculas, minúsculas, números y un caracter especial @!%?#");
        cy.get(".errorInput").contains("El campo es requerido");
    });

    it("Add Account Blanks", () => {
        cy.get('[name="name"]').type("   ");
        cy.get('[name="lastname"]').type("   ");
        cy.get('[name="dateBirth"]').type("2021-05-18")
        cy.get('[name="idState"]').type("   ");
        cy.get('[name="idCity"]').type("   ");
        cy.get('[name="username"]').type("   ");
        cy.get('[name="email"]').type("   ");
        cy.get('[name="password"]').type("     ");
        cy.get('.signup-input-personal-information-form').submit();
        cy.get(".errorInput").contains("Ingrese solo de 2 a 150 carácteres y solo letras");
        cy.get(".errorInput").contains("Ingrese una fecha de nacimiento válida. Un rango de 10 a 100 años");
        cy.get(".errorInput").contains("El correo debe ser válido");
        cy.get(".errorInput").contains("Ingrese solo de 3 a 20 carácteres. Solo letras y números");
        cy.get(".errorInput").contains("Ingrese solo de 8 a 16 carácteres. Debe contener letras mayúsculas, minúsculas, números y un caracter especial @!%?#");
        cy.get(".errorInput").contains("El campo es requerido");
    });   

    it("Verification Account Not Account", () => {
        cy.get('[name="code"]').type("123456");
        cy.get('.signup-input-verification-container').submit();
        cy.get(".errorMessage").contains("No se encontro la cuenta");
    });

    it("Add Account Error Data", () => {
        cy.get('[name="name"]').clear().type("5t65%&");
        cy.get('[name="lastname"]').clear().type("5t65%&####");
        cy.get('[name="dateBirth"]').clear().type("2069-05-18")
        cy.get('[name="idState"]').type("vf$%%$55");
        cy.get('[name="idCity"]').type("vf$%%$55");
        cy.get('[name="username"]').clear().type("#$%%&&&&&$%%%443");
        cy.get('[name="email"]').clear().type("kmfrng_234outlook.com");
        cy.get('[name="password"]').clear().type("njngjnfgjn3#");
        cy.get('.signup-input-personal-information-form').submit();
        cy.get(".errorInput").contains("Ingrese solo de 2 a 150 carácteres y solo letras");
        cy.get(".errorInput").contains("Ingrese una fecha de nacimiento válida. Un rango de 10 a 100 años");
        cy.get(".errorInput").contains("El correo debe ser válido");
        cy.get(".errorInput").contains("Ingrese solo de 3 a 20 carácteres. Solo letras y números");
        cy.get(".errorInput").contains("Ingrese solo de 8 a 16 carácteres. Debe contener letras mayúsculas, minúsculas, números y un caracter especial @!%?#");
        cy.get(".errorInput").contains("El campo es requerido");
    });

    it("Add Account Exists", () => {
        cy.get('[name="name"]').clear().type("Miroslava");
        cy.get('[name="lastname"]').clear().type("Ortiz");
        cy.get('[name="dateBirth"]').clear().type("2000-05-18")
        cy.get('[name="idState"]').select('Veracruz');
        cy.get('[name="idCity"]').select("Xalapa");
        cy.get('[name="username"]').clear().type("Miros");
        cy.get('[name="email"]').clear().type("martha_15_7@outlook.com");
        cy.get('[name="password"]').clear().type("Mmmvfkmg#244");
        cy.contains('Registrarse').click();
        cy.get(".errorMessage").contains("Existe una cuenta con el mismo nombre de usuario o correo");
    });

    it("Send Code Not Account", () => {
        cy.contains('Reenviar código').click();
        cy.get(".errorMessage").contains("No se encontro ningun correo");
    });

    it("Add Account Successful", () => {
        const filepath = 'photo.png'
        cy.get('[name="file"]').attachFile(filepath);
        cy.get('[name="name"]').clear().type("Miroslava");
        cy.get('[name="lastname"]').clear().type("Ortiz");
        cy.get('[name="dateBirth"]').clear().type("2000-05-18")
        cy.get('[name="idState"]').select('Veracruz');
        cy.get('[name="idCity"]').select("Xalapa");
        cy.get('[name="username"]').clear().type("Miroswr43");
        cy.get('[name="email"]').clear().type("zs18012149@estudiantes.uv.mx");
        cy.get('[name="password"]').clear().type("Mmmvfkmg#244");
        cy.contains('Registrarse').click();
        cy.wait(3000);
        cy.get(".successfulMessage").contains("La cuenta se creo exitosamente");
    });

    it("Send Code Successful", () => {
        cy.visit("http://127.0.0.1:3000/signUP");
        cy.contains('Reenviar código').click();
        cy.get(".successfulMessage").contains("El código de confirmación se reenvio exitosamente");
    });

    it("Verification Account Code Invalid", () => {
        cy.get('[name="code"]').clear().type("123456");
        cy.get('.signup-input-verification-container').submit();
        cy.get(".errorMessage").contains("El código de confimación es inválido");
    });

    it("Verification Account Successful", () => {
        cy.get('[name="code"]').clear().type("127456");
        cy.intercept('PATCH', 'login', {
            status: 200,
            body: {
                messageHappened: 'La cuenta se verifico exitosamente',
            },
        });
        cy.get('.signup-input-verification-container').submit();
        cy.get(".login-main-container").contains("Iniciar sesión");
    });

    it("Verification Account Error Data", () => {
        cy.visit("http://127.0.0.1:3000/signUP");
        cy.get('[name="code"]').clear().type("#$$%%%%");
        cy.get('.signup-input-verification-container').click();
        cy.get(".errorInput").contains("Ingrese solo número de 6 dígitos");
    });

    it("Verification Account Blanks", () => {
        cy.visit("http://127.0.0.1:3000/signUP");
        cy.get('[name="code"]').clear().type("        ");
        cy.get('.signup-input-verification-container').click();
        cy.get(".errorInput").contains("Ingrese solo número de 6 dígitos");
    });
});