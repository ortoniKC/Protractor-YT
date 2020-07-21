import { browser, element, by, $ } from "protractor";
import { protractor } from "protractor/built/ptor";
describe("Actions", () => {

    beforeAll(async () => {
        await browser.get("https://play.letcode.in/contextmenu");
    })

    it("Context or Right Click", async () => {

        let btn = $("app-context-menu button");
        btn.click()
        await browser.actions()
            .click(await btn.getWebElement(),
                protractor.Button.RIGHT)
            .perform();
        await element(by.xpath("//button[.='Click me']")).click();
        let alert = browser.switchTo().alert();
        console.log(await (await alert).getText());
        (await alert).accept();
    })
})