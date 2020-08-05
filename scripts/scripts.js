class Product {
  constructor(id, title, image) {
      this.id = id,
      this.title = title,
      this.image = image
  }
  addToBasket(){
      return null;   
  }
  addToWishList(){
    return null;   
  }

}


const televions = []
const trolley = []
const favourites = []

const createNewProducts = array => {
  for(let i = 0; i < array.length; i++){
    televions[i] = new Product(array[i].id, array[i].title, array[i].image)
  }
  return televions;
}

const createHTML = array => {
    let html = '' 
      for(let i = 0; i < array.length; i++){
        html += `<div class="storeFront__productArea__products__product">
           <img src="${array[i].image}">
            <div class="storeFront__productArea__products__product__description">
               <h3 class="storeFront__productArea__products__product__title">${array[i].title}</h3>
              <div class="storeFront__productArea__products__product__stars">
                   <i class="fa fa-star-o" aria-hidden="true"></i>
                 <i class="fa fa-star-o" aria-hidden="true"></i>
                 <i class="fa fa-star-o" aria-hidden="true"></i>
                 <i class="fa fa-star-o" aria-hidden="true"></i>
             </div>
             <h4 class="storeFront__productArea__products__product__price">${array[i].price}</h4>
             <h3 class="storeFront__productArea__products__product__special">Free delivery</h3>
             <div>
                 <button class="btn add" data-id="${array[i].id}"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to Trolley</button>
                 <button class="btn favourite"><i class="fa fa-heart" aria-hidden="true"></i></button>
             </div>
         </div>
      </div>`
    }
   
    const element = document.querySelector(".storeFront__productArea__products");
    element.innerHTML = html;
    eventHandlers(array)
}
const updateTolleyHTML = (array) => {
    const trolleyhover = document.querySelector(".header__accountSettings__trolley__hover");
    let html = "";
    for(let i = 0; i < array.length; i++){
      html += `<div class="addedToTrolleyDropDown">
                  <img src="${array[i].image}">
                  <h4>${array[i].title}</h4>
                  <button class="trolleyRemoveButton" id=${array[i].id}>Remove</button>
              </div>`  
    }

    trolleyhover.innerHTML = html;  
    removeItem();
}



const removeItemFromTolley = (id) => {
    console.log(trolley)
    for(let i = 0; i < trolley.length; i++){
          if(trolley[i].id === id){
                  trolley.splice(i, 1);
          }
    }
    updateTrolleyCounter();
    updateTolleyHTML(trolley);
     
}

function getTelevision(){
  return fetch("scripts/products.json")
  .then(repsonse => repsonse.json())
  .then(array => [...array.products.televisions])
  .then(televion => createNewProducts(televion))
  .then(html => createHTML(html))
}


getTelevision()





const eventHandlers = (id) => {

  console.log(id)

  let addToTrolley = document.querySelectorAll('.add');
  let addToFavourite = document.querySelectorAll('.favourite');
  let hoverAccountIcon = document.querySelector('.header__accountSettings__account');
  let overAccountdDropDown =  document.querySelector('.header__accountSettings__account__hover');
  let hoverWishListIcon = document.querySelector('.header__accountSettings__wishlist');
  let hoverWishListDropDown = document.querySelector('.header__accountSettings__wishlist__hover');
  let hoverTrolleyIcon = document.querySelector('.header__accountSettings__trolley');
  let hoverTrolleyDropDown = document.querySelector('.header__accountSettings__trolley__hover');
  let filterShowScreenSizeButton = document.querySelector('.storeFront__filter__showScreenSize');
  let filterDropDownShowScreenSize = document.querySelector('.storeFront__filter__dropDown__showScreenSize');
  let filterShowPriceButton = document.querySelector('.storeFront__filter__showPrice');
  let filterDropDownShowPrice = document.querySelector('.storeFront__filter__dropDown__showPrice');
  let filterShowResolutionButton = document.querySelector('.storeFront__filter__showResolution');
  let filterDropDownShowResolution = document.querySelector('.storeFront__filter__dropDown__showResolution');
  let filterShowBrandButton = document.querySelector('.storeFront__filter__showBrand');
  let filterDropDownShowBrand = document.querySelector('.storeFront__filter__dropDown__showBrand');
  let accountSettingsWishlistCounter = document.querySelector('.header__accountSettings__wishlist__counter');

  filterShowScreenSizeButton.addEventListener('click', () => {
    filterDropDownShowScreenSize.classList.toggle('display');
  })
  filterShowPriceButton.addEventListener('click', () => {
    filterDropDownShowPrice.classList.toggle('display');
  })
  filterShowResolutionButton.addEventListener('click', () => {
    filterDropDownShowResolution.classList.toggle('display');
  })
  filterShowBrandButton.addEventListener('click', () => {
    filterDropDownShowBrand.classList.toggle('display');
  })


  hoverAccountIcon.addEventListener('mouseover', () => {
      console.log("Account")
      overAccountdDropDown.classList.remove("display");
  });
  hoverAccountIcon.addEventListener('mouseout', () => {
    console.log("Account")
    overAccountdDropDown.classList.add("display");
  });

  hoverWishListIcon.addEventListener('mouseover', () => {
    console.log("Show Wish List" + id)
    hoverWishListDropDown.classList.remove("display");
  });
  hoverWishListIcon.addEventListener('mouseout', () => {
    console.log("Show Wish List" + id)
    hoverWishListDropDown.classList.add("display");
  });

  hoverTrolleyIcon.addEventListener('mouseover', () => {
    console.log("Show what's in your trolley" + id);
    trolley.length > 0? hoverTrolleyDropDown.classList.remove("display") : null;
  });
  hoverTrolleyIcon.addEventListener('mouseout', () => {
    hoverTrolleyDropDown.classList.add("display");
  });

  

   console.log(addToTrolley.length);


  for(let i = 0; i < addToTrolley.length; i++){
      console.log(i)
      addToTrolley[i].addEventListener('click', (event) => {
          trolley.push(id[i]);
          console.log(trolley);
          trolley.length > 0? updateTolleyHTML(trolley) : null;
          updateTrolleyCounter();

      })
  } 







  for(let i = 0; i < addToFavourite.length; i++){
    console.log(i)
    addToFavourite[i].addEventListener('click', (event) => {
        favourites.push(id[i]);
        console.log(favourites);
    })
  }


}


const removeItem = () => {
  let trolleyRemoveButton = document.querySelectorAll('.trolleyRemoveButton');
  if(trolley.length > 0){
    for(let i = 0; i < trolleyRemoveButton.length; i++){
      trolleyRemoveButton[i].addEventListener('click', (e) => {
            console.log(e.target.id);
              removeItemFromTolley(e.target.id);
      });
    }
  }

}



const updateTrolleyCounter = () => {
  let accountSettingsTrolleyCounter = document.querySelector('.header__accountSettings__trolley__counter');
  if(trolley.length > 0){
    accountSettingsTrolleyCounter.classList.remove('display');
    accountSettingsTrolleyCounter.innerHTML = `<div class="trolleyCounter">${trolley.length}</div>`;
  } else if (trolley.length <= 0 )  {
    accountSettingsTrolleyCounter.classList.add('display');
    console.log("test2 true")
  }
}