import { browser, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";

class FindCrickets {
    // using then function

    static getCricketsWord() {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.google.com/");
        browser.switchTo().activeElement().sendKeys("cricket", protractor.Key.ENTER);
        let crickets = element.all(by.xpath("//*[contains(text(),'cricket') or contains(text(),'Cricket')]"))
        crickets.count().then(count => {
            console.log(count);
        })
    }

    // using async/await
    // static async getCricketsWord() {
    //     await browser.waitForAngularEnabled(false);
    //     await browser.get("https://www.google.com/");
    //     await browser.switchTo().activeElement().sendKeys("cricket", protractor.Key.ENTER);
    //     let crickets = element.all(by.xpath("//*[contains(text(),'cricket') or contains(text(),'Cricket')]"))
    //     let count = await crickets.count();
    //     console.log(count);
    // }
}
// ES6 modules export syntax
const _FindCrickets = FindCrickets;
export { _FindCrickets as FindCrickets };