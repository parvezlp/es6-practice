const number = [3,4,5,6,7,8];
const output = [];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const result = element * element;
    output.push(result);
}
console.log(output);


// function square(element){
//     return element * element;
// }

//এখানে index হচ্ছে ‍array এর index দেখাবে এবং ‍array দিয়ে ‍‍সম্পূর্ণ ‍array দেখাবে
number.map(function(element){
    console.log(element);
})

number.map(function(element, index){
    console.log(element, index);
})

number.map(function(element, index, array){
    console.log(element, index, array);
})

//এখানে আমরা আগের ফাংশনের মতনও রিটার্ন করতে পারি
const result = number.map(function(element){
    return element * element;
})
console.log(result);

//এটা এভাবেও লিখা যায়
const result1 = number.map(x => x * x);
console.log(result1);

//Filter 
//ফিল্টার সবসময় অ্যারে রিটার্ন করে
const result3 = number.filter( x => x > 5 );
console.log(result3);

//ফাইন্ড শুধু ইলিমেন্ট টাই রিটার্ণ করে এবং
//যে ইলিমেন্টটা আগে পাবে সেটাই দেখাবে
const result4 = number.find( x => x > 5 );
console.log(result4);
