import 'cypress-file-upload';

describe("Edit Profile", () => {
    before(() => {
        cy.visit("http://127.0.0.1:3000/login");
        cy.get('[name="username"]').type("Miros");
        cy.get('[name="password"]').type("Mmol78963#");
        cy.get('.button').click();
        cy.get('.button').click();
        cy.get('.text-button').click();
        cy.get('.adminmenubarIconToggle').click();
        cy.contains('Editar perfil').click();
    });

    it("Edit Profile Successful", () => {
        cy.wait(3000);
        const filepath = 'photo.png'
        cy.get('[name="file"]').attachFile(filepath);
        cy.get('input[name="name"]').clear().type("Laura");
        cy.get('input[name="lastname"]').clear().type("Gonzalez");
        cy.get('[name="dateBirth"]').clear().type("2001-05-18");
        cy.get('[name="idState"]').select("Veracruz");
        cy.get('[name="idCity"]').select("Xalapa");
        cy.get('[name="email"]').clear().type("martha_89_7@outlook.com");
        cy.get('.userprofile-dashboard-container').click();
        cy.get('.editprofile-main-container').submit();
        cy.get(".successfulMessage").contains("La cuenta se actualizo exitosamente");
    });

    it("Edit Profile Other Successful", () => {
        const filepath = 'photo.png'
        cy.get('[name="file"]').attachFile(filepath);
        cy.get('input[name="name"]').clear().type("Martha");
        cy.get('input[name="lastname"]').clear().type("Ortiz");
        cy.get('[name="dateBirth"]').clear().type("2000-05-07");
        cy.get('[name="idState"]').select("Veracruz");
        cy.get('[name="idCity"]').select("Xalapa");
        cy.get('[name="email"]').clear().type("martha_15_7@outlook.com");
        cy.get('.userprofile-dashboard-container').click();
        cy.get('.userprofile-dashboard-container').click();
        cy.get('.editprofile-main-container').submit();
        cy.get(".successfulMessage").contains("La cuenta se actualizo exitosamente");
    });

    it("Edit Profile Exists", () => {
        cy.get('[name="username"]').clear().type("Martha");
        cy.get('[name="email"]').clear().type("marthamiroslavaortizlopez@gmail.com");
        cy.get('.userprofile-dashboard-container').click();
        cy.get('.editprofile-main-container').submit();
        cy.get(".errorMessage").contains("Existe una cuenta con el mismo nombre de usuario o correo");
    });

    it("Edit Profile Blanks", () => {
        cy.get('input[name="name"]').clear().type("         ");
        cy.get('input[name="lastname"]').clear().type("     ");
        cy.get('[name="dateBirth"]').clear().type("2021-05-18");
        cy.get('[name="idState"]').select("Elige una opci??n");
        cy.get('[name="idCity"]').select("Elige una opci??n");
        cy.get('[name="username"]').clear().type("      ");
        cy.get('[name="email"]').clear().type("     ");
        cy.get('.editprofile-main-container').submit();
        cy.get(".errorInput").contains("Ingrese solo de 2 a 150 car??cteres y solo letras");
        cy.get(".errorInput").contains("Ingrese una fecha de nacimiento v??lida. Un rango de 10 a 100 a??os");
        cy.get(".errorInput").contains("El correo debe ser v??lido");
        cy.get(".errorInput").contains("Ingrese solo de 3 a 20 car??cteres. Solo letras y n??meros");
        cy.get(".errorInput").contains("El campo es requerido");
    });

    it("Edit Profile Empty", () => {
        cy.get('input[name="name"]').clear();
        cy.get('input[name="lastname"]').clear();
        cy.get('[name="dateBirth"]').clear().type("2031-05-18");
        cy.get('[name="idState"]').select("Elige una opci??n");
        cy.get('[name="idCity"]').select("Elige una opci??n");
        cy.get('[name="username"]').clear();
        cy.get('[name="email"]').clear();
        cy.get('.editprofile-main-container').submit();
        cy.get(".errorInput").contains("Ingrese solo de 2 a 150 car??cteres y solo letras");
        cy.get(".errorInput").contains("Ingrese una fecha de nacimiento v??lida. Un rango de 10 a 100 a??os");
        cy.get(".errorInput").contains("El correo debe ser v??lido");
        cy.get(".errorInput").contains("Ingrese solo de 3 a 20 car??cteres. Solo letras y n??meros");
        cy.get(".errorInput").contains("El campo es requerido");
    });

    it("Edit Profile Error Data", () => {
        cy.get('input[name="name"]').clear().type("$%&&&////");
        cy.get('input[name="lastname"]').clear().type("$%4545&&&////");
        cy.get('[name="dateBirth"]').clear().type("2031-05-18");
        cy.get('[name="idState"]').select("Elige una opci??n");
        cy.get('[name="idCity"]').select("Elige una opci??n");
        cy.get('[name="username"]').clear().type("re4555$%&&&////");
        cy.get('[name="email"]').clear().type("martha_24@gmailcom");
        cy.get('.editprofile-main-container').submit();
        cy.get(".errorInput").contains("Ingrese solo de 2 a 150 car??cteres y solo letras");
        cy.get(".errorInput").contains("Ingrese una fecha de nacimiento v??lida. Un rango de 10 a 100 a??os");
        cy.get(".errorInput").contains("El correo debe ser v??lido");
        cy.get(".errorInput").contains("Ingrese solo de 3 a 20 car??cteres. Solo letras y n??meros");
        cy.get(".errorInput").contains("El campo es requerido");
    });

    it("Error Server Edit Profile", () => {
        cy.get('input[name="name"]').clear().type("Martha");
        cy.get('input[name="lastname"]').clear().type("Ortiz");
        cy.get('[name="dateBirth"]').clear().type("2000-05-07");
        cy.get('[name="idState"]').select("Veracruz");
        cy.get('[name="idCity"]').select("Xalapa");
        cy.get('[name="username"]').clear().type("Miros");
        cy.get('[name="email"]').clear().type("martha_15_7@outlook.com");
        cy.get('.userprofile-dashboard-container').click();
        cy.intercept('PUT', '/accounts', {
            status: 500
        });
        cy.get('.editprofile-main-container').submit();
        cy.get('.errorMessage').contains("Error en el servidor. Intenta m??s tarde");
    });

    it("Not Token Edit Profile", () => {
        cy.get('input[name="name"]').clear().type("Martha");
        cy.get('input[name="lastname"]').clear().type("Ortiz");
        cy.get('.userprofile-dashboard-container').click();
        cy.intercept('PUT', '/accounts', {
            status: 401
        });
        cy.get('.editprofile-main-container').submit();
        cy.get('.alert-main-container').contains("No est??s autorizado para realizar esta funcionalidad");
        cy.get('.alert-content-container').contains("Aceptar").click();
    });

    it("Finish Time Edit Profile", () => {
        cy.get('input[name="name"]').clear().type("Martha");
        cy.get('input[name="lastname"]').clear().type("Ortiz");
        cy.get('[name="dateBirth"]').clear().type("2000-05-07");
        cy.get('.userprofile-dashboard-container').click();
        cy.intercept('PUT', '/accounts', {
            status: 419
        });
        cy.get('.editprofile-main-container').submit();
        cy.get('.alert-main-container').contains("Se agotado su tiempo en el sistema, por favor vuelva a iniciar sesi??n");
        cy.contains('Aceptar').click();
    });
});
