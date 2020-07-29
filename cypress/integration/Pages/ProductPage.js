import ProductPageSelectors from '../PagesSelectors/ProductPageSelectors';
import BasePageSelectors from '../PagesSelectors/BasePageSelectors';
import AllItemsPageSelectors from '../PagesSelectors/AllItemsPageSelectors';
import ShouldValues from '../PagesSelectors/ShouldValues';

class ProductPage {
    clickBack() {
        cy.get(ProductPageSelectors.BACK_BUTTON).click({force: true});
        cy.get(BasePageSelectors.PRODUCTS_HEADER).should(ShouldValues.VISIBLE);
    }

    CartHandleRemoveOrAdd(clickSelector ,shouldSelector) {
        cy.get("." + AllItemsPageSelectors[clickSelector])
        .click()
        .should('have.class', AllItemsPageSelectors[shouldSelector]);
    }
}
export default ProductPage;