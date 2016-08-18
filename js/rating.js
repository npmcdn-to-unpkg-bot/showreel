function Rating(rating) {

    var container;

    var parseNumber = function (event) {
        var rating = event.target.id ? event.target.id : container.dataset.rating;
        return rating;
    }

    var addStars = function (rating) {
        for (var i = 0; i < CONST.MAX_RATING; i++) {
            var spanStar = document.createElement(CONST.SPAN);
            var spanClass = i < rating ? "star marked-star" : "star";
            spanStar.setAttribute(CONST.CLASS, spanClass);
            spanStar.setAttribute(CONST.ID, i + 1);
            container.appendChild(spanStar);
        }
    };

    var select = function (event) {
        event.stopPropagation();
        container.dataset.rating = parseNumber(event);
        alert('thank you!');
    };

    var refresh = function (event) {
        Utils.removeChildren(this);
        addStars(container.dataset.rating);
        this.addEventListener("mouseover", preview, true);
    };

    var preview = function (event) {
        event.stopPropagation();
        Utils.removeChildren(this);
        addStars(parseNumber(event));
        var spanNum = document.createElement(CONST.SPAN);
        spanNum.setAttribute(CONST.CLASS, 'rating-number');
        spanNum.innerHTML = ' =' + parseNumber(event);
        this.appendChild(spanNum);
        this.removeEventListener("mouseover", preview, true);
        this.addEventListener("click", select, true);
        this.addEventListener("mouseleave", refresh, true);
    };

    var init = function () {
        container = document.createElement(CONST.DIV);
        container.setAttribute(CONST.CLASS, "stars-container");
        container.dataset.rating = rating;
        addStars(rating);
        container.addEventListener("mouseover", preview, true);
    };

    this.getContainer = function() {
        return container;
    }

    init();
}