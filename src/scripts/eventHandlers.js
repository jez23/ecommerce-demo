import updateProductModalFindOutMore from './updateProductModalFindOutMore.js';

import { resetFilters } from './filter.js';

import getProduct from './getProduct.js';

/* The below function handles all my event listeners */
/* CONTROLLER */

const eventHandlers = (globalObject) => {

    let mainProductDiv = document.querySelectorAll('.storeFront__productArea__products__product')
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
    modalProductCloser.addEventListener('click', (e) => {
      productMoreInfoModal.classList.add('display');
    })
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

  let productsSearch = document.querySelector('#productsSearch');
  
  productsSearch.onchange = function(e) {
    globalObject.currentOnScreenProducts = [];
    resetFilters();
    getProduct(e.target.value)
  }
  
}


    export default eventHandlers;