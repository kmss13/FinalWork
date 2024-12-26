
window.addEventListener('DOMContentLoaded', (event) => {
	
	
	const list = document.querySelector('.list');
	
	const items = document.querySelectorAll('.catalog-card');

	function filter() {

		list.addEventListener('click', (event) => {
			const targetId = event.target.dataset.id;			

			switch(targetId) {
				case 'all':
					getItems('catalog-card');
					break
				case 'brooch':
					getItems(targetId);
					break
				case 'earnings':
					getItems(targetId);
					break
				case 'set':
					getItems(targetId);
					break
				case 'necklace':
					getItems(targetId)
					break;
			}
		})
	}
	filter()

	function getItems(className) {
		items.forEach(item => {
			if (item.classList.contains(className)) {
				item.style.display = "block";
			} else {
				item.style.display = 'none';
			}
		});	

	}

	
	
});