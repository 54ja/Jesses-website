const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('carousel__button--left');
const dotsNavs = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNavs.children);

const slidesWidth = slides[0].getBoundingClientRect().width;


console.log(slidesWidth);

// arange the slides next to the aother one //

slides[0].style.left = 0;
slides[1].style.left = '100px';


//when i click move slides to the left//

//when i clickmove slides to the right//

//when i click the nav idicators move to that slide//