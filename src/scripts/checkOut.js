import globalStateObject from './globalStateObject.js';
import updateTolleyHTML from './updateTolleyHTML.js';
import upDateTrolleyCounter from './updateTrolleyCounter.js';

const checkOut = (totalItems, totalPrice) => {
                const checkProducts = document.querySelector('.checkProducts');

                checkProducts.innerHTML = '';

                const itemsInTrolley = globalStateObject.readState().trolley;
                const arrToDisplay = globalStateObject.toShowInTrolleyOrFavourites(itemsInTrolley);

                arrToDisplay.forEach((product) => {

                    let starsHTML = ''
                      for(let i = 0; i < product.item.stars; i++){
                        starsHTML += `<i class="fa fa-star-o" aria-hidden="true"></i>`
                      }
                  
                    const addedToTrolleyDropDown = document.createElement('div');
                    addedToTrolleyDropDown.classList.add('addedToTrolleyDropDown');
                    checkProducts.appendChild(addedToTrolleyDropDown);
                    
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
                      checkOut();
                      updateTolleyHTML();
                      upDateTrolleyCounter("trolley");
                    }
                });

                const subTotal = document.createElement('p');
                subTotal.classList.add('subTotal');
                checkProducts.appendChild(subTotal);
                subTotal.innerHTML = `Subtotal (${totalItems} items): £${totalPrice}`;

           
}

export default checkOut;