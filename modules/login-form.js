'use strict'

window.addEventListener('DOMContentLoaded', (event) => {


	let openbtn = document.querySelector('.lk'),
		formOpen=document.querySelector('.login-form');
	
	openbtn.addEventListener('click', () => {
		formOpen.classList.toggle('none');
	});

	let submitBtn = document.querySelector('.btn.btn-submit');

	submitBtn.addEventListener('click', event => event.preventDefault());


	let closeForm = document.querySelector('.login-form-close');
	closeForm.addEventListener('click', (e) => {
		if (e.target == closeForm.firstElementChild) {
			formOpen.classList.add('none');
		}
		
	});

});

 