import LoginPageSelectors from '../PagesSelectors/LoginPageSelectors';
import BasePageSelectors from '../PagesSelectors/BasePageSelectors';
import BasePage from '../Pages/BasePage';

const basePage = new BasePage();

class LoginPage {
    // before() {
    //     Cypress.on('fail', () => {
    //       Cypress.runner.stop()
    //     })
    // }


    visit() {
        cy.visit(LoginPageSelectors.SITE);
    }

    fillField(inputValue, PagesSelectors, whichFieldFromPageSelector) {
        let field = cy.get(PagesSelectors[whichFieldFromPageSelector]);
        field.clear();
        field.type(inputValue);
    }

    loginButton() {
        basePage.handleOnClick(LoginPageSelectors, "LOGIN_BUTTON");
    }

    assertIfLogin() {
        let bool = false;
        basePage.handleShould(BasePageSelectors, "PRODUCTS_HEADER", "VISIBLE");
        bool = true;
    }
}
export default LoginPage;