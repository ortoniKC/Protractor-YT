
require("babel-register")({
    presets: ["es2015"]
});
// Provide your path here, if you are getting permission error -  copy the folder into some other drive or location (not in C drive)
const extensionPath = "C:\\Users\\kouss\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\ngeokhpbgoadbpdpnplcminbjhdecjeb\\1.0.92_0"
exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: [''],
    capabilities: {
        "browserName": "chrome",
        'chromeOptions': {
            'args': ['--load-extension=' + extensionPath]

        }
    }
}