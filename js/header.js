var Now = React.createClass({
    render: function () {
        return (
            <h6>{this.props.dateNow}</h6>
        );
    }
});

window.Header = React.createClass({

        getDateNow: function () {
            return {
                dateNow: Date(),
                background: ''
            };
        },

        getInitialState: function () {
            setInterval(this.refresh, 10000);
            return this.getDateNow();
        },

        refresh: function () {
            this.setState(this.getDateNow())
        },

        hover: function () {
            var hoverState = this.getDateNow();
            hoverState.background = 'hover-background ';
            this.setState(hoverState);
        },

        render: function () {
            return (
                <header className={"header-style header-layout " + this.state.background}
                        onMouseLeave={this.refresh} onMouseEnter={this.hover}>

                    <div className="left-container">
                        <div className="logo">
                        </div>
                    </div>
                    <div className="middle-container">
                        <h1 className="site-title">SHOWREEL</h1>
                        <h4 className="site-description">Ofer Rozenman's Showreel</h4>
                    </div>
                    <div className="right-container">
                        <Now dateNow={this.state.dateNow}/>
                    </div>
                </header>
            );
        }
    }
)

