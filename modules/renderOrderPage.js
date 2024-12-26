'use strict'

//import {randomId, renderItemInCart} from './modules/renderCart.js';

renderItemInCart()

function renderOrderPage(id, img, title, price, count)  {

        return ` <div class="renderedItems" data-id="${id}">
        <img src="${img}" alt="Товар" class="cart-product-img"> 
                                <p class="in-cart-title">${title}</p>
                                <p class="in-catalog-price">${price}</p>
                                <p class="catalogCount">${count} 1</p>
                                <div class="cart-delete">
                                <img class="cart-delete-img"src="img/minus-count.png">
                                </div>
                            </div>`

};

document.querySelector('.cart-container').insertAdjacentHTML('afterbegin', renderOrderPage(id, img, title, priceNumber, count));




