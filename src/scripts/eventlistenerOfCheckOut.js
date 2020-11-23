import updateTolleyHTML from './updateTolleyHTML.js';
import updateTrolleyCounter from './updateTrolleyCounter.js';

//Eventlistener of the checkoutButton
const eventlistenerOfCheckOut = (globalVariables) => {
    const trolleyHoverDiv = document.querySelector('.header__accountSettings__trolley__hover')
    const checkoutButton = document.querySelector('.checkoutButton');
    const checkoutModal = document.querySelector('.checkoutModal');
    const modalCloser  = document.querySelector('.modalCloser');
    const checkoutModalContainer = document.querySelector('.checkoutModal__container');
    
  /*   document.querySelectorAll('.trolleyRemoveButton').forEach(items => {
      items.onclick = function(e){
        console.log(e.target)
      let indexToRemove2 = globalVariables.trolley.findIndex((el) => el.id === this.id)
        globalVariables.trolley.splice(indexToRemove2, 1)    
       
        updateTolleyHTML(globalVariables, 'trolley');
        updateTrolleyCounter(globalVariables, 'trolley');
      }
    }) */
    
/*     document.querySelectorAll('.favouritesRemoveButton').forEach(items => {
      items.onclick = function(){
        let indexToRemove1 = globalVariables.favourites.findIndex((el) => el.id === this.id)
        globalVariables.favourites.splice(indexToRemove1, 1)   
        updateTolleyHTML(globalVariables, 'favourites');
         updateTrolleyCounter(globalVariables, 'favourites');
         let trolletTotal = globalVariables.favourites.reduce((acc, cur) => {
          return parseInt(cur.price) + acc; 
        }, 0)
      }
    })  */
    
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