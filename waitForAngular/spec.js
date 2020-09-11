const { browser, element, by, $ } = require("protractor")
const data = require("../cred.json")
/**
 * Navigate from non-angular to angular
 * waitForAngularEnabled(false) -> for non-angular
 * waitForAngularEnabled(true) -> for angular
 */
describe("What is waitForAngularEnabled", () => {


    it("service-now", async () => {
        await browser.waitForAngularEnabled(false)
        await browser.get(data.url)
        await browser.switchTo().frame(0)
        await element(by.id("user_name")).sendKeys(data.user);
        await element(by.id("user_password")).sendKeys(data.pass);
        await element(by.id("sysverb_login")).click();
        await browser.waitForAngular()
    })


    it("Open google.com", async () => {
        console.log(await browser.waitForAngularEnabled())
        await browser.waitForAngularEnabled(false)
        await browser.get("https://in.godaddy.com/")
        await browser.waitForAngularEnabled(true)
        await browser.get("https://letcode.in/")
        console.log(await browser.waitForAngularEnabled())
    })


})