import eventlistenerOfCheckOut from './eventlistenerOfCheckOut.js';
import globalStateObject from './globalStateObject.js';
import upDateTrolleyCounter from './updateTrolleyCounter.js';

/* Adds items to the basket list */
/* VIEW */
const updateFavouritesTrolleyHTML = () => {
   
  let hoverFav = document.querySelector(".header__accountSettings__wishlist__hover");

  hoverFav.innerHTML = '';

  const favouriteInTrolley = globalStateObject.readState().favourites;
  const arrToDisplay = globalStateObject.toShowInTrolleyOrFavourites(favouriteInTrolley);

  arrToDisplay.forEach((product) => {
      let starsHTML = ''
        for(let i = 0; i < product.item.stars; i++){
          starsHTML += `<i class="fa fa-star-o" aria-hidden="true"></i>`
      }
    
      console.log(product)
      const addedToTrolleyDropDown = document.createElement('div');
      addedToTrolleyDropDown.classList.add('addedToTrolleyDropDown');
      hoverFav.appendChild(addedToTrolleyDropDown);
      
      const img = document.createElement('img');
      img.setAttribute("src", `${product.item.image}`);
       
      const titleQtyContainer = document.createElement('div');
      titleQtyContainer.classList.add('titleQtyContainer');

      const h4Title = document.createElement('h4');
      h4Title.innerHTML = product.item.title;

      const numberOfStars = document.createElement('p');
      numberOfStars.innerHTML = starsHTML;

      titleQtyContainer.append(h4Title, numberOfStars)       

      const length = document.createElement('p');
      length.innerHTML = product.qty;

      const removeButton = document.createElement('i');
      removeButton.classList.add('fa');
      removeButton.classList.add('fa-times');
      removeButton.classList.add(`favouritesRemoveButton`);
      removeButton.id = product.id;

      addedToTrolleyDropDown.append(img, titleQtyContainer, length, removeButton)

      removeButton.onclick = () => {
        globalStateObject.removeFromFavourites(product.item);
        updateFavouritesTrolleyHTML();
        upDateTrolleyCounter("favourites")
       }
    })


    const totalPrice = arrToDisplay.reduce((acc, cur) => {
      return acc += parseInt(cur.price) * parseInt(cur.qty);
   }, 0)
   const totalItems = arrToDisplay.reduce((acc, cur) => {
      return acc += parseInt(cur.qty);
   }, 0)
 
   const subTotal = document.createElement('p');
   subTotal.classList.add('subTotal');
   hoverFav.appendChild(subTotal);
   subTotal.innerHTML = `Subtotal (${totalItems} items): £${totalPrice}`;

     
  eventlistenerOfCheckOut(globalStateObject);
    
}

export default updateFavouritesTrolleyHTML;