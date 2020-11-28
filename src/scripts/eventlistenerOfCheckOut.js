import updateTolleyHTML from './updateTolleyHTML.js';
import updateTrolleyCounter from './updateTrolleyCounter.js';

//Eventlistener of the checkoutButton
const eventlistenerOfCheckOut = (globalVariables) => {
    const trolleyHoverDiv = document.querySelector('.header__accountSettings__trolley__hover')
    const checkoutButton = document.querySelector('.checkoutButton');
    const checkoutModal = document.querySelector('.checkoutModal');
    const modalCloser  = document.querySelector('.modalCloser');
    const checkoutModalContainer = document.querySelector('.checkoutModal__container');
    
    trolleyHoverDiv.addEventListener('click', (e) => {
      if(e.target === checkoutButton){
        if(globalVariables.trolley.length > 0){
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

    export default eventlistenerOfCheckOut;