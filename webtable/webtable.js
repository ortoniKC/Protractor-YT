const { browser, element, $ } = require("protractor")

describe('lets learn WebTable', () => {


    beforeAll(async () => {
        await browser.get("https://play.letcode.in/table");
    })
    it('table', async () => {
        let table = $("table#table tbody");
        let rows = table.$$("tr");
        rows.each((ele, i) => {
            let first = ele.$$("td").get(0);
            first.getText().then(t => {
                console.log(t)
            })
        })
        let count = await rows.count();
        console.log(count);
        expect(count).toBe(3);
        for (let i = 0; i < count; i++) {
            let firstTD = rows.get(i).$$("td");
            let firstData = firstTD.get(0);
            let text = await firstData.getText();
            if (text === "Yashwanth") {
                let checkBox = firstTD.last().$("input");
                await checkBox.click();
            }
        }
        await browser.sleep(5000);
    })
})