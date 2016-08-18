window.CONST = {
    VIDEO: "video",
    LI: "li",
    DIV: "div",
    CLASS: "class",
    ID: "id",
    IMG: "img",
    IFRAME: "iframe",
    P: "p",
    SPAN: "span",
    MAX_RATING: 5
}

function UtilsModule() {

    this.removeChildren = function (elem) {
        while (elem.firstChild !== null) {
            elem.removeChild(elem.firstChild);
        }
    }

    this.setHtmlAttributes = function (elem, attrs) {
        for (var key in attrs) {
            if (attrs.hasOwnProperty(key)) {
                elem.setAttribute(key, attrs[key]);
            }
        }
    }

    this.imdbIDToYoutubeUrl = {
        'tt0111161': 'https://www.youtube.com/embed/6hB3S9bIaco',
        'tt0068646': 'https://www.youtube.com/embed/sY1S34973zA',
        'tt0468569': 'https://www.youtube.com/embed/yrJL5JxEYIw'
    };
}

window.Utils = new UtilsModule();
