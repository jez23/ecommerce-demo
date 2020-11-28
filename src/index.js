import './css/style.css';

import createHTML from './scripts/createHTML.js';
import eventHandlers from './scripts/eventHandlers.js';
import globalObject from './scripts/globalStateObject.js'; 
import { filter } from './scripts/filter.js';
import getProduct from './scripts/getProduct.js';
import { resetFilters } from './scripts/filter.js';


getProduct("televisions")
  
filter();

document.querySelector('#filter').addEventListener('change' , (e => {
    if(e.target.value === "high"){
      globalObject.currentOnScreenProducts.sort((a,b) => a.price - b.price);
        resetFilters();
        createHTML(globalObject.currentOnScreenProducts); 
        eventHandlers(globalObject.readState());
    } else {
      globalObject.currentOnScreenProducts.sort((a,b) => a.price - b.price).reverse();
        resetFilters();
        createHTML(globalObject.currentOnScreenProducts); 
        eventHandlers(globalObject.readState());
    }
}))   

window.addEventListener('resize', function(event){
    if(window.innerWidth > 999){
            resetFilters();
            createHTML(globalObject.currentOnScreenProducts); 
            eventHandlers(globalObject.readState());
    }
}); 







  













