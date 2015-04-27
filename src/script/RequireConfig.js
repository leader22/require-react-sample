(function() {

    let require = {
        urlArgs: '_=' + (new Date()).getTime(),
        baseUrl: '/dest/script',
        waitSeconds: 120,
        paths: {
           'react': 'vendor/react/react-with-addons',
        },
        shim: {
        }
    };

    let _inBrowser, _inNode;
    try {
        _inBrowser = 'document' in window;
        _inNode    = false;
    } catch(e) {
        _inBrowser = false;
        _inNode    = true;
    }
    if (_inNode) {
        module.exports = require;
    } else if (_inBrowser) {
        window.require = require;
    }

}());
