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
const updateTolleyHTML = () => {
    const trolleyhover = document.querySelector(".header__accountSettings__trolley__hover");
    let html = "";
    for(let i = 0; i < trolley.length; i++){
      html += `<div class="addedToTrolleyDropDown">
                  <img src="${trolley[i].image}">
                  <h4>${trolley[i].title}</h4>
                  <button>Remove</button>
              </div>`
    }
  
    trolleyhover.innerHTML = html;

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
    hoverTrolleyDropDown.classList.remove("display");
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
          trolley.length > 0? updateTolleyHTML() : null;
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