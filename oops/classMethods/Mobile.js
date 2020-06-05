class Mobile {
    phoneModel = "OnePlus"
    #unlockPIN = 1234

    makeCall() {
        console.log("Calling someone...");
    }
    // sendSMS() {
    //     console.log("sending...");
    // } overloading is not possible

    sendSMS(phoneNumber) {
        console.log("sending..." + phoneNumber);
        console.log(some);
    }

    get getUnlockPIN() {
        return this.#unlockPIN;
    }

    set unlockPin(value) {
        this.#unlockPIN = value
    }
}
exports.MOB = Mobile;
const myMobile = new Mobile();
myMobile.sendSMS(99)
// const myMobile = new Mobile();
// myMobile.sendSMS(99)
// console.log(myMobile.phoneModel);
// console.log(myMobile.getUnlockPIN);
// myMobile.unlockPin = 4321
// console.log(myMobile.getUnlockPIN);

