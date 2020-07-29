import AllItemsPageSelectors from '../PagesSelectors/AllItemsPageSelectors';
import SortListHandle from '../PagesSelectors/SortListHandle';

const ALL_ITEM_LENGTH = 6;
const STARTER_NTH_CHILD_NUMBER = 1;
const FROM_BUTTON_TO_TOP = "FromButtonToTop";
const FROM_TOP_TO_BUTTON = "FromTopToButton";

class AllItemsPage {
    assertTheExpectLengthOfAllItems(listOfItems, allItemExpectLength, numberOfLengthToCheck) {
        expect(listOfItems, SortListHandle[allItemExpectLength]).to.have.length(numberOfLengthToCheck);
    }

    isArraySorted(array, whichSort) {
        switch (whichSort) {
            case (FROM_BUTTON_TO_TOP):
                for (let i = 1; i < array.length; i++) {
                    // Unsorted pair found 
                    if (array[i - 1] > array[i]) {
                        return false;
                    }
                }
                // No unsorted pair found 
                return true;
            case (FROM_TOP_TO_BUTTON):
                for (let i = 1; i < array.length; i++) {
                    // Unsorted pair found 
                    if (array[i - 1] < array[i]) {
                        return false;
                    }
                }
                // No unsorted pair found 
                return true;
            default:
                break;
        }
    }

    isSortByPrice(array, whichSort) {
        switch (whichSort) {
            case (FROM_BUTTON_TO_TOP):
                for (let i in array) {
                    let newArray = array[i].split('$').map(Number);
                    let isSorted = true;
                    for (let j = 0; j < newArray.length - 1; j++) {
                        if (newArray[j] > newArray[j + 1]) {
                            isSorted = false;
                            break;
                        }
                    }
                    return true;
                }

            case (FROM_TOP_TO_BUTTON):
                for (let i in array) {
                    let newArray = array[i].split('$').map(Number);
                    let isSorted = true;
                    for (let j = 0; j < newArray.length - 1; j++) {
                        if (newArray[j] < newArray[j + 1]) {
                            isSorted = false;
                            break;
                        }
                    }
                    return true;
                }
            default:
                break;
        }
    }

    sortItemsByAZ() {
        cy.get(AllItemsPageSelectors.THE_SORT_BUTTON).select(AllItemsPageSelectors.A_TO_Z);
        cy.get(AllItemsPageSelectors.PRODUCT_NAME).should((productNames) => {
            const allProductNames = [];
            for (let index = 0; index < productNames.length; index++) {
                const element = productNames[index];
                allProductNames.push(element.innerText);
            }

            this.assertTheExpectLengthOfAllItems(productNames, "ITEM_LENGTH", ALL_ITEM_LENGTH);
            let bool = this.isArraySorted(allProductNames, FROM_BUTTON_TO_TOP);
            expect(bool).to.be.true;
        });
    }

    sortItemsByZA() {
        cy.get(AllItemsPageSelectors.THE_SORT_BUTTON).select(AllItemsPageSelectors.Z_TO_A);
        cy.get(AllItemsPageSelectors.PRODUCT_NAME).should((productNames) => {
            const allProductNames = [];
            for (let index = 0; index < productNames.length; index++) {
                const element = productNames[index];
                allProductNames.push(element.innerText);
            }
            this.assertTheExpectLengthOfAllItems(productNames, "ITEM_LENGTH", ALL_ITEM_LENGTH);
            let bool = this.isArraySorted(allProductNames, FROM_TOP_TO_BUTTON);
            expect(bool).to.be.true;
        });
    }

    sortItemsByPriceLowHigh() {
        cy.get(AllItemsPageSelectors.THE_SORT_BUTTON).select(AllItemsPageSelectors.LOW_TO_HIGH);
        cy.get(AllItemsPageSelectors.PRODUCT_PRICE).should((productNames) => {
            const allProductNames = [];
            for (let index = 0; index < productNames.length; index++) {
                const element = productNames[index];
                allProductNames.push(element.innerText);
            }
            this.assertTheExpectLengthOfAllItems(productNames, "ITEM_LENGTH", ALL_ITEM_LENGTH);
            let bool = this.isSortByPrice(allProductNames, FROM_BUTTON_TO_TOP);
            expect(bool).to.be.true;
        });
    }

    sortItemsByPriceHighLow() {
        cy.get(AllItemsPageSelectors.THE_SORT_BUTTON).select(AllItemsPageSelectors.HIGH_TO_LOW);
        cy.get(AllItemsPageSelectors.PRODUCT_PRICE).should((productNames) => {
            const allProductNames = [];
            for (let index = 0; index < productNames.length; index++) {
                const element = productNames[index];
                allProductNames.push(element.innerText);
            }
            this.assertTheExpectLengthOfAllItems(productNames, "ITEM_LENGTH", ALL_ITEM_LENGTH);
            let bool = this.isSortByPrice(allProductNames, FROM_TOP_TO_BUTTON);
            expect(bool).to.be.true;
        });
    }

    randomAddingProductToCart() {
        //Should start from 1 because nth-child() starting from 1, 1 To 6
        const rndProduct = Math.floor(Math.random() * ALL_ITEM_LENGTH) + STARTER_NTH_CHILD_NUMBER;
        const selectorAddItem = AllItemsPageSelectors.CHILD + rndProduct + AllItemsPageSelectors.ADD_ITEM_IN_LIST;

        cy.get(selectorAddItem).click()
            .should('have.class', AllItemsPageSelectors.REMOVE);

        return rndProduct;
    }

    randomRemoveProduct(rndProduct) {
        const selectorRemoveItem = AllItemsPageSelectors.CHILD + rndProduct + AllItemsPageSelectors.REMOVE_ITEM_IN_LIST;

        cy.get(selectorRemoveItem).click()
            .should('have.class', AllItemsPageSelectors.ADD_TO_CART);
    }

    randomChooseProduct() {
        // random 0-5 Because the items is sort from 0->5 
        const rndProduct = Math.floor(Math.random() * ALL_ITEM_LENGTH);
        const selectorRandomChoose = AllItemsPageSelectors.ITEM + rndProduct + AllItemsPageSelectors.TITLE;

        cy.get(selectorRandomChoose).click({ force: true });
    }
}
export default AllItemsPage;