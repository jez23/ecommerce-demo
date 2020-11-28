import globalObject from './globalStateObject.js';
import Product from './Product.js';
/* Creates new objects based on the JSON file, using the class constructor */
const createNewProducts = listOfProductsToDisplay => {
    const returnedObjects = listOfProductsToDisplay.reduce( (accumulator, currentValue) => {
          accumulator.push(new Product(
            currentValue.id, 
            currentValue.title, 
            currentValue.image, 
            currentValue.price, 
            currentValue.type, 
            currentValue.stars, 
            currentValue.description, 
            currentValue.delivery)  
            )
            return accumulator; 
        }, [])
    globalObject.setState({currentOnScreenProducts: returnedObjects})
    return globalObject.readState();
  }
  
  export default createNewProducts;