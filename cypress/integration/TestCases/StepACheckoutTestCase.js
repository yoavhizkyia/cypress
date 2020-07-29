import StepACheckoutPage from '../Pages/StepACheckoutPage';
import BasePage from '../Pages/BasePage';
import CartPage from '../Pages/CartPage';
import InformationCheckout from '../PagesSelectors/InformationCheckout';
import StepACheckoutSelectors from '../PagesSelectors/StepACheckoutSelectors';

const StepACheckoutTest = () => {
    const stepACheckoutPage = new StepACheckoutPage();
    const basePage = new BasePage();
    const cartPage = new CartPage();

    describe('Your Information', () => {
        it('Cancel Order', () => {
            stepACheckoutPage.cancelButton();
        });

        it('Open Cart And Move to Step 1', () => {
            basePage.clickShoppingCart();
            cartPage.checkout();
        });

        it('Fill Field', () => {            
            stepACheckoutPage.fillAllField(StepACheckoutSelectors ,InformationCheckout.NAME, 'FIRST_NAME',
                InformationCheckout.LAST_NAME, 'LAST_NAME',
                InformationCheckout.POSTAL_CODE, 'POSTAL_CODE');
            stepACheckoutPage.countineButton();
        });
    });
}
export default StepACheckoutTest;