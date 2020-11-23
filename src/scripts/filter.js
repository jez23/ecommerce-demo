import globalObject from './globalStateObject.js';
import createHTML from './createHTML.js';
import eventHandlers from './eventHandlers.js';

/* This controls the filter */
export const filter = () => {
        let filterObj={}
        document.querySelectorAll('input[name*="star"],input[name*="delivery"],input[name*="price"]').forEach(

        input => {
        input.oninput = function(){
            if(this.checked){
            if(!(this.name in filterObj)){
                filterObj[this.name] = []
            }
                filterObj[this.name].push(this.value)
            }else{
            let index = filterObj[this.name].findIndex(i=>i==this.name)
            filterObj[this.name].splice(index,1)
            }
            let filtered = [...globalObject.currentOnScreenProducts]

            if(filterObj.stars && filterObj.stars.length){
            filtered = filtered.filter(i=>filterObj.stars.includes(i.stars))
            }
            if(filterObj.delivery && filterObj.delivery.length){
            filtered = filtered.filter(i=>filterObj.delivery.includes(i.delivery))
            }
            if(filterObj.price && filterObj.price.length){
            filtered = filtered.filter(product=>
                filterObj.price.some(i=>{
                let [start,end] = i.split('_')
                return +product.price > +start && +product.price < +end
                })
            )
            }

            createHTML(filtered);
            eventHandlers(globalObject);
        }
        })
}


export function resetFilters(){
    document.querySelectorAll('input[name*="star"],input[name*="delivery"],input[name*="price"]').forEach(el =>{
      el.checked = false;
    });
    createHTML(globalObject.currentOnScreenProducts);
    eventHandlers(globalObject);
}

export default {
    filter,
    resetFilters
}

