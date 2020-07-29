import StepTwoCheckoutPageSelectors from '../PagesSelectors/StepTwoCheckoutPageSelectors';
import BasePageSelectors from '../PagesSelectors/BasePageSelectors';
import BasePage from '../Pages/BasePage'

const basePage = new BasePage();

class StepTwoCheckoutPage {
    finishBtn =() => {
        basePage.handleOnClick(StepTwoCheckoutPageSelectors, "FINISH");
        basePage.handleOnContainsShould(StepTwoCheckoutPageSelectors, "FINISH_HEADERS", "VISIBLE")
    }

    cancelBtn() {
        basePage.handleOnClickWithShould(StepTwoCheckoutPageSelectors, "CANCEL", BasePageSelectors, "PRODUCTS_HEADER", "VISIBLE");
    }
}
export default StepTwoCheckoutPage;