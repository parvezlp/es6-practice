//যদি কোন key বা প্রপার্টি এর Value কোন ফাংশন হয়ে তবে তাকে Methode বলে।
//এখানে কোন ‍অবজেক্ট এর বিতরের কোন ফাংশনের মধ্যে ওই অবজেক্ট এর কোন প্রাপার্টি কল করতে চাই তবে this. দিয়ে প্রপার্টি কল করতে হবে।
//যদি  অবজেক্ট এর বাহির থেকে যদি অবজেক্ট এর কোন প্রপার্টি কল করতে চাই তবে ওই অবজেক্ট এর নামলিখে. এবং প্রপার্টি নাম লিখতে হবে।


const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    }, 
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

//console.log(normalPerson);
normalPerson.chargeBill(150);
console.log(normalPerson.salary);


//Bind
const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 25000
}
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
console.log(heroPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(5000);
console.log(friendlyPerson.salary);
// Bind End


//Call এটা দারা বাইন্ড ছাড়া ডাইরেকট কল করা যায়
//এখানে call এরমধ্যে যে ফাংশনের জন্য কল করাবো তার  নাম লিখতে হবে এবং , দিয়ে আরগুমেন্টগুলো লিখতে হবে
normalPerson.chargeBill.call(heroPerson, 900);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 3000);
console.log(friendlyPerson.salary);
//call end

//Apply and Call are same but array হিসাবে যাবে
normalPerson.chargeBill.apply(heroPerson, [3000])
console.log(heroPerson.salary);