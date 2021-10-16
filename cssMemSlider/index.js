const sliderContainer = document.querySelector('.picture');
const sliderContainerUp = document.querySelector('.picture__up');
const sub = document.querySelector('.sub');
const sliderPags = document.querySelectorAll('.slider__pag__li');

const subList = {
    1: "Everything! I'm going to sleep)",
    2: "When your salary was raised)",
    3: "I'm watching you!",
    4: "Please! Please! Please!",
    5: "I managed to do it before the deadline!",
};

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
        sliderPags.forEach((v) => v.classList.remove('slider__pags__active'));
        v.classList.add('slider__pags__active');
        v.classList.add('slider__pags__active__hover');

        sliderContainer.style.setProperty('--img', `url("galery/${i}.gif")`);
    });

    v.addEventListener('mouseup', () => {
        v.classList.remove('slider__pags__active__hover');

        sub.innerHTML = subList[i + 1];
        sliderContainerUp.style.setProperty('--img', `url("galery/${i + 1}.gif")`);

        sliderContainerUp.animate(
            [{backgroundPositionX: '1024px'}, {backgroundPositionX: '0px'}],  
            {
            duration: 400,
            easing: 'ease-out',
            }
        );
    });
});
