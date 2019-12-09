class Carrousel {
    array = [];
    list;
    counter = 0;

    constructor(list) {
        this.list = list;

        for (let i = 0; i < list.children().length; i++) {
            const img = list.children()[i].children[0].children[0].currentSrc;
            this.array.push(img)
        }


    }

    nextItem() {
        this.counter++
        if (this.counter === this.array.length) {
            this.counter = 0
        }
        for (let i = 0; i < this.array.length; i++) {
            this.counter++;
            if (this.counter >= this.array.length) {
                this.counter = 0
            }
            $(this.list.children()[i].children[0].children[0]).attr("src", this.array[this.counter]);
        }
    }

    previousItem() {
        this.counter--
        if (this.counter === -1) {
            this.counter = this.array.length - 1
        }
        for (let i = 0; i < this.array.length; i++) {
            if (this.counter >= this.array.length) {
                this.counter = 0
            }
            $(this.list.children()[i].children[0].children[0]).attr("src", this.array[this.counter]);
            this.counter++
        }
    }

}
$.preloadImages = function() {
    for (var i = 0; i < arguments.length; i++) {
        $("<img />").attr("src", arguments[i]);
    }
}
