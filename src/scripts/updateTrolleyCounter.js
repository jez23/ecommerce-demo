import globalStateObject from './globalStateObject.js';

/* Removes items to the basket list */
/* VIEW */
const updateTrolleyCounter = (addTofavouriteOrTrolley) => {
  let accountSettingsTrolleyCounter = null;
  let arrayToUpdate;
  if (addTofavouriteOrTrolley === "trolley") {
    accountSettingsTrolleyCounter = document.querySelector('.header__accountSettings__trolley__counter');
    arrayToUpdate = globalStateObject.readState().trolley;
  }
  if (addTofavouriteOrTrolley === "favourites"){
     accountSettingsTrolleyCounter = document.querySelector('.header__accountSettings__wishlist__counter');
     arrayToUpdate = globalStateObject.readState().favourites;
  }

  if (arrayToUpdate.length > 0) {
      accountSettingsTrolleyCounter.classList.remove('display');
      accountSettingsTrolleyCounter.innerHTML = `<div class="${addTofavouriteOrTrolley}Counter">${arrayToUpdate.length}</div>`;
  } else {
      accountSettingsTrolleyCounter.classList.add('display');
  }
}

export default updateTrolleyCounter;