window.Video = {
    add: function (video) {
        var videoItem = document.createElement(CONST.LI);

        videoItem.appendChild(Video.createPlayerContainer(video));

        videoItem.appendChild(Video.createDescriptionStyle(video));

        var ul = document.getElementById("items-list");
        ul.appendChild(videoItem);
    },

    createPlayerContainer: function (video) {
        var videoPlayerContainer = document.createElement(CONST.DIV);
        videoPlayerContainer.setAttribute(CONST.CLASS, "video-player-container");

        var iframeVideo = Video.createIFrame(video);
        videoPlayerContainer.appendChild(iframeVideo);

        return videoPlayerContainer;
    },

    createDescriptionStyle: function (video) {
        var videoDescriptionStyle = document.createElement(CONST.DIV);
        videoDescriptionStyle.setAttribute(CONST.CLASS, "video-description-style");

        videoDescriptionStyle.appendChild(Video.createTitle(video));

        videoDescriptionStyle.appendChild(Video.createDescription(video));

        videoDescriptionStyle.appendChild(Video.createRating(video));

        return videoDescriptionStyle;
    },

    createTitle: function (video) {
        var divTitle = document.createElement(CONST.DIV);
        divTitle.setAttribute(CONST.CLASS, "title");
        divTitle.innerHTML = video.title;

        return divTitle;
    },

    createDescription: function (video) {
        var pDescription = document.createElement(CONST.P);
        pDescription.innerHTML = video.description;

        return pDescription;
    },

    createIFrame: function (video) {
        var iframe = document.createElement(CONST.IFRAME);

        var attrs = {
            width: video.width,
            height: video.height,
            src: video.src
        };

        if (video.allowfullscreen)
            attrs.allowfullscreen = "";

        Utils.setHtmlAttributes(iframe, attrs);

        return iframe;
    },

    createRating: function (video) {
        var divRatingContainer = document.createElement(CONST.DIV);
        divRatingContainer.setAttribute(CONST.CLASS, "stars-container");

        for (var i = 0; i < video.rating; i++) {
            var spanMarkedStar = document.createElement(CONST.SPAN);
            spanMarkedStar.setAttribute(CONST.CLASS, "star marked-star");
            divRatingContainer.appendChild(spanMarkedStar);
        }

        for (var i = 0; i < CONST.MAX_RATING - video.rating; i++) {
            var spanStar = document.createElement(CONST.SPAN);
            spanStar.setAttribute(CONST.CLASS, "star");
            divRatingContainer.appendChild(spanStar);
        }

        return divRatingContainer;
    }
};