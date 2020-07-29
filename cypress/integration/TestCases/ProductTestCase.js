import BasePage from '../Pages/BasePage';
import AllItemsPage from '../Pages/AllItemsPage';
import ProductPage from '../Pages/ProductPage';

const ProductTest = () => {
    const basePage = new BasePage();
    const allItemsPage = new AllItemsPage();
    const productPage = new ProductPage();
    
    //After LogIn
    describe('Add And Remove Product To Cart', () => {
        it('Sort The Items', () => {
            allItemsPage.sortItemsByZA()
            allItemsPage.sortItemsByPriceLowHigh();
            allItemsPage.sortItemsByPriceHighLow();
            allItemsPage.sortItemsByAZ();
        });
        
        it('Adding And Removing Random Product From Cart', () => {
            let randomProductNum = allItemsPage.randomAddingProductToCart();
            allItemsPage.randomRemoveProduct(randomProductNum);
        });
        
        it('Adding Random Product To Cart', () => {
            basePage.resetAppState();
            basePage.showAllItems();
            allItemsPage.randomAddingProductToCart();
        });
        
        it('Choose Product And Back', () => {
            allItemsPage.randomChooseProduct();
            productPage.clickBack();
        });
        
        it('Choose Product Add To Cart And Remove', () => {
            basePage.resetAppState();
            basePage.showAllItems();
            allItemsPage.randomChooseProduct();
            productPage.CartHandleRemoveOrAdd("ADD_TO_CART", "REMOVE");
            productPage.CartHandleRemoveOrAdd("REMOVE", "ADD_TO_CART");
        });
        
        it('Choose Product And Add To Cart', () => {
            basePage.resetAppState();
            basePage.showAllItems();
            allItemsPage.randomChooseProduct();
            productPage.CartHandleRemoveOrAdd("ADD_TO_CART","REMOVE");
        });
    }); 
}
export default ProductTest;