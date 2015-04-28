require([
    'react',
    'app/component/App'
], (
    React,
    App
) => {
    React.render(<App title="Input Box" />, document.getElementById('js-app-wrap'));
});
