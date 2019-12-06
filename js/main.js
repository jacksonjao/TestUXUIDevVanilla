const windowRef = $(window);
const menu = new Menu('.header__menu-icon', '#header', windowRef.width() <= 992);

windowRef.scroll(() => {
    menu.hideWhenInPositionBigScreen(windowRef[0].pageYOffset);
});

windowRef.resize((event) => {
    menu.setDevice(event.target.innerWidth <= 992);
});
