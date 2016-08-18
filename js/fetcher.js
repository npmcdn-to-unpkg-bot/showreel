function FetchModule() {
    this.fetch = function (videoDataItem) {

        function callback() {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    this.videoDataItem.postFetch(JSON.parse(this.response));
                } else {
                    alert("can't fetch movie data");
                }
            }
        }

        var httpRequest = new XMLHttpRequest();
        httpRequest.videoDataItem = videoDataItem;
        var url = 'http://www.omdbapi.com/?i=' + videoDataItem.imdbId + '&plot=short&r=json';
        httpRequest.onreadystatechange = callback;
        httpRequest.open('GET', url, true);
        httpRequest.send();
    };
}

window.Fetcher = new FetchModule();