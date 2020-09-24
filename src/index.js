import './css/style.css';

/* CONTROLLER */
const getProduct = () => {
  return fetch("./scripts/products.json")
  .then(repsonse => repsonse.json())
  .then(array => getTypeOfItems(array.products))
}

const getTypeOfItems = (array) => {
let name = document.querySelector('#productsSearch');
let value = name.value;
const html = createNewProducts(array[value])
createHTML(html)
}

getProduct();

let productsSearch = document.querySelector('#productsSearch');
productsSearch.addEventListener("change", (e) => {
 switch (e.target.value) {
  case "sofas":
    televisions = [];
    resetFilters();
    getProduct()
    break;
    case "televisions":
      televisions = [];
      resetFilters();
      getProduct()
    break;
    case "fridges":
      televisions = [];
      resetFilters();
      getProduct()
    break;
    case "washingmachines":
      televisions = [];
      resetFilters();
      getProduct()
    break;
}
})

/* Arrays that store all the items */

let trolley = [];
let televisions = [];
const favourites = [];
let currentlySelected = [];
let executed = false;


// Creates a new product object 
/* CONTROLLER */
class Product {
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
}

/* Creates new objects based on the JSON file, using the class constructor */
/* CONTROLLER */
const createNewProducts = array => {
for(let i = 0; i < array.length; i++){
  televisions[i] = new Product(array[i].id, array[i].title, array[i].image, array[i].price, array[i].type, array[i].stars, array[i].description, array[i].delivery)
}
return televisions;
}




/* document.addEventListener('click', (e) => {
e.preventDefault();
    if(e.target.classList.contains('accountLogin')){
          alert("Apologies, this is a front end demo only, you can't login at the moment.")
    }
}) */

/* The below function handles all my event listeners */
/* CONTROLLER */


const eventHandlers = (id) => {

let mainProductDiv = document.querySelectorAll('.storeFront__productArea__products__product')
//let headerAccountSettings = document.querySelector('.header__accountSettings')
let hoverAccountIcon = document.querySelector('.header__accountSettings__account');
let overAccountdDropDown =  document.querySelector('.header__accountSettings__account__hover');
let hoverWishListIcon = document.querySelector('.header__accountSettings__wishlist');
let hoverWishListDropDown = document.querySelector('.header__accountSettings__wishlist__hover');
let hoverTrolleyIcon = document.querySelector('.header__accountSettings__trolley');
let hoverTrolleyDropDown = document.querySelector('.header__accountSettings__trolley__hover');
let filterButtonMobileButton = document.querySelector('.storeFront__productArea__filterButtonMobile button');
let filterButtonMobileActive = document.querySelector('.storeFront__productArea__filterButtonMobile__active');
let closer = document.querySelector('.closer');
let modalProductCloser = document.querySelector('.modalProductCloser');
const productMoreInfoModal = document.querySelector('.productMoreInfoModal');
const productMoreInfoModalContainer = document.querySelector('.productMoreInfoModal__container');
const filterButtonMobileActiveMenuOptions = document.querySelector('.storeFront__productArea__filterButtonMobile__active_menu__options');


//remove favourite item from top nav
/* headerAccountSettings.onclick = function () { */
 /*    if(this.classList.contains('favouritesRemoveButton')){
    
      let indexToRemove1 = favourites.findIndex((el) => el.id === this.id)
      favourites.splice(indexToRemove1, 1)   

      updateTolleyHTML(favourites, 'favourites');
      updateTrolleyCounter(favourites, 'favourites');
      
      //calculate total price of objects in the favourite array
      let trolletTotal = favourites.reduce((acc, cur) => {
        return parseInt(cur.price) + acc; 
      }, 0)
    } */

/*     if(this.classList.contains('trolleyRemoveButton')){
console.log(1, trolley);
      let indexToRemove2 = trolley.findIndex((el) => el.id === this.id)
      trolley.splice(indexToRemove2, 1)   
      console.log(2, trolley);
      removedItem = [...trolley]
      updateTolleyHTML(removedItem, 'trolley');//=========================================================================
      updateTrolleyCounter(removedItem, 'trolley');
    } */
/* } */

document.querySelectorAll('.trolleyRemoveButton').forEach(items => {
    items.onclick = function(){
      let indexToRemove2 = trolley.findIndex((el) => el.id === this.id)
      trolley.splice(indexToRemove2, 1);
      let removedItem = [...trolley]
      updateTolleyHTML(removedItem, 'trolley');//=========================================================================
      updateTrolleyCounter(removedItem, 'trolley');
    }
}) 


document.querySelectorAll('.favouritesRemoveButton').forEach(items => {
  items.onclick = function(){
    let indexToRemove1 = favourites.findIndex((el) => el.id === this.id)
    favourites.splice(indexToRemove1, 1)   
    updateTolleyHTML(favourites, 'favourites');
     updateTrolleyCounter(favourites, 'favourites');
     let trolletTotal = favourites.reduce((acc, cur) => {
      return parseInt(cur.price) + acc; 
    }, 0)
  }
}) 
    
  /* let indexToRemove1 = favourites.findIndex((el) => el.id === this.id)
  favourites.splice(indexToRemove1, 1)   

  updateTolleyHTML(favourites, 'favourites');
  updateTrolleyCounter(favourites, 'favourites'); */
  
  //calculate total price of objects in the favourite array
 /*  let trolletTotal = favourites.reduce((acc, cur) => {
    return parseInt(cur.price) + acc; 
  }, 0)
} */
/* if(this.classList.contains('trolleyRemoveButton')){
  console.log(1, trolley);
        let indexToRemove2 = trolley.findIndex((el) => el.id === this.id)
        trolley.splice(indexToRemove2, 1)   
        console.log(2, trolley);
        removedItem = [...trolley]
        updateTolleyHTML(removedItem, 'trolley');//=========================================================================
        updateTrolleyCounter(removedItem, 'trolley');
      } */


      const checkOutPaymentButton = document.querySelector('.checkOutPayment');
      checkOutPaymentButton.onclick = function() {
               alert("Apologies, this is a front end demo only and there is no payment system.");
      }


filterButtonMobileActive.addEventListener('click', (e) => {
    filterButtonMobileActive.classList.add('display');
})
filterButtonMobileActiveMenuOptions.addEventListener('click', e => {
      e.stopPropagation();
})
filterButtonMobileButton.addEventListener('click', (e) => {
 
  filterButtonMobileActive.classList.remove('display');
})
closer.addEventListener('click', (e) => {
 filterButtonMobileActive.classList.add('display');
})
productMoreInfoModalContainer.addEventListener('click', (e) => {
  e.stopPropagation();
})
modalProductCloser.addEventListener('click', (e) => {
  productMoreInfoModal.classList.add('display');
})
productMoreInfoModal.addEventListener('click', (e) => {
  productMoreInfoModal.classList.add('display');
})

hoverAccountIcon.addEventListener('mouseover', () => {
    overAccountdDropDown.classList.remove("display");
});
hoverAccountIcon.addEventListener('mouseout', () => {
  overAccountdDropDown.classList.add("display");
});
hoverWishListIcon.addEventListener('mouseover', () => {
  if (favourites.length > 0) hoverWishListDropDown.classList.remove("display");
});
hoverWishListIcon.addEventListener('mouseout', () => {
  hoverWishListDropDown.classList.add("display");
});
hoverTrolleyIcon.addEventListener('mouseover', () => {
  if (trolley.length > 0) hoverTrolleyDropDown.classList.remove("display");
});
hoverTrolleyIcon.addEventListener('mouseout', () => {
  hoverTrolleyDropDown.classList.add("display");
});

/* Handles the event listeners for both the favourite and the basket */

/* const addedToTrolleyConfirmation = document.querySelectorAll('.addedToTrolleyConfirmation');
const addedToFavouritesConfirmation = document.querySelectorAll('.addedToFavouritesConfirmation');
 */
/* mainProductDiv.forEach((el, index) => {
  el.addEventListener('click', (event) => {
    event.stopPropagation() */

    //const name23 = document.querySelectorAll('.productMoreInfo')
    mainProductDiv.forEach(el => 
      el.addEventListener('click', (e) => {
        
        if(e.target.classList.contains('productMoreInfo')){
                currentlySelected[0] = el.id;
               
                let currentToUpdate = televisions.findIndex(t => { 
                  return  t.id === currentlySelected[0]
                  });
               
                updateProductModalFindOutMore(televisions[currentToUpdate]);
               
                productMoreInfoModal.classList.remove('display');
                addEvent(televisions[currentToUpdate]);
        }
      })
    );

 
        /*   currentlySelected[0] = el.id;
          updateProductModalFindOutMore();
          addEvent();
          productMoreInfoModal.classList.remove('display'); */

const addedToTrolleyConfirmation = document.querySelectorAll('.addedToTrolleyConfirmation');
const addedToFavouritesConfirmation = document.querySelectorAll('.addedToFavouritesConfirmation');

  mainProductDiv.forEach((el, index) => {
     el.addEventListener('click', (event) => {
       if(event.target.classList.contains('add')) {
          event.stopPropagation()
          addedToTrolleyConfirmation[index].classList.remove('display') 
          setTimeout(() => {
            addedToTrolleyConfirmation[index].classList.add('display') 
          }, 2000)
          trolley.push(televisions[index])
          if (trolley.length > 0) {
            updateTolleyHTML(trolley, "trolley");
            localStorage.setItem('trolleyItems', JSON.stringify(trolley));
          }
          updateTrolleyCounter(trolley, "trolley"); 
      } 
     if(event.target.classList.contains('favourite')) {
          event.stopPropagation()
          addedToFavouritesConfirmation[index].classList.remove('display');
          setTimeout(() => {
            addedToFavouritesConfirmation[index].classList.add('display') 
          }, 2000)
          favourites.push(televisions[index])
          if (favourites.length > 0) updateTolleyHTML(favourites, "favourites");
          updateTrolleyCounter(favourites, "favourites");
      }  

    })});
/*   });
}) */
}


document.querySelector('#filter').addEventListener('change' , (e => {
    if(e.target.value === "high"){
        televisions.sort((a,b) => a.price - b.price);
        resetFilters();
        createHTML(televisions)
    } else {
        televisions.sort((a,b) => a.price - b.price).reverse();
        resetFilters();
        createHTML(televisions)
    }
    
}))   

window.addEventListener('resize', function(event){
    if(window.innerWidth > 999){
        resetFilters();
        createHTML(televisions);
    }
});


function resetFilters(){
document.querySelectorAll('input[name*="star"],input[name*="delivery"],input[name*="price"]').forEach(el =>{
  el.checked = false;
  filterObj={}
})
}

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
    let filtered = [...televisions]
   /*  console.log(filterObj) */

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
         /*  console.log(start,end,+product.price) */
          return +product.price > +start && +product.price < +end
        })
      )
    }
  /*   console.log(filtered) */

    createHTML(filtered)
  }
}
)


function addEvent(current){
    let addProduct = document.querySelector('.addProduct');
      addProduct.addEventListener('click', e => {
          //let index = currentlySelected[0];

        
          trolley.push(current)
          if (trolley.length > 0) updateTolleyHTML(trolley, "trolley");
          updateTrolleyCounter(trolley, "trolley"); 
      })
      let addFavourite = document.querySelector('.favouriteModel')
      addFavourite.addEventListener('click', (e) => {
          //let index = currentlySelected[0];
          favourites.push(current)
          if (favourites.length > 0) updateTolleyHTML(favourites, "favourites");
          updateTrolleyCounter(favourites, "favourites");
      })
}

/* Adds items to the basket list */
/* VIEW */
const updateTolleyHTML = (array, arrayName) => {

let hover;
const modalCheckout = document.querySelector('.checkProducts')
if (arrayName === "trolley") hover = document.querySelector(".header__accountSettings__trolley__hover");
if (arrayName === "favourites") hover = document.querySelector(".header__accountSettings__wishlist__hover");


let subTotal =  array.reduce((acc, cur) => {
 return acc + parseInt(cur.price);
}, 0)

let chartObj = array.reduce((obj,i,k)=>{
 if(!(i.id in obj)){
   obj[i.id] = []
 }
 obj[i.id].push(i)
 return obj
},{})
 
let html = "";

 for(let key in chartObj){
   let numberOfStars = '';
   for(let j = 0; j <  chartObj[key][0].stars; j++){
     numberOfStars += `<i class="fa fa-star-o" aria-hidden="true"></i>`;
   }

  
    html += `<div class="addedToTrolleyDropDown">
               <img src="${chartObj[key][0].image}">
                 <div class="titleQtyContainer">
                     <h4>${chartObj[key][0].title}</h4>
                     <p>${numberOfStars}</p>
                 </div>
               <p>${chartObj[key].length}</p>
               <i class="fa fa-times ${arrayName}RemoveButton" id=${chartObj[key][0].id} aria-hidden="true"></i> 
            </div>`  
 }

 

 html += `<p class="subTotal">Subtotal (${array.length} items): £${subTotal}</p>`
 if(arrayName === "trolley") modalCheckout.innerHTML  = html;  
 if(arrayName === "trolley") html += `<button class="checkoutButton">Checkout</button>`

 hover.innerHTML = html;  


 
 eventlistenerOfCheckOut();

}

function updateProductModalFindOutMore(current){
const productMoreInfoModalTitleH3 = document.querySelector('.productMoreInfoModal__title_h3');
const productMoreInfoModalPrice = document.querySelector('.productMoreInfoModal__price');
const productMoreInfoModalImage = document.querySelector('.productMoreInfoModal__image');
const productMoreInfoModalAboutDescription = document.querySelector('.productMoreInfoModal__about__description');
const productMoreInfoModalTrolley = document.querySelector('.productMoreInfoModal__trolley');
const favouriteModel = document.querySelector('.productMoreInfoModal__fav');

/*  let currentToUpdate = televisions.findIndex(el => { 
   return  el.id === currentlySelected[0]
   });

 console.log(currentToUpdate) */

 productMoreInfoModalTitleH3.innerHTML = current.title;
 productMoreInfoModalPrice.innerHTML = `<p>£${current.price}</p>`;
 productMoreInfoModalImage.innerHTML = `<img src="${current.image}" alt="${current.title}">`;
 productMoreInfoModalAboutDescription.innerHTML = `<p>${current.description}</p>`;
 productMoreInfoModalTrolley.innerHTML = `<button  class="btn addProduct" id="${current.id}"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add Trolley</button>`;
 favouriteModel.innerHTML = `<button  class="btn favourite favouriteModel" id="${current.id}"><i class="fa fa-heart" aria-hidden="true"></i> Add Favourites</button>`;

};

//Eventlistener of the checkoutButton
function eventlistenerOfCheckOut (){
const trolleyHoverDiv = document.querySelector('.header__accountSettings__trolley__hover')
const checkoutButton = document.querySelector('.checkoutButton');
const checkoutModal = document.querySelector('.checkoutModal');
const modalCloser  = document.querySelector('.modalCloser');
const checkoutModalContainer = document.querySelector('.checkoutModal__container');



document.querySelectorAll('.trolleyRemoveButton').forEach(items => {
  items.onclick = function(){
    let indexToRemove2 = trolley.findIndex((el) => el.id === this.id)
    trolley.splice(indexToRemove2, 1)   
/*     console.log(2, trolley); */
    let removedItem = [...trolley]
    updateTolleyHTML(removedItem, 'trolley');//=========================================================================
    updateTrolleyCounter(removedItem, 'trolley');
  }
})



document.querySelectorAll('.favouritesRemoveButton').forEach(items => {
  items.onclick = function(){
    let indexToRemove1 = favourites.findIndex((el) => el.id === this.id)
    favourites.splice(indexToRemove1, 1)   
    updateTolleyHTML(favourites, 'favourites');
     updateTrolleyCounter(favourites, 'favourites');
     let trolletTotal = favourites.reduce((acc, cur) => {
      return parseInt(cur.price) + acc; 
    }, 0)
  }
}) 

trolleyHoverDiv.addEventListener('click', (e) => {
  if(e.target === checkoutButton){
    if(trolley.length > 0){
      checkoutModal.classList.remove('display');
    } else {
       alert("Your backet is empty, please add products to your basket.")
    }
   
  }
})
modalCloser.addEventListener('click', () => {
  checkoutModal.classList.add('display');
})
checkoutModal.addEventListener('click', () => {
  checkoutModal.classList.add('display');
})
checkoutModalContainer.addEventListener('click', (e) => {
  e.stopPropagation();
})
}
/* Removes items to the basket list */
/* VIEW */
const updateTrolleyCounter = (array, name) => {
let accountSettingsTrolleyCounter;
if(name === "trolley") accountSettingsTrolleyCounter = document.querySelector('.header__accountSettings__trolley__counter');
if (name === "favourites") accountSettingsTrolleyCounter = document.querySelector('.header__accountSettings__wishlist__counter');

if(array.length > 0){
  accountSettingsTrolleyCounter.classList.remove('display');
  accountSettingsTrolleyCounter.innerHTML = `<div class="${name}Counter">${array.length}</div>`;
} else {
  accountSettingsTrolleyCounter.classList.add('display');
}
}


/* Creates the main HTML for the products */
/* VIEW */
const createHTML = array => {
const  breadcrumbName =  document.querySelector('.breadcrumb__name');
const productTitle = document.querySelector('#productTitle');
let html;

if(array.length > 0){
        productTitle.textContent = array[0].type;
        breadcrumbName.textContent = array[0].type;
        const numberOfProducts = document.querySelector('#numberOfProducts');
        numberOfProducts.textContent = `Showing ${array.length} products`

          html = '' 
            for(let i = 0; i < array.length; i++){
            let numberOfStars = '';
              for(let j = 0; j <  array[i].stars; j++){
                numberOfStars += `<i class="fa fa-star-o" aria-hidden="true"></i>`;
              }  
            
              html += `<div class="storeFront__productArea__products__product" id="${array[i].id}">
                <img class="productMoreInfo" src="${array[i].image}">
                  <div class="storeFront__productArea__products__product__description">
                    <h3 class="storeFront__productArea__products__product__title productMoreInfo">${array[i].title}</h3>
                    <div class="storeFront__productArea__products__product__stars productMoreInfo">

                    ${numberOfStars}
                    
                  </div>
                  <h4 class="storeFront__productArea__products__product__price productMoreInfo">£${array[i].price}</h4>
                  <h3 class="storeFront__productArea__products__product__special productMoreInfo">${array[i].delivery}</h3>
                  <div>
                      <button class="btn add" data-id="${array[i].id}"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to Trolley</button>
                      <button class="btn favourite"><i class="fa fa-heart" aria-hidden="true"></i></button>
                  </div>
              </div>
              <div class="addedToTrolleyConfirmation display">Added to trolley</div>
              <div class="addedToFavouritesConfirmation display">Added to favourites</div>
            </div>
            `
          }
} else{
  productTitle.textContent = `No products found`;
  breadcrumbName.textContent = `No Products`;
  const numberOfProducts = document.querySelector('#numberOfProducts');
  numberOfProducts.textContent = `Showing ${array.length} products`
  html = `<h2>No products found matching those filter settings</h2>`;
}
const element = document.querySelector(".storeFront__productArea__products");

  
  element.innerHTML = html;
  deliverycolor();
  eventHandlers(array);
 
}


function deliverycolor(){
const storeFrontProductAreaProductsProductSpecial = document.querySelectorAll('.storeFront__productArea__products__product__special');
  storeFrontProductAreaProductsProductSpecial.forEach(el => {
      if(el.innerHTML === "Express"){
        el.classList.add("green");
      } else {
        el.classList.add("red");
      }
  })
}


