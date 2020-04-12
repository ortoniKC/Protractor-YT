"use strict";
exports.__esModule = true;
var credential = {
    "user": "admin",
    "password": "pass@123"
};
var submitForm = function (arg) {
    console.log(arg.user);
    console.log(arg.password);
};
submitForm(credential);
