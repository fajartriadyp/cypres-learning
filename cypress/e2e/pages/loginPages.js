class LoginPage {
    visit() {
        cy.visit("https://recruitment-staging-queenbee.paradev.io/"); 
    }

    clickLoginButton() {
        cy.xpath("(//a[normalize-space()='Masuk'])[1]").click();
    }

    verifyLoginWrapper() {
        cy.xpath("(//div[@class='styles_main-login__wrapper__TL3_Y'])[1]").should("be.visible");
    }

    fillPhoneNumber(phone) {
        cy.xpath("(//input[@id='page-login__tabs-number__input-number'])[1]").type(phone);
    }

    fillPassword(password) {
        cy.xpath("(//input[@id='page-login__tabs-email__input-password'])[1]").type(password);
    }

    submitLogin() {
        cy.xpath("(//button[normalize-space()='Masuk'])[1]").click();
    }
    exitBanner(){
        cy.xpath('//*[@id="chakra-modal--header-1"]/svg').click();
    
    }
}

export default new LoginPage();
