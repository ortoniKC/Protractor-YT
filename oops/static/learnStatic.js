class Person {

    static age = 0;
    static getAge() {
        return ++this.age;
    }
}

console.log(Person.age);

console.log(Person.getAge());
console.log(Person.getAge());
console.log(Person.getAge());
console.log(Person.getAge());
console.log(Person.getAge());
// const person = new Person();
// console.log(person.getAge());
// console.log(person.getAge());
// console.log(person.getAge());
// console.log(person.getAge());
// console.log('-----------');

// const per1 = new Person();
// console.log(per1.getAge());
// console.log(per1.getAge());
// console.log(per1.getAge());
// console.log(per1.getAge());

