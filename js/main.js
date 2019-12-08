const windowRef = $(window);
const menu = new Menu('.header__menu-icon', '#header', windowRef.width() <= 992);

const scrollToSection = new ScrollSection(500);

windowRef.scroll(() => {
    menu.hideWhenInPositionBigScreen(windowRef[0].pageYOffset);
});

windowRef.resize((event) => {
    menu.setDevice(event.target.innerWidth <= 992);
});

function sectionSelected(element){
    const linkElement = $(element)[0].children[0];
    $('.header__item').removeClass('header__item--active');
    $(element).addClass('header__item--active');
    menu.toggleMenu();
    scrollToSection.goToSection(linkElement);
}
