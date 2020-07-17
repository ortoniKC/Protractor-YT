import { browser } from "protractor"
// const driver = require("protractor")

describe('Interac with inputs', () => {

    beforeAll(async () => {
        driver.browser.get("https://play.letcode.in/edit")
        driver.browser.manage().window().maximize();
    })
    // afterEach(() => {
    //     driver.browser.sleep(3000);
    // })

    it('Enter first and last name', async () => {
        driver.element(driver.by.id("fullName"))
            .sendKeys("Koushik Chatterje");

        // element(by.id("")).sendKeys("")
    });
    it('Append and Tab', async () => {
        driver.element(driver.by.id("join"))
            .sendKeys("person", driver.protractor.Key.TAB);
    });
    it('Get the value', async () => {
        let getMe = driver.element(driver.by.id("getMe"))
        let value = await getMe.getAttribute("value");
        console.log(value);
    });
    it('Clear me', () => {
        driver.element(driver.by.id("clearMe"))
            .clear();
    })
    it('Confirm that edit field is disabled', async () => {
        let isEditable = await driver.element(driver.by.id("noEdit"))
            .isEnabled()
        console.log(isEditable);
        expect(isEditable).toBe(false)
    })
})