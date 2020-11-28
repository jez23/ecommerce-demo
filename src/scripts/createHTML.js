import updateTrolleyHTML from './updateTolleyHTML.js';
import updateTrolleyCounter from './updateTrolleyCounter.js';
import updateFavouritesTrolleyHTML from './updateFavouritesTrolleyHTML.js'

/* Creates the main HTML for the products */
const createHTML = (arrayToDisplay) => {

  const productArea = document.querySelector(".storeFront__productArea__products");
  const  breadcrumbName =  document.querySelector('.breadcrumb__name');
  const productTitle = document.querySelector('#productTitle');
  const numberOfProducts = document.querySelector('#numberOfProducts');

  productArea.innerHTML = '';

  if(arrayToDisplay.length > 0){
      numberOfProducts.textContent = `Showing ${arrayToDisplay.length} products`
     
    arrayToDisplay.forEach(function(product) {
      breadcrumbName.textContent = `${product.type}`
      productTitle.innerHTML = `${product.type}`
      let starsHTML = ''
        for(let i = 0; i < product.stars; i++){
          starsHTML += `<i class="fa fa-star-o" aria-hidden="true"></i>`
      }
    
      let productDiv = document.createElement('div');
         productDiv.classList.add('storeFront__productArea__products__product');
         productDiv.id = product.id; 
         productArea.appendChild(productDiv);
         
         let img = document.createElement('img');
         img.classList.add('productMoreInfo');
         img.setAttribute("src", `${product.image}`);

         let description = document.createElement('div');
         description.classList.add('storeFront__productArea__products__product__description');

         productDiv.append(img, description);


         let title = document.createElement('h3');
         title.classList.add('storeFront__productArea__products__product__title');
         title.classList.add('productMoreInfo');
         title.innerText = product.title;

         let stars = document.createElement('div');
         stars.classList.add('storeFront__productArea__products__product__stars');
         stars.classList.add('productMoreInfo');
         stars.innerHTML = starsHTML;

         let price = document.createElement('h4');
         price.classList.add('storeFront__productArea__products__product__price');
         price.classList.add('productMoreInfo');
         price.innerText = product.price;

         let special = document.createElement('h3');
         special.classList.add('storeFront__productArea__products__product__special');
         special.classList.add('productMoreInfo');
         special.innerText = product.delivery;

         let buttonContainer = document.createElement('div');

         description.append(title, stars, price, special, buttonContainer);

         let add = document.createElement('button')
         add.classList.add('btn');
         add.classList.add('add');
         add.innerHTML = `<i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to Trolley`;

         let favourite = document.createElement('button')
         favourite.classList.add('btn');
         favourite.classList.add('favourite');
         favourite.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>`;

         buttonContainer.append(add, favourite);

         productDiv.onclick = () => {
              product.addCurrentlySelectedItem(product)
         }


         add.onclick = (e) => {
              e.stopPropagation();
              product.addToTrolley(product);
              updateTrolleyHTML("trolley");
              updateTrolleyCounter("trolley");
              add.innerHTML = `<i class="fa fa-shopping-cart" aria-hidden="true"></i> Item Added`;
              add.style.backgroundColor = "blue";
              setTimeout(() => {
                add.style.backgroundColor = "green"
                  add.innerHTML = `<i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to Trolley`
              }, 1500)
         }
         favourite.onclick = (e) => {
              e.stopPropagation();
              product.addToFavourites(product);
              updateFavouritesTrolleyHTML();
              updateTrolleyCounter("favourites");
              favourite.innerHTML =  `<i class="fa fa-plus" aria-hidden="true"></i>`;
              favourite.style.backgroundColor = "blue";
              setTimeout(() => {
                  favourite.style.backgroundColor = "white"
                  favourite.innerHTML =  `<i class="fa fa-heart" aria-hidden="true"></i>`
              }, 1500)
         }

    });
      
 
  } else{
      productTitle.textContent = `No products found`;
      breadcrumbName.textContent = `No Products`;
     
      numberOfProducts.textContent = `Showing ${arrayToDisplay.length} products`
      productArea.innerHTML = `<h2>No products found matching those filter settings</h2>`;
  }

  deliverycolor();

}

function deliverycolor(){
    const storeFrontProductAreaProductsProductSpecial = document.querySelectorAll('.storeFront__productArea__products__product__special');
      storeFrontProductAreaProductsProductSpecial.forEach(el => {
          el.innerHTML === "Express"? el.classList.add("green"):
          el.classList.add("red");
      })
}
    

export default createHTML;