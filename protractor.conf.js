require("babel-register")({
    presets: ["es2015"]
});
exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: [''],
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        "browserName": "chrome",
        "chromeOptions": {
            // "debuggerAddress": 'localhost:50161'
        }
    }
}