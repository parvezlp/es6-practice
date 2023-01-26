const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5);
console.log(part);

const removed = nums.splice(2,5);
console.log(removed);
console.log(nums);


const nums1 = [1,2,3,4,5,6,7,8];
const removed1 = nums1.splice(2,5,30,40,50,60);
console.log(removed1);
console.log(nums1);


const together = nums1.join("")
console.log(together);