
window.addEventListener('DOMContentLoaded', (event) => {

	const deadline = '2024-12-31';
	
		const getTimeRamainig = (endtime) => {
			const t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor((t / 1000) % 60),
				minutes = Math.floor((t / 1000 / 60) % 60),
				hours = Math.floor((t / (1000 * 60 * 60)) % 24),
				days = Math.floor((t / (1000 * 60 * 60 * 24)));
			
			return {
				'total': t,
				'days': days,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};

		}

		function getZero(num) {
			if (num >= 0 && num < 10) {
				return `0${num}`;
			} else {
				return num;
			}
		}

	const setClock = (selector, endtime) => {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);
			
			
		updateClock();//чтобы верстка не мигала 1 сек
			
		function updateClock() {// определяет сколько врмемени осталось до дедлайна
			const t = getTimeRamainig(endtime);

			days.textContent = getZero(t.days);
			hours.textContent = getZero(t.hours);
			minutes.textContent = getZero(t.minutes);
			seconds.textContent = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
					
			}
					
		}
	}
	setClock('.timer', deadline)
	
});