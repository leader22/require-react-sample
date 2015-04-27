require([
    'react',
    'app/component/App'
], (
    React,
    App
) => {
    console.log(App);
    console.log('main');

    React.render(<App name="foo" />, document.body);
});
