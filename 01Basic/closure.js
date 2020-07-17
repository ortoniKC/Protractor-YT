function getAge(){ // outer
    let age = 0; //new born baby
    // return ++age;
    return ()=>{ //inner
        return ++age;
    }
}

let a = getAge()
console.log(getAge()());
console.log(getAge()());

// console.log(a());
// console.log(a());
// console.log(a());






// console.log(getAge());
// // --age;
// console.log(getAge());

