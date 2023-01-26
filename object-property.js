

const student=[
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'Deepjol'}
];

// const stuName = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     stuName[i] = element.name;
// }

// console.log(stuName);

const names = student.map( s => s.name);
console.log(names);

const ids = student.map( s => s.id);
console.log(ids);

const bigger = student.filter( s => s.id > 40);
console.log(bigger);

const bigger1 = student.find( s => s.id > 40);
console.log(bigger1);