class Navigation {
    actionButton;
    menu;
    toggle = false;
    constructor(actionButtonId, menuId) {
       this.actionButton = $(actionButtonId);
       this.menu = $(menuId);
    }

    toggleMenu(){
        this.menu.toggleClass('header-fade-in');
        this.actionButton.toggleClass('header__menu-icon--activated')
    }
}
