(function () {

    ReactDOM.render(<Header />, document.getElementById('header-container'));
    ReactDOM.render(<Footer/>, document.getElementById('footer-container'));

    DataModule.init();
})();