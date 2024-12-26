'use strict'

const parseData = JSON.parse(database);

window.addEventListener('DOMContentLoaded', (event) => {

    
    



    const renderItem = (id_product, group, img, product_name, desc,materials,price, onsale) => {
    return `
                    <div class="catalog-card ${group}" data-id=${id_product} data-name=${product_name} data-price=${price}>
                       
					   <img class="catalog-img" src=${img} alt="Каталог">
                        <div class="catalog-text">
                        <p class="catalog-title"=>${product_name}</p>
                        <p class="catalog-desc"=>${desc}</p>
                        <p class="catalog-materials">${materials}</p>
                        <p class="catalog-price"> ${price} рублей</p> 
                        </div>
						<p class="catalog-onsale">  ${onsale}</p><br>
                        <button class="catalog-button">Купить</button>
                    </div>
                    `  
    };
    

const renderPage = (list) => {
    let itemsList = list.map(item => renderItem(item.id_product, item.group, item.img, item.product_name,item.desc,item.materials, item.price, item.onsale));
    document.querySelector('.catalog').innerHTML = itemsList.join('');

}
renderPage(parseData);



const itemCountPlus=document.querySelectorAll('.plus-count'),
	itemCountMinus=document.querySelectorAll('.minus-count'),
	itemInputCount=document.querySelectorAll('div.catalog-item-count input[value]'),
	container=document.querySelector('.container');
	
	
	
	container.addEventListener('click', (event) => {
		if(event.target.classList.contains('.plus-count')) {
			console.log('plus');
			//itemInputCount++;
			
		}
		if(event.target.classList.contains('.minus-count')) {
			//itemInputCount--;
			console.log('minus');
		}
	});
	//itemCountPlus.forEach((button) => {
	//	button.addEventListener('click', (event) => {
	//		console.log(event.target)
	//	if (event.target.classList.contains('plus-count')) {
	//		itemInputCount++;
	//	}	
	//	});
	//});
	
	let onSale = document.querySelectorAll('.catalog-onsale').forEach((item) => {
        if (item.innerText === 'В наличии') {
            item.setAttribute('style', 'background:#f4e7d2;color:#8a3535')
      
        }
      
      })
    
	
	
});


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

//Функция вертски каждого товара
//const renderProduct = (product) => {
 // return `div class= "cart-item">
  //<img src="${img}">
 // <h3>${product.title}</h3>
 // <p>${product.price}</p>
//  <button class="catalog-button">Купить></button>

 // </div>`

//};
//const renderPage = list => {
 // document.querySelector(".catalog").innerHTML = (list.map(product => renderProduct(product))).join("");
//};

