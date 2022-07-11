let languageChanged = false;
// elements
const headerLanguage = document.querySelector('.header__language')
const headerLinksAbout = document.querySelector('.header__links__about')
const headerLinksServices = document.querySelector('.header__links__services')
const headerLinksContacts = document.querySelector('.header__links__contacts')
const textRowAboutUs = document.querySelector('.text__row__about__us')
const textRowHowWeCanHelp = document.querySelector('.text__row__how__we__can__help')
const textRowBlockOne = document.querySelector('.text__row__block__one')
const textRowBlockTwo = document.querySelector('.text__row__block__two')
const textRowCase = document.querySelector('.text__row__case')
const textRowLocation = document.querySelector('.text__row__location')
    // mobile
const mobileMenuItemServices = document.querySelector('.mobile__menu__item__services')
const mobileMenuItemContacts = document.querySelector('.mobile__menu__item__contacts')
const mobileMenuItemAbout = document.querySelector('.mobile__menu__item__about')
    // have idea rows
const haveIdeaRowOne = document.querySelector('.have__idea__row__one')
const haveIdeaRowTwo = document.querySelector('.have__idea__row__two')
const haveIdeaRowThree = document.querySelector('.have__idea__row__three')

function languageChange() {
    languageChanged = !languageChanged;
    if (languageChanged) {
        console.log('1');
        headerLanguage.innerHTML = 'ENG'
        headerLinksAbout.innerHTML = 'ABOUT US'
        headerLinksServices.innerHTML = 'SERVICES'
        headerLinksContacts.innerHTML = 'CONTACTS'
        textRowAboutUs.innerHTML = 'ABOUT US'
        textRowAboutUs.style.width = '26vw'
        textRowAboutUs.style.left = '7vw'
        textRowHowWeCanHelp.innerHTML = 'We can be helpful with:'
        textRowBlockOne.innerHTML = 'Any task can be transformed into a unique story that will be told with relevant tools and modern technology'
        textRowBlockTwo.innerHTML = 'Mutual understanding = successful project. Using the human-to-human approach we define what is required for your exact project and offer the options that you couldn’t have thought of!'
        textRowCase.innerHTML = 'CASES'
        textRowLocation.innerHTML = 'Presnenskaya embankment 6, building 2, Moscow, Russia, 123112'
            // mobile
        mobileMenuItemServices.innerHTML = 'SERVICES'
        mobileMenuItemContacts.innerHTML = 'CONTACTS'
        mobileMenuItemAbout.innerHTML = 'ABOUT US'
    } else if (!languageChanged) {
        console.log('2');
        headerLanguage.innerHTML = 'RU'
        headerLinksAbout.innerHTML = 'О КОМПАНИИ'
        headerLinksServices.innerHTML = 'УСЛУГИ'
        headerLinksContacts.innerHTML = 'КОНТАКТЫ'
        textRowAboutUs.innerHTML = 'О НАС'
        textRowHowWeCanHelp.innerHTML = 'Чем мы можем вам помочь'
        textRowBlockOne.innerHTML = 'Любую задачу клиента можно превратить в уникальную историю, которую мы расскажем с помощью актуальных инструментов и современных технологий'
        textRowBlockTwo.innerHTML = 'Взаимопонимание = успешный проект. Используя human-to-human подход, мы определим,что подойдёт именно вашей задаче и предложим варианты, о которых вы и подумать не могли'
        textRowCase.innerHTML = 'КЕЙСЫ'
        textRowLocation.innerHTML = 'Пресненская наб., 6 строение 2, Москва, Россия, 123112'
            // mobile
        mobileMenuItemServices.innerHTML = 'УСЛУГИ'
        mobileMenuItemContacts.innerHTML = 'КОНТАКТЫ'
        mobileMenuItemAbout.innerHTML = 'О КОМПАНИИ'
    }

}