
window.addEventListener('DOMContentLoaded', (event) => {

	const modalOpen = document.querySelectorAll('[data-modal]'),
		modal = document.querySelectorAll('.overlay-modal'),
		modalClose = document.querySelectorAll('[data-close]'),
	    modalSubmit = document.querySelector('.modal-btn-submit');

	
	modalOpen.forEach(btn => {
		btn.addEventListener('click', () => {
			modal.forEach(block => {
				block.classList.toggle('none');		
					document.body.style.overflow='hidden';
			});
	
		});
	});
	

	modalClose.forEach(btn => {
		btn.addEventListener('click', () => {
			modal.forEach(block => {
				block.classList.toggle('none');	
					document.body.style.overflow='';
			});		
		});
	});	
	
	


	modal.addEventListener('submit', e => {
		e.preventDefault;
		// Получаем значения из формы
		const usernameModal = document.getElementById('username').value;
		const phoneModal = document.getElementById('phone').value;

        // Создаем объект пользователя
		const userModal = {
			username: username,
			phone: phone
		};

		// Сохраняем данные в локальном хранилище
		localStorage.setItem('userData', JSON.stringify(userModal));

		// Уведомляем пользователя об успешной регистрации
		alert('Наш менеджер свяжется с вами в ближайшее время');

	});
});
