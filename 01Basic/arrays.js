//Array
let fruits = ["apple", "mango", "grape", "cherry", "banana", "pineapple"]

let a = new Array(5)
console.log(a);
a.push(10)
a[0] = 5
a[2] = 7
console.log(a);



let numbers = [4, 3, 1, 0]
let newNumbers = numbers.map((num, index) => {
    return num +2
})
console.log(newNumbers);
let filtered = newNumbers.filter(val=> val < 4);
console.log(filtered);


let reduced = filtered.reduce((pre, curr)=>{
    return pre+curr
}, 10)
console.log(reduced);







// fruits.sort();
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);



// function predicate(fruit){
//     if(fruit === "mango"){
//         return true;
//     }
// }

// // mango
// // let found = fruits.find(fruit => fruit === "mango")
// let found = fruits.find(predicate)
// console.log(found);

// console.log(fruits.includes('apple'));
// console.log(fruits.indexOf('some'));

























// console.log(fruits.length);
// console.log(fruits[5]);
// console.log(fruits);
// fruits.forEach(eachFruit =>{
//     console.log(eachFruit);   
// });

// const numbers = [4,8,9,7,5,1]
// numbers.push(0, 10, 20, 30);
// console.log(numbers);
// console.log(numbers.pop())
// console.log(numbers);

// numbers.unshift(50)
// console.log(numbers);
// numbers.shift()
// console.log(numbers);

// numbers.fill(0, 1, 3)
// console.log(numbers);

// let newArr = numbers.concat(fruits, [0,0])
// console.log(newArr);

// console.log(fruits);
// // apple => mango
// console.log(fruits.join('=>'));
// console.log(typeof (numbers.join('=>')))










