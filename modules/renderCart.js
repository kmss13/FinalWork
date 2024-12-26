'use strict'



window.addEventListener('DOMContentLoaded', (event) => {

    const cartQuantity = document.querySelector('.cart-main span');    
    const cartOpen = document.querySelector('.cart-block');
    const renderItems = document.querySelector('.renderItems');
    const toCartPage = document.querySelector('.toCartPage');
    let catalogButton = document.querySelectorAll('.catalog-button');
    let cartTotalValue = document.querySelector('.cart-total-value'); 
    let price = 0;
    
        

    const randomId = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }; // генерирует рандом ID, чтобы приудалении из корзины товары связывались между каталожными
    //и корзинными

       const renderItemInCart = (id, img, title, price, count) => {
        
        return ` <div class="renderedItems" data-id="${id}">
		<div class="deleteItem"><img class="deleteItem-img" src="img/close.png"></div>
        <img src="${img}" alt="Товар" class="cart-product-img"> 
                                <p class="in-cart-title">${title}</p>
                                <p class="in-catalog-price">${price}</p>
                               
                                <div class="catalog-item-count">
						<input ${count} type= "text" name="count"  value="1" maxlenght="3" class="stepper-input">
						</div>
                            </div>`
            
        };
        
        const deleteProducts = (productParent) => {
            //получитьid
            //просчитать цену
            //пересчитать сумму 
            //и удалить сам товар
            
            //let id = productParent.querySelector('.renderedItems').dataset.id;
            //document.querySelector(`.product[data-id="${id}"]`)
            let currentPrice = productParent.querySelector('.in-catalog-price').textContent;


            minusFullPrice(currentPrice);
            printFullPrice();
            productParent.remove(); 
            printQuantity();
        }


        const plusFullPrice = (currentPrice) => {
            return price += parseInt(currentPrice);
        };
        const minusFullPrice = (currentPrice) => {
            return price -= parseInt(currentPrice);
        };
        const printFullPrice = () => {
            cartTotalValue.textContent = `${price}` ;
        };
        const printQuantity = () => {
            let length = renderItems.children.length;
            cartQuantity.textContent = length;
            length > 0 ? cartOpen.classList.remove('invisible') : cartOpen.classList.add('invisible')

        };
        

    catalogButton.forEach(el => {
        el.closest('.catalog-card').setAttribute('data-id', randomId());
        el.addEventListener('click', (e) => {
            let self = e.currentTarget;
            let parent = self.closest('.catalog-card');
            let id = parent.dataset.id;
            let img = parent.querySelector('.catalog-img').getAttribute('src');
            let title = parent.querySelector('.catalog-title').textContent;
            let priceNumber = parent.querySelector('.catalog-price').textContent;
            let count = parent.getElementsByTagName("input")[0];
            toCartPage.classList.remove('none');

            
            plusFullPrice(priceNumber);
            printFullPrice();
            renderItems.insertAdjacentHTML('afterbegin', renderItemInCart(id, img, title, priceNumber, count));
            printQuantity();

            document.querySelector('.cart-main').addEventListener('click', () => {
                cartOpen.classList.toggle('invisible');
            });
            document.querySelector('.cart-close img').addEventListener('click', () => {
                cartOpen.classList.toggle('invisible');
            });

        });

        //localStorage.setItem('id', 'title');


    });
        cartOpen.addEventListener('click', (e) => { // вызываем ф-цию удаления товара
        
            if (e.target.classList.contains('deleteItem-img')) {
                deleteProducts(e.target.closest('.renderedItems'))
            } 
        });
    
    
  //stepper
    const stepper = document.querySelectorAll('.catalog-item-count');
    const stepperInput = document.getElementsByTagName("input");
    const stepperPlus = document.querySelectorAll('.plus-count');
    const stepperMinus = document.querySelectorAll('.minus-count');

   let countInput = stepperInput.value;
   // stepperInput.addEventListener('keyup', (e) => {
    //    let self = e.currentTarget;
		

    //    if (self.value == '0') {
    //        self.value = 1;
    //    }

    //    countInput = stepperInput.value;
//
    //    if (countInput == 1) {
     //       stepperMinus.classList.add('.stepper-btn-disabled');
      //  }
	  
	  function plusItem() {
		  
  stepperPlus.forEach(btn => {
	   btn.addEventListener('click', (e) => {
		   console.log(e)
	//let self = e.currentTarget;
	//console.log(self)
	  //if (self) {
		  
		//  e.preventDefault();
			//countInput++;
	  //}
			
			if (countInput == 1) {
			stepperMinus.classList.add('stepper-btn-disabled');
		} else {
			stepperMinus.classList.remove('stepper-btn-disabled');
			}
		stepperInput.value = countInput;
	});
	})	;
  }
  
  function minusItem() {
  stepperMinus.addEventListener('click', (e) => {
			
			if (countInput == '1') {
				stepperMinus.classList.add('stepper-btn-disabled');
			} else {
				stepperMinus.classList.remove('stepper-btn-disabled');
				countInput--;
			}
			stepperInput.value = countInput;
		});
  }
	  
	  plusItem();	
 





});


//export {randomId, renderItemInCart}; 