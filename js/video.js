function VideoBuilder(videoDataItem) {
    this.data = videoDataItem;
}

VideoBuilder.prototype = {
    constructor: VideoBuilder,
    build: function () {

        function createPosterContainer() {
            function createPoster() {

                var poster = document.createElement(CONST.IMG);
                var attrs = {
                    src: this.data.posterSrc,
                    alt: this.data.title
                };
                Utils.setHtmlAttributes(poster, attrs);

                var player = new Player(this.data);
                poster.addEventListener("click", player.show, false);
                return poster;
            }

            var posterContainer = document.createElement(CONST.DIV);
            posterContainer.setAttribute(CONST.CLASS, "video-poster");
            posterContainer.appendChild(createPoster.call(this));
            return posterContainer;
        }

        function createDescriptionContainer() {

            function createTitle() {
                var title = document.createElement(CONST.DIV);
                title.setAttribute(CONST.CLASS, "title");
                title.innerHTML = this.data.title;
                return title;
            }

            function createDescription() {
                var description = document.createElement(CONST.P);
                description.innerHTML = this.data.description;
                return description;
            }

            var descriptionContainer = document.createElement(CONST.DIV);
            descriptionContainer.setAttribute(CONST.CLASS, "video-description");
            descriptionContainer.appendChild(createTitle.call(this));
            descriptionContainer.appendChild(createDescription.call(this));
            var rating = new Rating(this.data.rating);
            descriptionContainer.appendChild(rating.getContainer());
            return descriptionContainer;
        }

        var item = document.createElement(CONST.LI);
        item.appendChild(createPosterContainer.call(this));
        item.appendChild(createDescriptionContainer.call(this));
        var ul = document.getElementById("items-list");
        ul.appendChild(item);
    }
}
