"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    // const imei: string = "asdasda154236"; // not possible
    function Mobile(modelName, modelNumber) {
        this.imei = "asdasda154236";
        this.modelNumber = modelNumber;
        this.modelname = modelName;
    }
    Mobile.prototype.makeCall = function () {
        var imei = "asdasda154236";
        // imei = "heu";
        console.log("hey calling");
        // return "hey";
    };
    return Mobile;
}());
exports.Mobile = Mobile;
// const myMobile = new Mobile("oneplus", 6);
// // console.log(myMobile.modelname);
// myMobile.makeCall();
// console.log(myMobile.imei)
// myMobile.imei = "some Value"
