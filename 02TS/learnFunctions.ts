export { } // no need to worried about it (will discuss in upcoming videos)
function add(num1: number, num2: number): number;
function add(a: string, b?: string): string;
function add(a: any, b: any): any {
    if (b) {
        return a + b
    } else return a
}
console.log(add(1, 2));
console.log(add("k", "c"));