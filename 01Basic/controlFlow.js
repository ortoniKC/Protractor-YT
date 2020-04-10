let isEnabled = false
if (isEnabled == true) {
    console.log("type something");
} else {
    console.log("skip");
}
console.log("completed");

// if (browser === "chrome") {
//     console.log("Run in chrome");
// } else if (browser === "firefox") {
//     console.log("Run in FireFox");
// } else if (browser === "edge") {
//     console.log("Run in Edge");
// } else {
//     console.log(`${browser} is not available`);
// }
//switch

let browser = "opera"
switch (browser) {
    case "chrome":
        console.log("Run in chrome");
        break;
    case "firefox":
        console.log("Run in FireFox");
        break;
    case "edge":
        console.log("Run in Edge");
        break;
    default:
        console.log(`${browser} is not available`);
        break;
}

//Loops
// let fruits = ["apple", "mango", "grape", "cherry", "banana",
//     "pineapple"]
// let len = fruits.length;
// console.log(len);
// for(let i =0; i < len;++i){
//     console.log(fruits[i]);   
// }
// for (const iterator of fruits) {
//     console.log(iterator);
// }

let browsers = [
    {
        "name": "chrome",
        "version": 80
    },
    {
        "name": "firefox",
        "version": 75
    }
]
for (const iterator in browsers) {
    console.log(browsers[iterator]);
}





