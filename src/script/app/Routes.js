define([
    'react', 'react-router',
    'app/component/App',
    'app/component/Input'
], (
    React,
    Router,
    App,
    Input
) => {

    let Route = Router.Route;
    let DefaultRoute = Router.DefaultRoute;

    let Routes = (
        <Route name="app" path="/" handler={App}>
            <Route name="input" handler={Input}/>
            <DefaultRoute handler={Input}/>
        </Route>
    );

    return Routes;
});
