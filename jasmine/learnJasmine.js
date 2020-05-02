let add = (a, b) => a + b;


let sub = (a, b) => a - b;

describe('Calculator', () => { // suite
    beforeAll(() => {
        console.log("I must run only once");
    })
    afterAll(() => { // AfterSuite
        console.log("I must run only once after");
    })
    beforeEach(() => { // beforeMethod
        console.log("I m before every spec");
    })
    afterEach(() => {
        console.log("I m after every spec");
    })

    fit('Add 2 numbers', () => { // @test
        expect(add(1, 2)).not.toBe(4)
        // console.log(add(10, 25));
    })
    xit('Sub 2 numbers', () => {
        console.log(sub(10, 25));
    })
    it('add numbers', () => {
        console.log(add(1, 2));
    })

})














// function add(a, b) {
//     return a+b
// }