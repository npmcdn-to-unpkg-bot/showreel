window.VideoBuilder;

function VideoDataItem(imdbId) {
    this.imdbId = imdbId;
    this.videoSrc = Utils.imdbIDToYoutubeUrl[imdbId];
    this.posterSrc;
    this.title;
    this.description;
    this.rating;

    Fetcher.fetch(this);

}

VideoDataItem.prototype = {
    constructor: VideoDataItem,
    type: CONST.VIDEO,
    width: 560,
    height: 315,

    postFetch: function (json) {
        this.posterSrc = json.Poster;
        this.title = json.Title + ' (' + json.Year + ')';
        this.description = json.Plot;
        this.rating = (json.imdbRating / 10) * 5;

        var videoBuilder = new VideoBuilder(this);
        videoBuilder.build();
    }
}

window.DataModule = {
    init: function () {
        new VideoDataItem('tt0111161');
        new VideoDataItem('tt0068646');
        new VideoDataItem('tt0468569');
    }
};