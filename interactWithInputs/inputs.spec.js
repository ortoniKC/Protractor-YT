// import { browser } from "protractor"
const driver = require("protractor")

describe('Interac with inputs', () => {
    beforeAll(() => {
        driver.browser.get("https://letcode.in/edit")
        driver.browser.manage().window().maximize();
    })
    // afterEach(() => {
    //     driver.browser.sleep(3000);
    // })

    it('Enter first and last name', () => {
        driver.element(driver.by.id("fullName"))
            .sendKeys("Koushik Chatterje");

        // element(by.id("")).sendKeys("")
    });
    it('Append and Tab', () => {
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
        let isEditable = driver.element(driver.by.id("noEdit"))
            .isEnabled()
        console.log(await isEditable);
        expect(isEditable).toBe(false)
    })
})