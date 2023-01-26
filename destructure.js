const person = {name: 'jack William', age: 17, Job:'facebooker', gfName: 'Ema Watson', address: 'Kochu Khet', phone: '01717112211', friends: ['Tom hancks', 'Tom cruise', 'Tom yarn']}
//const gfName = person.gfName;

//যখন কোন ভেরিয়েবল এর সাথে {} অবজেক্ট দিয়ে দেই তবে ও ভেরেয়েবল েএর মান হবে অবজেট এর প্রোপার্টি নাম
// const phone = person.phone;
const { phone, gfName } = person;
console.log(gfName, phone);
console.log(gfName, phone);
console.log(gfName, phone);
console.log(gfName, phone);
console.log(gfName, phone);


//নিচের অ্যারের প্রথম এলিমেন্ট টা নিবে
//এখানে ... এরপর যে নাম দিব সেই নামে বাকি ভেরিয়েবল গুলো পাওয়া যাবে।
const friends = ['Skib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Sharukh Khan']
const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(chotoFriend, nextFriend);
console.log(restFriends);


const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}

const {leader} = complexObject.info;
console.log(leader);