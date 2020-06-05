class Mobile {

    constructor(pin) {
        this.#PIN = pin;
    }
    // constructor(pin, userName) {
    //     console.log(userName);
    //     this.#PIN = pin;
    // } not possible

    // Private method
    #makeCall() {
        console.log("hey calling!");
    }
    #PIN;
    openBankApplication() {
        if (this.#PIN == 1234) {
            console.log("Open app");
        } else if (this.#PIN != undefined) {
            console.log(typeof this.#PIN);
            console.log("Access denied");
        }
    }

}
const myMobile = new Mobile(124);
// myMobile.makeCall()

myMobile.openBankApplication();