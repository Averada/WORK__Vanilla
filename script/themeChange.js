let themeChanged = false;

// background main
const mainBackground = document.querySelector('.parallax__layer__one')
    // logos arrow question
const headerLogo = document.querySelector('.circle__solid__white__header__logo__symbol')
const footerLogo = document.querySelector('.circle__solid__white__footer__logo__symbol')
const questionLogo = document.querySelector('.circle__solid__white__question__symbol')
const arrowLogo = document.querySelector('.circle__solid__white__arrow__symbol')
    // icons
    // Использую querySelectorAll вместо querySelector, поскольку margqueeLine создает дополнительные li
const screamIcon = document.querySelectorAll('.scream')
const belugaIcon = document.querySelectorAll('.beluga')
const bwmIcon = document.querySelectorAll('.bmw')
const miniIcon = document.querySelectorAll('.mini')
const iqosIcon = document.querySelectorAll('.iqos')
const medIcon = document.querySelectorAll('.med')
const gloIcon = document.querySelectorAll('.glo')
const batIcon = document.querySelectorAll('.bat')
const arcIcon = document.querySelectorAll('.arc')
    //  orange circle
const grayCircle = document.querySelector('.circle__solid__gray__small')

// mobile 
const mobileIconTheme = document.querySelector('.footer__theme__button__mobile')
const mobileMenuBackground = document.querySelector('.mobile__menu__container')


function themeChange() {
    themeChanged = !themeChanged;

    if (themeChanged) {
        mobileIconTheme.innerHTML = '<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="17.9697" cy="17.9851" r="16.5" stroke="var(--main-white-color)"/> <circle cx="17.9699" cy="17.9851" r="6.3" stroke="var(--main-white-color)"/> <circle cx="17.9695" cy="17.9851" r="9.7" stroke="var(--main-white-color)" stroke-dasharray="3 6"/> </svg>'
        document.documentElement.style.setProperty('--main-white-color', 'black');
        document.documentElement.style.setProperty('--main-black-color', 'white');
        // main background
        mainBackground.style.backgroundImage = 'url(./img/desktop/background__white.png)'
            // logos arrow question
        headerLogo.style.backgroundImage = 'url(./img/desktop/circle__solid__white__header__logo__symbol__white.png)'
        footerLogo.style.backgroundImage = 'url(./img/desktop/circle__solid__white__footer__logo__symbol__white.png)'
        questionLogo.style.backgroundImage = 'url(./img/desktop/circle__solid__white__question__symbol__white.png)'
        arrowLogo.style.backgroundImage = 'url(./img/desktop/circle__solid__white__arrow__symbol__white.png)'
            // mobile__background
        mobileMenuBackground.style.backgroundImage = 'url(./img/mobile/mobile__menu__background__white.png)'
            // icons
        screamIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__scream__white.png)'
        });
        belugaIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__beluga__white.png)'

        });
        bwmIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__bmw__white.png)'

        })
        miniIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__mini__white.png)'
        })
        iqosIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__iqos__white.png)'
        })
        medIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__med__white.png)'
        })
        gloIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__glo__white.png)'
        })
        batIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__bat__white.png)'
        })
        arcIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__arc__white.png)'
        })
        grayCircle.style.backgroundColor = 'rgb(189, 189, 189)'
    } else if (!themeChanged) {
        mobileIconTheme.innerHTML = ' <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.0002 13.8C3.24472 13.8 0.200195 10.7554 0.200195 7C0.200195 3.2446 3.2448 0.199997 7.0002 0.199997C10.7556 0.199997 13.8002 3.2446 13.8002 7C13.8002 10.7554 10.7556 13.8 7.0002 13.8ZM7.0002 1.29677C5.18304 1.29677 3.70987 3.85022 3.70987 7C3.70987 10.1498 5.18304 12.7032 7.0002 12.7032C10.1501 12.7032 12.7034 10.1498 12.7034 7C12.7034 3.85022 10.15 1.29677 7.0002 1.29677Z" fill="var(--main-white-color)"/> </svg> '
        document.documentElement.style.setProperty('--main-white-color', 'white');
        document.documentElement.style.setProperty('--main-black-color', 'black');
        // main background
        mainBackground.style.backgroundImage = 'url(./img/desktop/background__black.png)'
            // logos arrow question
        headerLogo.style.backgroundImage = 'url(./img/desktop/circle__solid__white__header__logo__symbol.png)'
        footerLogo.style.backgroundImage = 'url(./img/desktop/circle__solid__white__footer__logo__symbol.png)'
        questionLogo.style.backgroundImage = 'url(./img/desktop/circle__solid__white__question__symbol.png)'
        arrowLogo.style.backgroundImage = 'url(./img/desktop/circle__solid__white__arrow__symbol.png)'
            // mobile__background
        mobileMenuBackground.style.backgroundImage = 'url(../img/mobile/mobile__menu__background.png)'
            // icons
        screamIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__scream.png)'
        });
        belugaIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__beluga.png)'

        });
        bwmIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__bmw.png)'

        })
        miniIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__mini.png)'
        })
        iqosIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__iqos.png)'
        })
        medIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__med.png)'
        })
        gloIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__glo.png)'
        })
        batIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__bat.png)'
        })
        arcIcon.forEach((icon) => {
            icon.style.backgroundImage = 'url(./img/desktop/marquee/marquee__arc.png)'
        })
        grayCircle.style.backgroundColor = '#434343'

    }

}