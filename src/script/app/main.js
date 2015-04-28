require([
    'react',
    'app/component/App'
], (
    React,
    App
) => {

    class Main {
        constructor() {
        }

        start() {
            React.render(
                <App title="Input Box" />,
                document.getElementById('js-app-wrap')
            );
        }
    }

    return (new Main()).start();
});
