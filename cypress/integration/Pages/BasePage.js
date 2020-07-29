import BasePageSelectors from '../PagesSelectors/BasePageSelectors';
import ShouldValues from '../PagesSelectors/ShouldValues';

class BasePage {
    // handlers with get()
    handleOnClick(whichPageClickSelector, clickSelector) {
        cy.get(whichPageClickSelector[clickSelector]).click();
    }

    handleShould(whichPageShouldSelector, shouldSelector, whatShouldHappened) {
        cy.get(whichPageShouldSelector[shouldSelector]).should(ShouldValues[whatShouldHappened]);
    }

    handleOnClickWithShould(whichPageClickSelector, clickSelector, whichPageShouldSelector, shouldSelector, whatShouldHappened) {
        this.handleOnClick(whichPageClickSelector, clickSelector);
        this.handleShould(whichPageShouldSelector, shouldSelector, whatShouldHappened);
    }

    // handlers with contains()
    handleOnContainsClick(whichPageClickSelector, clickSelector) {
        cy.contains(whichPageClickSelector[clickSelector]).click();
    }

    handleOnContainsShould(whichPageShouldSelector, shouldSelector, whatShouldHappened) {
        cy.contains(whichPageShouldSelector[shouldSelector]).should(ShouldValues[whatShouldHappened]);
    }

    handleOnContainsClickWithShould(whichPageClickSelector, clickSelector, whichPageShouldSelector, shouldSelector, whatShouldHappened) {
        this.handleOnContainsClick(whichPageClickSelector, clickSelector);
        this.handleOnContainsShould(whichPageShouldSelector, shouldSelector, whatShouldHappened);
    }

    clickShoppingCart() {
        this.handleOnClickWithShould(BasePageSelectors, "CART_IMAGE", BasePageSelectors, "SUB_HEADER", "VISIBLE");
    }

    openMenu() {
        this.handleOnClickWithShould(BasePageSelectors, "MENU_BUTTON", BasePageSelectors, "THE_MENU", "VISIBLE");
    }
   
    closeMenu() {
        this.handleOnContainsClickWithShould(BasePageSelectors, "CLOSE_MENU", BasePageSelectors, "THE_MENU", "NOT_VISIBLE")
    }

    showAllItems() {
        this.openMenu();
        this.handleOnClickWithShould(BasePageSelectors, "ALL_ITEMS", BasePageSelectors, "PRODUCTS_HEADER", "VISIBLE");
    }

    clickAbout() {
        this.openMenu();
        this.handleOnClickWithShould(BasePageSelectors, "ABOUT", BasePageSelectors, "THE_ABOUT_PAGE_HEADER", "VISIBLE");
    }

    logOut() {
        this.openMenu();
        this.handleOnClickWithShould(BasePageSelectors, "LOG_OUT", BasePageSelectors, "LOGIN_BUTTON", "VISIBLE");
    }

    resetAppState() {
        this.openMenu();
        this.handleOnClick(BasePageSelectors, "RESET_APP_STATE");
        this.closeMenu();
        this.handleShould(BasePageSelectors, "NUMBER_ON_CART_IMAGE", "NOT_VISIBLE")
    }
}
export default BasePage;