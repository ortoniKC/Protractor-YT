// import { browser, element, by } from "protractor"

describe('Why to use Protractor', ()=>{

    it('Super Calculator', async ()=>{
        browser.get("https://juliemr.github.io/protractor-demo/");
        element(by.xpath("//input[@ng-model='first']")).sendKeys("1")
        element(by.xpath("//input[@ng-model='second']")).sendKeys("2")
        element(by.id("gobutton")).click();
        let result  = await element(by.tagName("h2")).getText();
        console.log("The result is :"+result);
        
    })
})