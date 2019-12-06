class Menu {
    actionButtonRef;
    menuRef;
    windowRef;
    scrollPosY;
    isMobile;
    constructor(actionButtonId, menuId, isMobile) {
        this.actionButtonRef = $(actionButtonId);
        this.menuRef = $(menuId);
        this.scrollPosY = 0;
        this.isMobile = isMobile;
    }

    toggleMenu() {
        this.menuRef.toggleClass('header-fade-in');
        this.actionButtonRef.toggleClass('header__menu-icon--activated')
    }

    hideWhenInPositionBigScreen(pos) {
            if (!this.isMobile) {
                let currentPos = pos;
                if (this.scrollPosY > currentPos) {
                    this.menuRef.css({top: '0'});
                } else {
                    this.menuRef.css({top: '-6.25rem'});
                }
                this.scrollPosY = currentPos;
            }
    }

    setDevice(isMobile) {
            this.isMobile = isMobile;
    }
}
