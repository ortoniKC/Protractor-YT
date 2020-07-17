require("babel-register")({
    presets: ["es2015"]
});
exports.config = {
    framework: 'jasmine',
    directConnect: true,
    // seleniumAddress: "http://localhost:4444/wd/hub",
    specs: [''],
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        "browserName": "chrome",
        'chromeOptions': {
            w3c: false
        }
    }
}