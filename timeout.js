function doSomething(){
    console.log(33333);
}

console.log(22222);
//setTimeout(doSomething);
setTimeout(doSomething, 1000);
setTimeout(function(){
    console.log('lazy and waiting');
},4000)

setTimeout(() => {
    console.log('See you later.');
},4000)

//এখানে setInterval দিয়ে একটি কাজ বার বার করানো হয় এবং কাজটি চলতে থাকে
setInterval(function(){
    console.log('doing it');
})
setInterval(function(){
    console.log('doing it 1s');
},1000)
console.log(44444);
console.log(55555);
console.log(66666);
console.log(77777);
console.log(88888);