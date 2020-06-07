class Mobile {

    constructor(brandName) {
        this.brandName = brandName;
    }
    is4gEnabled = true;

    makeCall() {
        console.log("Voice Call");
    }
    sendSmS() {
        console.log("Text SMS");
    }
}
class OnePlus extends Mobile {

    constructor(modelNumber, brandName) {
        super(brandName);
        this.modelNumber = modelNumber;
    }
    makeCall() { // override
        super.makeCall()
        console.log("Voice Call & Video Call");
    }
    videoCall() {
        console.log("Video call");
    }
    zenMode() {
        console.log("maintain work life balance");
    }

}

const oneplus = new OnePlus("8", "OnePlus");
console.log(oneplus.brandName);
console.log(oneplus.modelNumber);
console.log(oneplus.is4gEnabled);


class SamSung extends OnePlus {

}

// oneplus.makeCall();
// oneplus.zenMode()

// const myMobile = new Mobile();
// myMobile.
