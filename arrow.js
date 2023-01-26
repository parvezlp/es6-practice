// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

// ES6 Function সিংগেল লাইন ফাংশন
const doubleIt = num => num*2;
const result = doubleIt(50);
console.log(result);

//একাধিক প্যারামিটার থাকলে এইভাবে লেখা যায়
const add = (x,y) => x + y;
const addResult = add(50, 70);
console.log(addResult);

//কোন প্যারামিটার না থাকলে এইভাবে লিখতে হবে
const give5 = () => 5;
const result2 = give5();
console.log(result2);

//মাল্টিলাইন এরো ফাংশন লিখার নিয়ম
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result
}
const result3 = doMath(7, 5);
console.log(result3);
