// Function called init to initialize the slider.
let init = () => {
	// Finds all the elements inside HTML with getElementsByClassName then className.
	let container = document.getElementsByClassName("jumbo-slider__container")[0],
		slides = document.getElementsByClassName("jumbo-slider__slide"),
		links = document.getElementsByClassName("jumbo-slider__link"),
		circles = document.getElementsByClassName("jumbo-slider__circle"),
		current = 1,
		// variable is time used for setInterval
		time = 10000;

	// Add Animation Class to the Slide with classList.add by class active
	slides[0].classList.add("jumbo-slider__slide--active");
	links[current - 1].classList.add("jumbo-slider__link--active");
	circles[current - 1].classList.add("jumbo-slider__circle--filled");

	// Update elipses and links
	let updateNav = () => {
		// console.log(`update current: ${current}`);
		for (let index = 0; index < slides.length; index++) {
			links[index].classList.remove("jumbo-slider__link--active");
			circles[index].classList.remove("jumbo-slider__circle--filled");
		}

		links[current - 1].classList.add("jumbo-slider__link--active");
		circles[current - 1].classList.add("jumbo-slider__circle--filled");
	};
	// Variable to start the jumbo-slider to transition between pages using the setInterval method
	let startSliding = () => {
		setInterval(() => {
			// console.log(`current: ${current}`);

			// Remove from active from first and add it to the second slide do it can become the first slide with the class actived
			slides[1].classList.add("jumbo-slider__slide--active");
			slides[0].classList.remove("jumbo-slider__slide--active");
			// Clone the first slide and place it on the last space
			container.appendChild(slides[0].cloneNode([true]));
			// Then remove the first slide after it has been cloned
			container.removeChild(slides[0]);

			// console.log(`slides: ${slides.length} `);
			if (current < slides.length) {
				current++;
				updateNav(current);
			} else {
				current = 1;
				updateNav(current);
			}
		}, time);
	};
	startSliding();
};
// Trigger for the function (init) from the top of the page.
init();
