let mobileMenuButton = document.querySelector('.mobile__menu__icon')
let hrefs = document.querySelectorAll('.mobile__menu__item')
let mobileMenu = document.querySelector('.mobile__menu__container')

let isOpen = false
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile__menu__show')
    mobileMenuButton.classList.toggle('mobile__menu__is__open')
    isOpen = !isOpen
    if (isOpen) {
        mobileMenuButton.innerHTML = '<svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M28 11L1 11M1 11L10.99 0.999999M1 11L10.99 21" stroke="var(--main-white-color)"/> </svg>'
    } else if (!isOpen) {
        mobileMenuButton.innerHTML = ' <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="2.5" cy="3" r="2.5" fill="var(--main-white-color)"/> <circle cx="10" cy="3" r="2.5" fill="var(--main-white-color)"/> <circle cx="17.5" cy="3" r="2.5" fill="var(--main-white-color)"/> </svg> '
        mobileMenuButton.setAttribute('border', '0.256vw solid var(--main-white-color)')
    }

})

hrefs.forEach((href) => {
    href.addEventListener('click', () => {
        mobileMenu.classList.toggle('mobile__menu__show')
    })
})