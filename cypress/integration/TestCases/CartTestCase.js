import BasePage from '../Pages/BasePage';
import CartPage from '../Pages/CartPage';
import AllItemsPage from '../Pages/AllItemsPage';

const CartTest = () => {
    const basePage = new BasePage();
    const cartPage = new CartPage();
    const allItemsPage = new AllItemsPage();

    describe('Cart Test',() => {
        it('Adding Random Product To The Cart', () => {
            basePage.resetAppState();
            basePage.showAllItems();
            allItemsPage.randomAddingProductToCart();
            allItemsPage.randomAddingProductToCart();
        });

        it('Open Cart', () => {
            basePage.clickShoppingCart();
        });

        it('Remove All Items From Cart', () => {
            basePage.clickShoppingCart();
            cartPage.removeAllItemsFromCArt();
        });

        it('Countinue Shopping Button And Add Again Random Product', () => {
            cartPage.countineShopping();
            allItemsPage.randomAddingProductToCart();
            allItemsPage.randomAddingProductToCart();
        });

        it('Random Removing From Cart', () => {
            basePage.clickShoppingCart();
            cartPage.randomRemoveFromCart();
        });
        
        it('Checkout', () => {
            cartPage.checkout();
        });
    }); 
}
export default CartTest;