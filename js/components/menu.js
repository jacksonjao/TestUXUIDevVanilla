class Menu {
    actionButtonRef;
    menuRef;
    scrollPosY;
    isMobile;
    isOpen;
    constructor(actionButtonId, menuId, isMobile) {
        this.actionButtonRef = $(actionButtonId);
        this.menuRef = $(menuId);
        this.scrollPosY = 0;
        this.isMobile = isMobile;
        this.isOpen = false;
    }

    toggleMenu(scroll) {
        this.isOpen = !this.isOpen
        if(this.isOpen){
            scroll.disableScroll();
        }else{
            scroll.enableScroll();
        }
        this.menuRef.toggleClass('header-fade-in');
        this.actionButtonRef.toggleClass('header__menu-icon--activated')
    }

    hideWhenInPositionBigScreen(pos) {
        if (!this.isMobile) {
            let currentPos = pos;

            if (this.scrollPosY > currentPos) {
                this.menuRef.css({top: '0'});
            } else if (pos > 445) {
                this.menuRef.css({top: '-6.25rem'});
            }
            this.scrollPosY = currentPos;
        }
    }

    setDevice(isMobile) {
        this.isMobile = isMobile;
        if (isMobile) {
            this.menuRef.css({top: '0'});
        }
    }
}
