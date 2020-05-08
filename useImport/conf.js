require("babel-register")({
    presets: ["es2015"]
});

exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['inputs.spec.js']
}