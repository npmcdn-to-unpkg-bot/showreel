(function () {

    var FooterContent = React.createClass({
        render: function () {
            return (
                <h6>&copy; 2016 Ofer Rozenman. All rights reserved.</h6>
            );
        }
    });

    ReactDOM.render(
        <FooterContent/>,
        document.getElementsByClassName('footer')[0]
    );

    DataModule.init();

})();