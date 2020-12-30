// var x;
//1. hoisting


// var x;

// x = 2; // assign

// // var x = 2;
// console.log(x); // 2
// console.log(x);

// x = 4;
// console.log(x());

// var x = function (){
//     return 5;
// }

// RAM
// var x = 4;
// console.log(x); // tai sao stack co han, ma nguoi ta lai dung--?????

// data type
// data type trong javascript
// string, number(int, float, double), Map, boolean, object, array, undefined, null, symbol, function
//
// var x = 3;
// var y = x;
// y = 9;
// console.log(x);

// var xx = {name: 'Son'};

// var yy = xx;
// yy.name = 'Toan';

// console.log(xx);

// 1. string, number, boolean, undefined, null ---> Primitive type --> store in stack secment of the RAM
// 2. array, object, function ---> reference typev --> store in heap secment of RAM

// combile time vs run time khac gi nhau;

// ngon ngu thong dich, vs ngon ngu bien dich

// let x = {value: 2};

// let y = x;

// y.value = 99;

// console.log(x);

// var, --> let ,const
// let, const ko co hoisting

// console.log(x);

// var x = 9;
// used here
// cons

// const x;
// console.log(x);

// const x = 9; // ko duoc redeclare
// const x = 8; ko duoc re-assign

// const person = {name: 'Toan', age: 30};

// person.name = 'Hieu Ngo';

// console.log(person);

// scope (block of scope)

// nguoi thu 2
// let x = 0;
// var x = 0

// for(let x = 0; x < 5; x++){
//     console.log(x);
// }

// function getName(){
//     x = 6;
//     return x;
// }

// getName();


// console.log('what is value of x: ', x);

// var myPrice = x *0.9;  // === 0

// console.log(myPrice);


// bao toan cai object nay --> initalData
let product = {
    name: 'samsung',
    price: 2300,
    id: 1
}

// /// data/state management


function getProduct(product){
    return {
        ...product,
        name: 'Iphone',
        price: 9999
    }
}

let myProduct = getProduct(product);

// co gi khac nhau khong
console.log(myProduct);
console.log(product);

// bao toan data

// Object Destructuring

// let name = 'Son';

// const person = {
//     name: 'Toan',
//     age: 30,
//     address: 'Vietnam'
// };

// let name = person.name;
// let age = person.age;
// let address = person.address;

// let { name: myName, age, address } = person;

// let myName = person.myName; // undefine

// console.log(age, name);

// let name = 'toan';
// let age = 36;
// let address = 'Hanoi'; 
// const color = 'yellow';

// let data = {
//     name,
//     age,
//     myAddress: address,
//     color
// }

// console.log(data);
// const hanoi = [2000, 'Asean', 9000000, 'Good'];

// let age = hanoi[0];
// let myLocation = hanoi[1];
// let population = hanoi[2];
// let score = hanoi[3];

// placeholder---> eslint

// let [age, _, population] = hanoi;
// let isGood = hanoi[4];

// console.log(population);

// function getVal(_, age){
//     return age;
// }

// function myfun(){
//     let x = getVal(age);
// }

/// spread operator clone... (...rest operator)
// ...

// function Add(x, ...nums){
//     let total = 0;
//     console.log(x);
//     for(let x = 0; x < nums.length; x++){
//         total+=nums[x];
//     }
//     return total;
//     // return nums[0]+nums[1]+nums[2]+nums[3];
// }

// console.log(Add(1,2, 4, 7, 8,9));

// [1,2,3], [4,5,6] --> join
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];

// let arr = [...arr1, ...arr2, ...arr3];
// console.log(arr);

// let obj1 = {name: 'object 1', value: 30}
// let obj2 = {name: 'object 2', value: 60}

// let obj = {...obj1, ...obj2, address: 'Hanoi'}
// console.log(obj);

// Q and A
// String x = 'hello';

// var x = new String('Hello');
// let x = 4;
// {
//     console.log(x);
// }

// let name = 'gaega'

// import {name as myName } from 'gaegawg';
// select * from product as p where


// console.log(x);
// var x =0;


// {
//     console.log(x);
//     var x =0;

// }

/// arrow function

// getName();

// function getName(){
//     return 000;
// }


// const getname1 = () => {
//     return 000;
// }
// getname1();

const people = {
    name: 'Toan',
    getName(){
        setTimeout(() => {
            console.log(this);
        }, 1000)
    }
}

people.getName();