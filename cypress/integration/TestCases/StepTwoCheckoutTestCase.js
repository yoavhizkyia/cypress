import StepACheckoutPage from '../Pages/StepACheckoutPage';
import BasePage from '../Pages/BasePage';
import CartPage from '../Pages/CartPage';
import StepTwoCheckoutPage from '../Pages/StepTwoCheckOutPage';
import InformationCheckout from '../PagesSelectors/InformationCheckout';
import StepACheckoutSelectors from '../PagesSelectors/StepACheckoutSelectors';

const StepTwoCheckoutTest = () => {
    const stepACheckoutPage = new StepACheckoutPage();
    const basePage = new BasePage();
    const cartPage = new CartPage();
    const stepTwoCheckoutPage = new StepTwoCheckoutPage();

    describe('Overview', () => {
        it('Cancel Order', () => {
            stepTwoCheckoutPage.cancelBtn();
        }); 

        it('Open Cart Add Your Information And Continue', () => {
            basePage.clickShoppingCart();
            cartPage.checkout();

            stepACheckoutPage.fillAllField(StepACheckoutSelectors, InformationCheckout.NAME, 'FIRST_NAME',
                InformationCheckout.LAST_NAME, 'LAST_NAME',
                InformationCheckout.POSTAL_CODE, 'POSTAL_CODE');

            stepACheckoutPage.countineButton();
        });

        it('Finish Shopping', () => {
            stepTwoCheckoutPage.finishBtn();
        });

        it('log Out', () => {
            basePage.logOut();
        });
    });
}
export default StepTwoCheckoutTest;