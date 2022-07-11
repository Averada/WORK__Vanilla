let lastScroll = 0;
const defaultOffSet = 0;
const header = document.querySelector('.header')

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffSet) {
        header.classList.add('hide')
    } else if (scrollPosition() < lastScroll && containHide()) {
        header.classList.remove('hide');
    }
    lastScroll = scrollPosition();
})