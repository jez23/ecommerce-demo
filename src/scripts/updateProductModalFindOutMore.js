import globalStateObject from './globalStateObject.js';
import updateTrolletHTML from './updateTolleyHTML.js';
import updateTrolleyCounter from './updateTrolleyCounter.js';
import updateFavouritesTrolleyHTML from './updateFavouritesTrolleyHTML.js';

const updateProductModalFindOutMore = (currentProductInModal) => {
  
    const productMoreInfoModalTitleH3 = document.querySelector('.productMoreInfoModal__title_h3');
    const productMoreInfoModalPrice = document.querySelector('.productMoreInfoModal__price');
    const productMoreInfoModalImage = document.querySelector('.productMoreInfoModal__image');
    const productMoreInfoModalAboutDescription = document.querySelector('.productMoreInfoModal__about__description');
    const thumbNail1 = document.querySelector('.thumbNail1');
    const thumbNail2 = document.querySelector('.thumbNail2');
    const thumbNail3 = document.querySelector('.thumbNail3');
    
    productMoreInfoModalTitleH3.innerHTML = currentProductInModal[0].title;
    productMoreInfoModalPrice.innerHTML = `<p>£${currentProductInModal[0].price}</p>`;
    productMoreInfoModalImage.innerHTML = `<img src="${currentProductInModal[0].image}" alt="${currentProductInModal[0].title}">`;
    productMoreInfoModalAboutDescription.innerHTML = `<p>${currentProductInModal[0].description}</p>`;


    const add = document.createElement('button');
    add.classList.add('btn');
    add.classList.add('addProduct');
    add.innerHTML = `<i class="fa fa-shopping-cart" aria-hidden="true"></i> Add Trolley`;

    const favourite = document.createElement('button');
    favourite.classList.add('btn');
    favourite.classList.add('favourite');
    favourite.classList.add('favouriteModel');
    favourite.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i> Add Favourites`;

    productMoreInfoModalPrice.append(add, favourite);

    add.onclick = () => {
        globalStateObject.addToTrolley(currentProductInModal[0]);
        updateTrolletHTML();
        updateTrolleyCounter("trolley");
    }
    favourite.onclick = () => {
        globalStateObject.addToFavourites(currentProductInModal[0]);
        updateFavouritesTrolleyHTML();
        updateTrolleyCounter("favourites");
    }
   
    thumbNail1.innerHTML = `<img src="${currentProductInModal[0].image}" alt="${currentProductInModal[0].title}">`;
    thumbNail2.innerHTML = `<img src="${currentProductInModal[0].image}" alt="${currentProductInModal[0].title}">`;
    thumbNail3.innerHTML = `<img src="${currentProductInModal[0].image}" alt="${currentProductInModal[0].title}">`;
};

export default updateProductModalFindOutMore;