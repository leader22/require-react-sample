define([
    'react', 'react-router'
], (
    React,
    Router
) => {

    let RouteHandler = Router.RouteHandler;

    let App = React.createClass({
        render() {
            return (
                <div>
                    <RouteHandler />
                </div>
            );
        }
    });

    return App;
});
