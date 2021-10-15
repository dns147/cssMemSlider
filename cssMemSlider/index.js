const sliderContainer = document.querySelector('.picture');
const sub = document.querySelector('.sub');
const sliderPags = document.querySelectorAll('.slider__pag__li');

console.log(sliderPags);

sliderPags[0].classList.add('slider__pags__active');

sliderPags.forEach((v, i) => {
    v.addEventListener('mouseover', () => {
        const activePag = document.querySelector('.slider__pags__active');

        v.classList.add('slider__pags__hover');

        if (v === activePag) {
            v.classList.add('slider__pags__active__hover');
        }
    });

    v.addEventListener('mouseout', () => {
        const activePag = document.querySelector('.slider__pags__active');

        v.classList.remove('slider__pags__hover');
        
        if (v === activePag) {
            v.classList.remove('slider__pags__active__hover');
        }
    });

    v.addEventListener('mousedown', () => {
        const activePag = document.querySelector('.slider__pags__active__hover');

        sliderPags.forEach((v) => v.classList.remove('slider__pags__active'));

        //if (v !== activePag) {
            v.classList.add('slider__pags__active');
        //}

        v.classList.add('slider__pags__active__hover');

        // if (i > countSlide) {
        //     moveLeft();
        // }

        // if (i < countSlide) {
        //     moveRight();
        // }

        // countSlide = i;
        // sliderPags.forEach((v) => v.style.backgroundColor = '#ffffff');
        // v.style.backgroundColor = '#9d8665';

        // sliderNum.innerHTML = '0' + (countSlide + 1);
        // welcomContainer.style.setProperty('--welcom-img', `url("assets/img/welcome-slider/${countSlide + 1}.jpg")`);
    });

    v.addEventListener('mouseup', () => {
        v.classList.remove('slider__pags__active__hover');
    });
});