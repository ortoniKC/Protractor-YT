class Mobile {


    private modelname: string;
    public modelNumber: number;

    constructor(modelName: string, modelNumber: number) {
        this.modelNumber = modelNumber;
        this.modelname = modelName;
    }

    makeCall(): void {
        console.log("hey calling");
        // return "hey";
    }

}
const myMobile = new Mobile("oneplus", 6);
// console.log(myMobile.modelname);
myMobile.makeCall();
