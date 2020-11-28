/* Global Variables */
const globalStateObject  = {
    trolley: [],
    currentOnScreenProducts: [],
    favourites: [],
    currentlySelectedItem : [],
    executed : false,
    setState(newValue) {
        let keyToUpdate = Object.keys(newValue);
         Object.assign(globalStateObject[keyToUpdate], Object.values(newValue[keyToUpdate]));
         return {...globalStateObject};  
    },
    readState(){
        return globalStateObject;
    },
    addToTrolley(product){
        globalStateObject.trolley = [...globalStateObject.trolley, product];
    },
    removeFromTrolley(product){
        const remove = globalStateObject.trolley.findIndex((productInTrolley) => {
            return productInTrolley.id === product.id;
        })
        globalStateObject.trolley.splice( remove, 1);
    },
    addToFavourites(product){
        globalStateObject.favourites = [...globalStateObject.favourites, product];
    },
    removeFromFavourites(product){
        const remove = globalStateObject.favourites.findIndex((productInFavourites) => {
            return productInFavourites.id === product.id;
        })
       globalStateObject.favourites.splice( remove, 1);
    },
    toShowInTrolleyOrFavourites(trolleyOrFavourite){
        const quantityAndValues = trolleyOrFavourite.reduce((acc, cur) => {
            acc[cur.id]? acc[cur.id]++ : acc[cur.id] = 1;
            return acc;
        }, {})
        let values = Object.values(quantityAndValues);
        let findIndexsInTrolley = []
        for(let productIndex in quantityAndValues){
            const index =  trolleyOrFavourite.findIndex(productInTrolley => parseInt(productInTrolley.id) === parseInt(productIndex));
            findIndexsInTrolley = [...findIndexsInTrolley, index];
        }
        const finalTrolleyArray = findIndexsInTrolley.map((indexOfProduct, index) => {
            return {
                item: trolleyOrFavourite[indexOfProduct],
                price: trolleyOrFavourite[indexOfProduct].price,
                qty: values[index],
                total: values[index] * trolleyOrFavourite[indexOfProduct].price
            }
        })
       return finalTrolleyArray;
    },
    addCurrentlySelectedItem(product){
        globalStateObject.currentlySelectedItem = [product];
    }
}

export default globalStateObject;



  