define([
    'react', 'react-router'
], (
    React,
    Router
) => {

    let RouteHandler = Router.RouteHandler;
    let Link = Router.Link;

    let App = React.createClass({
        render() {
            return (
                <div>
                    <div>ローダーとか</div>
                    <Link to="/">Top</Link>へ
                    <hr />
                    <RouteHandler />
                </div>
            );
        }
    });

    return App;
});
