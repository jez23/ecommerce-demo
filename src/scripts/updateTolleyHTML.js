import eventlistenerOfCheckOut from './eventlistenerOfCheckOut.js';
import globalStateObject from './globalStateObject.js';
import upDateTrolleyCounter from './updateTrolleyCounter.js';
import checkOut from './checkOut.js';

/* Adds items to the basket list */
/* VIEW */
const updateTolleyHTML = () => {
   
  let hover = document.querySelector(".header__accountSettings__trolley__hover");
  hover.innerHTML = '';

  const itemsInTrolley = globalStateObject.readState().trolley;
  const arrToDisplay = globalStateObject.toShowInTrolleyOrFavourites(itemsInTrolley);

  arrToDisplay.forEach((product) => {

      let starsHTML = ''
        for(let i = 0; i < product.item.stars; i++){
          starsHTML += `<i class="fa fa-star-o" aria-hidden="true"></i>`
        }
    
      const addedToTrolleyDropDown = document.createElement('div');
      addedToTrolleyDropDown.classList.add('addedToTrolleyDropDown');
      hover.appendChild(addedToTrolleyDropDown);
      
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
      length.innerHTML = `${product.qty}`;

      const removeButton = document.createElement('i');
      removeButton.classList.add('fa');
      removeButton.classList.add('fa-times');
      removeButton.classList.add(`trolleyRemoveButton`);
      removeButton.id = product.id;

      addedToTrolleyDropDown.append(img, titleQtyContainer, length, removeButton)

      removeButton.onclick = () => {
        globalStateObject.removeFromTrolley(product.item);
        updateTolleyHTML();
        upDateTrolleyCounter("trolley");
      }
  });

  const totalPrice = arrToDisplay.reduce((acc, cur) => {
     return acc += parseInt(cur.price) * parseInt(cur.qty);
  }, 0)
  const totalItems = arrToDisplay.reduce((acc, cur) => {
     return acc += parseInt(cur.qty);
  }, 0)

  const subTotal = document.createElement('p');
  subTotal.classList.add('subTotal');
  hover.appendChild(subTotal);
  subTotal.innerHTML = `Subtotal (${totalItems} items): £${totalPrice}`;

  const checkOutButton = document.createElement('button');
  checkOutButton.classList.add('checkoutButton');
  hover.appendChild(checkOutButton);
  checkOutButton.innerHTML = `Checkout`
  checkOut(totalItems, totalPrice)
  eventlistenerOfCheckOut(globalStateObject);   
}

export default updateTolleyHTML;