function Player(videoDataItem) {
    this.show = function () {

        var createIFrame = function () {
            var iframe = document.createElement(CONST.IFRAME);
            iframe.setAttribute(CONST.CLASS, 'player');

            var attrs = {
                width: videoDataItem.width,
                height: videoDataItem.height,
                src: videoDataItem.videoSrc,
                allowfullscreen: ''
            };

            Utils.setHtmlAttributes(iframe, attrs);

            return iframe;
        };

        var createBackground = function () {
            var playerBackground = document.createElement(CONST.DIV);
            playerBackground.setAttribute(CONST.CLASS, 'player-background');

            return playerBackground;
        };

        var playerBackground = createBackground();
        var iframe = createIFrame();

        document.body.appendChild(playerBackground);
        document.body.appendChild(iframe);
        document.body.setAttribute(CONST.CLASS, 'noscroll');

        var escape = function () {
            document.body.setAttribute(CONST.CLASS, '');
            document.body.removeChild(playerBackground);
            document.body.removeChild(iframe);
        };

        document.addEventListener('keypress', escape, false);
        playerBackground.addEventListener('click', escape, false);
    }
}