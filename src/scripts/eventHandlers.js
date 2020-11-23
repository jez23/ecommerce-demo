import updateProductModalFindOutMore from './updateProductModalFindOutMore.js';
import globalStateObject from './globalStateObject.js';
import { resetFilters } from './filter.js';
import createHTML from './createHTML.js';
import getProduct from './getProduct.js';

/* The below function handles all my event listeners */
/* CONTROLLER */

const eventHandlers = (globalObject) => {

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
  /*   const productMoreInfoModalContainer = document.querySelector('.productMoreInfoModal__container'); */
    const filterButtonMobileActiveMenuOptions = document.querySelector('.storeFront__productArea__filterButtonMobile__active_menu__options');
    
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
   /*  productMoreInfoModalContainer.addEventListener('click', (e) => {
      e.stopPropagation();
    }) */
    modalProductCloser.addEventListener('click', (e) => {
      productMoreInfoModal.classList.add('display');
    })
   /*  productMoreInfoModal.addEventListener('click', (e) => {
      productMoreInfoModal.classList.add('display');
    }) */
    hoverAccountIcon.addEventListener('mouseover', () => {
        overAccountdDropDown.classList.remove("display");
    });
    hoverAccountIcon.addEventListener('mouseout', () => {
      overAccountdDropDown.classList.add("display");
    });
    hoverWishListIcon.addEventListener('mouseover', () => {
      if (globalObject.favourites.length > 0) hoverWishListDropDown.classList.remove("display");
    });
    hoverWishListIcon.addEventListener('mouseout', () => {
      hoverWishListDropDown.classList.add("display");
    });
    hoverTrolleyIcon.addEventListener('mouseover', () => {
      if (globalObject.trolley.length > 0) hoverTrolleyDropDown.classList.remove("display");
    });
    hoverTrolleyIcon.addEventListener('mouseout', () => {
      hoverTrolleyDropDown.classList.add("display");
    });
    
    mainProductDiv.forEach(productContainer => 
      productContainer.addEventListener('click', (e) => {
        const getGlobalSettings = globalObject.readState();
        const getCurrentlySeleted = getGlobalSettings.currentlySelectedItem
        updateProductModalFindOutMore(getCurrentlySeleted);
     
        productMoreInfoModal.classList.remove('display');
      })
    );
    

    document.querySelector('#filter').addEventListener('change' , (e => {
      if(e.target.value === "high"){
        globalObject.currentOnScreenProducts.sort((a,b) => a.price - b.price);
          resetFilters();
          createHTML(globalObject.currentOnScreenProducts);
          eventHandlers(globalObject.readState());
      } else {
        globalObject.currentOnScreenProducts.sort((a,b) => a.price - b.price).reverse();
          resetFilters();
          createHTML(globalObject.currentOnScreenProducts);
          eventHandlers(globalObject.readState());
      }
  }))   
  
  window.addEventListener('resize', function(event){
      if(window.innerWidth > 999){
          resetFilters();
          createHTML(globalObject.currentOnScreenProducts);
          eventHandlers(globalObject.readState());
      }
  });

  let productsSearch = document.querySelector('#productsSearch');
  window.addEventListener('change', (e) => {

    if(event.target.id === 'productsSearch') {
     

        switch (e.target.value) {
         case "sofas":
           globalObject.currentOnScreenProducts = [];
           resetFilters();
           getProduct()
           console.log( globalObject)
           break;
           case "televisions":
             globalObject.currentOnScreenProducts = [];
             resetFilters();
             getProduct()
             console.log( globalObject)
           break;
           case "fridges":
             globalObject.currentOnScreenProducts = [];
             resetFilters();
             getProduct()
             console.log( globalObject)
           break;
           case "washingmachines":
             globalObject.currentOnScreenProducts = [];
             resetFilters();
             getProduct()
             console.log( globalObject)
           break;
       }


    }
  }); 


  

  
/*   const addedToTrolleyConfirmation = document.querySelectorAll('.addedToTrolleyConfirmation');
  const addedToFavouritesConfirmation = document.querySelectorAll('.addedToFavouritesConfirmation'); */
    
/*   mainProductDiv.forEach((el, index) => {
    el.addEventListener('click', (event) => {
      if(event.target.classList.contains('add')) {
        event.stopPropagation();
        addedToTrolleyConfirmation[index].classList.remove('display') 
        setTimeout(() => {
          addedToTrolleyConfirmation[index].classList.add('display') 
        }, 2000);
      } 
      if(event.target.classList.contains('favourite')) {
        event.stopPropagation()
        addedToFavouritesConfirmation[index].classList.remove('display');
        setTimeout(() => {
          addedToFavouritesConfirmation[index].classList.add('display') 
        }, 2000);
      }  
    })
});  */
  
}


    export default eventHandlers;