const { browser, $$, element, by } = require("protractor")

describe("Validate sorting", () => {


    it("Tabel - CARB's", async () => {
        await browser.get("https://letcode.in/table");

        // find the table
        // store the data
        // sort the data
        // click the element to sort in UI
        // compare the data

        let mytable = $$('table').last()
        let rows = mytable.$$("tr")
        let myData = rows.map(async (ele, index) => {
            let data = ele.$$('td').get(0)
            return await data.getText()
        });
        console.log("Before sorting: " + await myData);
        (await myData).sort()
        console.log("After sorting: " + await myData);
        await element(by.xpath("//div[text()='Dessert (100g)']")).click();
        let aftrerSortedData = rows.map(async (ele, index) => {
            let data = ele.$$('td').get(0)
            return await data.getText()
        });
        console.log("After ele sort click: " + await aftrerSortedData);
        expect(await myData).toEqual(await aftrerSortedData)

    })
})
/**
 * Don't forget to like, share & subs to LetCode
 */