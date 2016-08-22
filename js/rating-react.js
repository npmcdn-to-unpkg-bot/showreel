window.RatingComp = React.createClass({

    render: function () {
        return (
            <div>
                <span className="star marked-star" classID="1"></span>
                <span className="star marked-star" classID="2"></span>
                <span className="star marked-star" classID="3"></span>
                <span className="star" classID="4"></span>
                <span className="star" classID="5"></span>
            </div>
        );
    }
})