const { browser, $$, $ } = require("protractor");

describe("Learn element.all - Filter", () => {

    beforeAll(async () => {
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.get("https://play.letcode.in/checkbox")
    });

    it("Find unselected checkbox", async () => {
        let checkBoxes = $$("input");
        console.log(await checkBoxes.count());
        let unchecked = checkBoxes.filter(async (ele, index) => {
            return await ele.isSelected() == false;
        });
        unchecked.each(async ele => {
            console.log(await ele.isSelected());
        })

    });




});
