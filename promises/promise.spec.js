// import { browser } from "protractor"

describe('Learn about Promises', () => {

    it('using async & await', async () => {
        browser.get("https://play.letcode.in/")
        console.log(await browser.getTitle());
    })

    // it('launch browser', () => {
    //     browser.get("https://play.letcode.in/")
    //         .then(() => {
    //             browser.getTitle()
    //                 .then(title => {
    //                     console.log(title);
    //                 })
    //             // console.log(browser.getTitle());
    //         })
    // })
})
// let title = browser.getTitle()
// console.log("Hey Im running after the title");
// console.log(title);