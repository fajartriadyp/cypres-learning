import LoginPage from "../pages/loginPages";

describe("Login Tests", () => {
    beforeEach(() => {
        cy.fixture("users.json").as("users");
        LoginPage.visit(); 
    });


    it("should login successfully", function () {
        LoginPage.exitBanner()
        LoginPage.clickLoginButton();
        LoginPage.verifyLoginWrapper();
        LoginPage.fillPhoneNumber(this.users.validUser.phone);
        LoginPage.fillPassword(this.users.validUser.password);
        LoginPage.submitLogin();
    });
});
