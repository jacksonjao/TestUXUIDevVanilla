class ScrollSection {
    transition = 0;

    constructor(transition) {
        this.transition = transition;
    }

    goToSection(element) {
        this.enableScroll();
        $('html, body').animate({
            scrollTop: $($.attr(element, 'href')).offset().top
        }, this.transition);
    }

    disableScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }

    enableScroll() {
        window.onscroll = function () {
        };
    }


}

