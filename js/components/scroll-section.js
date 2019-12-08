class ScrollSection {
    transition = 0;
    constructor(transition) {
        this.transition = transition;
    }

    goToSection (element) {
        $('html, body').animate({
            scrollTop: $($.attr(element,'href')).offset().top
        }, this.transition);
    }
}

