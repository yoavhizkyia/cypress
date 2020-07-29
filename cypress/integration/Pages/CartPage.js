import CartPageSelectors from '../PagesSelectors/CartPageSelectors';
import BasePageSelectors from '../PagesSelectors/BasePageSelectors';
import BasePage from '../Pages/BasePage';

const basePage = new BasePage();
const STARTER_NTH_CHILD_NUMBER = 3;

class CartPage {
    countineShopping() {
        basePage.handleOnContainsClick(CartPageSelectors, "CONTINUE_SHOPPING");
        basePage.handleShould(BasePageSelectors, "PRODUCTS_HEADER", "VISIBLE");
    }

    checkout() {
        basePage.handleOnClickWithShould(CartPageSelectors, "CHECKOUT", CartPageSelectors, "SUB_HEADER", "VISIBLE")
    }

    removeAllItemsFromCArt() {
        cy.get(CartPageSelectors.REMOVE_BUTTON).each(($el, index, $list) => {
            if (($list.length > 0) && ($list.length <= 6)) {
                cy.wrap($el).click();
            }
        });
        basePage.handleShould(CartPageSelectors, "REMOVE_BUTTON", "NOT_VISIBLE");
    }

    randomRemoveFromCart() {
        cy.get(CartPageSelectors.REMOVE_BUTTON).then(($list) => {
            const listLength = $list.length;

            //Should start from 3 because nth-child() starting from STARTER_NTH_CHILD_NUMBER
            const randomProductRemoving = Math.floor(Math.random() * listLength) + STARTER_NTH_CHILD_NUMBER;
            const randomRemoveSelector = CartPageSelectors.CHILD + randomProductRemoving + CartPageSelectors.REMOVE_ITEM_IN_CART;

            cy.get(randomRemoveSelector).click();
        }); 
    }    
}
export default CartPage;