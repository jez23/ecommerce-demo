import createNewProducts from './createNewProducts.js';
import createHTML from './createHTML.js';
import eventHandlers from './eventHandlers.js';
import globalObject from './globalStateObject.js';

const getProduct = () => {
    return fetch("./scripts/products.json")
    .then(repsonse => repsonse.json())
    .then(data => displayItemsOnPage(data.products))
    .catch((error) => {
      throw error;
    })
}

const displayItemsOnPage = (productsToDisplay) => {
    let productsToDisplayCopy = {...productsToDisplay}
    let selectedSearchInput = document.querySelector('#productsSearch').value;
    createNewProducts(productsToDisplayCopy[selectedSearchInput])
  
    createHTML(globalObject.currentOnScreenProducts);
    eventHandlers(globalObject.readState());
  }

export default getProduct;