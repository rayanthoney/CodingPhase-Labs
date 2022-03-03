let init = () => {
	let container = document.getElementsByClassName("jumbo-slider__container")[0],
		slides = document.getElementsByClassName("jumbo-slider__slide"),
		circles = document.getElementsByClassName("jumbo-slider__circle"),
		links = document.getElementsByClassName("jumbo-slider__link"),
		current = 1,
		time = 6000;

	// Add Animation Class to the Slide
	slides[0].classList.add("jumbo-slider__slide--active");
	links[current - 1].classList.add("jumbo-slider__link--active");
	// 13:45 I am adding these by myself for now
	circles[current - 1].classList.add("jumbo-slider__circle--filled");
};

init();
