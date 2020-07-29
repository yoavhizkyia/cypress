import StepACheckoutPageSelectors from '../PagesSelectors/StepACheckoutSelectors';
import StepACheckoutSelectors from '../PagesSelectors/StepACheckoutSelectors';
import BasePage from '../Pages/BasePage';
import LoginPage from '../Pages/LoginPage';

const basePage = new BasePage();
const loginPage = new LoginPage();

class StepACheckoutPage {
    fillAllField(PagesSelectors, firstName, FIRST_NAME, lastName, LAST_NAME, postalCode, POSTAL_CODE) {
        loginPage.fillField(firstName, PagesSelectors, FIRST_NAME);
        loginPage.fillField(lastName, PagesSelectors, LAST_NAME);
        loginPage.fillField(postalCode, PagesSelectors, POSTAL_CODE);
    }

    cancelButton() {
        basePage.handleOnClick(StepACheckoutPageSelectors, "CANCEL_BUTTON");
        basePage.handleOnContainsShould(StepACheckoutSelectors, "YOUR_CART" , "VISIBLE")
    }

    countineButton() {
        basePage.handleOnClick(StepACheckoutPageSelectors, "CONTINUE");
        basePage.handleOnContainsShould(StepACheckoutSelectors, "OVERVIEW_PAGE" , "VISIBLE");
    }
}
export default StepACheckoutPage;