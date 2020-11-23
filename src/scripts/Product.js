import globalStateObject from './globalStateObject.js';

// Creates a new product object 
/* CONTROLLER */
const Product = class Product {
    constructor(id, title, image, price, type, stars, description, delivery) {
        this.id = id,
        this.title = title,
        this.image = image,
        this.price = price,
        this.type = type,
        this.stars = stars,
        this.description = description,
        this.delivery = delivery
    }

    addToTrolley(product){
        globalStateObject.trolley = [...globalStateObject.trolley, product];
        console.log('Done:' + globalStateObject)
    };
    addToFavourites(product){
        globalStateObject.favourites = [...globalStateObject.favourites, product];
        console.log('Done:' + globalStateObject)
    };
    addCurrentlySelectedItem(product){

        globalStateObject.currentlySelectedItem = [product];
        console.log("added")
    }
}

export default Product;