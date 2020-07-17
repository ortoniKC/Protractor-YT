const { browser, $$, $ } = require("protractor");

describe("Learn element.all - MAP", () => {

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.get("https://erail.in/trains-between-stations/mgr-chennai-ctr-MAS/ksr-bengaluru-SBC")
    })

    it("Print train numbers", async () => {
        await $("#chkSelectDateOnly").click();
        await browser.sleep(3000);
        let rows = $$("#divTrainsList .TrainList tr");
        let myTrainNumberMap = await rows.map(
            async (ele, index) => {
                let firstData = ele.$$('td').get(0);
                return {
                    "trainNumber": await firstData.getText(),
                    "index": index
                }
            }
        );
        console.log(myTrainNumberMap);
    })
    afterAll(async () => {
        browser.quit();
    })

});