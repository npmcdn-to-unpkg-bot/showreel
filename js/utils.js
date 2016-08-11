window.CONST = {
    LI: "li",
    DIV: "div",
    CLASS: "class",
    IFRAME: "iframe",
    P: "p",
    SPAN: "span",
    MAX_RATING: 5,
    VIDEO: "video",
    IMAGE: "image",
    SONG: "song"
};

window.Utils = {

    setHtmlAttributes: function (elem, attrs) {
        for (var key in attrs) {
            if (attrs.hasOwnProperty(key)) {
                elem.setAttribute(key, attrs[key]);
            }
        }
    }
};