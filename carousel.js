const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('carousel__button--left');
const dotsNavs = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNavs.children);

const slidesWidth = slides[0].getBoundingClientRect().width;


// arange the slides next to the aother one //

//slides[0].style.left = slidewidth * 0 + 'px';
//slides[1].style.left = slidewidth * 1 + 'px';
//slides[2].style,left = slidewidth * 2 + 'px';

const setSlidePosition = (slide, index) => {
	slide.style.left = slidesWidth * index + 'px';
};

slides.forEach(setSlidePosition);
//when i click move slides to the left//

//when i clickmove slides to the right//

nextButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide');
	const nextSlide = currentSlide.nextElementSibling;
	const amountToMove = nextSlide.style.left;

	// move to the next slide
	track.style.transform = 'translateX(-	' + amountToMove + ')';
	currentSlide.classList.remove('current-slide');
	nextSlide.classList.add('current-slide');


})
//when i click the nav idicators move to that slide//

