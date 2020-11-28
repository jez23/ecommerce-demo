import createNewProducts from './createNewProducts.js';
import createHTML from './createHTML.js';
import eventHandlers from './eventHandlers.js';
import globalObject from './globalStateObject.js';

const getProduct = (productName) => {
    return fetch("./scripts/products.json")
    .then(repsonse => repsonse.json())
    .then(data => displayItemsOnPage(data.products[productName]))
    .catch((error) => {
      throw error;
    })
}

const displayItemsOnPage = (productsToDisplay) => {
    createNewProducts(productsToDisplay); 
    createHTML(globalObject.currentOnScreenProducts);
    eventHandlers(globalObject.readState());
  }

export default getProduct;