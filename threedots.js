
//দুইটা এরেকে এক সাথে যোরা দেওয়া 
const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);

//এইভাবে এ্যারে লিখলে একটা হিজিবিজি অবস্থা তৈরি হয়
const allAges2 = [ages, ages2, 5, ages3];
console.log(allAges2);

// আমদেরকে এইভাবে ... দিয়ে লিখতে হবে।

const allAges3 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges3);



const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business,minister, sochib);
console.log(maximum);

//এইভাবে এ্যারে লিখলে রেজাল্ট দেখাবে না এট করার জন্যও আমাদের ... ব্যবহার করতে হবে।
const takaPoisa = [650,450,250];
//const maximum2 = Math.max(takaPoisa);
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);