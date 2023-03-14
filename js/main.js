const swiper1 = document.querySelector('.swiper1'),
	swiper2 = document.querySelector('.swiper2'),
	burger = document.querySelector('.burger'),
	close = document.querySelector('.menu__close'),
	menu = document.querySelector('.menu'),
	playButtonsFirst = document.querySelectorAll('.main-slider__play');

let swiperSlider1 = new Swiper(swiper1, {
	centeredSlides: true,
	loop: true,
	slidesPerView: 1,
	spaceBetween: 10,
	fadeEffect: {
		crossFade: true
	},
	effect: 'fade',
	navigation: {
		nextEl: '.btn-right',
		prevEl: '.btn-left',
	},
});

let swiperSlider2 = new Swiper(swiper2, {
	centeredSlides: true,
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: '8%',
});

swiperSlider1.on('transitionEnd', function () {
	let videos = document.querySelectorAll('.first__slider video');
	videos.forEach((el) => {
		el.pause();
		el.currentTime = 0;
	});
	playButtonsFirst.forEach((el) => {
		el.style.display = 'block';
	});
});

burger.addEventListener('click', () => {
	menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
});

playButtonsFirst.forEach((el) => {
	el.addEventListener('click', (e) => {
		let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
		video.play();
		e.currentTarget.style.display = 'none';
		setTimeout(() => {
			video.volume = 0.5;
		}, 1000);
	});
})
