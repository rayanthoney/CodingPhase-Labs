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
	//circles[current - 1].classList.add("jumbo-slider__circle--filled");

	// Update elipses and links
	let updateNav = () => {
		console.log(`update current: ${current}`);
		for (let index = 0; index < slides.length; index++) {
			links[index].classList.remove("jumbo-slider__link--active");
			circles[index].classList.remove("jumbo-slider__circle--filled");
		}

		links[current - 1].classList.add("jumbo-slider__link--active");
		circles[current - 1].classList.add("jumbo-circle--filled");
	};
	let startSliding = () => {
		setInterval(() => {
			console.log(`current: ${current}`);
			slides[1].classList.add("jumbo-slider__slide--active");
			slides[0].classList.remove("jumbo-slider__slide--active");

			if (current < slides.length) {
				current++;
				updateNav(current);
			}
		}, 6000);
	};
	startSliding();
};

init();
