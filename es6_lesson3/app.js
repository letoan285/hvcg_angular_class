// Arrow function.

// function getVal(){
//     return 'gaega';
// }

// const getVal = () => {
//     return 'gaegw'
// };
// function getName(){
//     let x = 4;
//     // return 'Toan';
//     // if(x > 2){
//     //     return 'Hieu'
//     // } else {
//     //     return 'Minh';
//     // }
//     return x > 4;
//     // if(x > 4){
//     //     return true;
//     // } else {
//     //     return false;
//     // }
// }

// if(getName()){
// console.log('True');
// } else {
//     console.log('false');
// }

// const getVal = x =>  (x + 8); // single line function

// class AAA {
//     getName = () => {

//     }
// }

// let xx = {
//     getName(){}
// }

//
// document.getElementById('root').addEventListener('click', () => {
//     alert('Thank for clicking me');
// });

// let arr = [22,30,4,5,16,8,9];
// let arr = [1,3,6];

//1. Map
// arr = arr.map((item) => item*3);
//2. Filter
// arr = arr.filter((item) => item % 2 !=0);
//3. Reduce
// arr = arr.reduce((acc, curr) => {
//     return acc+curr;
// }, 0)
//4. Sort
// arr.sort();
// arr.sort((a, b) => a - b);
// console.log(arr);

const person = {
    name: 'abc',
    members: ['hao', 'ly', 'van'],
    body: {
        name: 'body',
        color: 'yellow'
    },
    getRetire: function () {
        return 30 + 35;
    }
}

// const vietname = {
//     tinhThanh: [],
//     ten: 'vetiane'
// }

// factory function
// function myPerson (){
//     return {
//         name: 'Hoang Dung',
//         age: 40,
//         origin: 'Tau Khua'
//     }
// }

// console.log(myPerson());

// constructor
// PascalCase

// function Person (name, age, address){
//     console.log(this);
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.getName = function(){
//         return 'gaewgw'
//     }
// }

// let myPerson = new Person('Minh', 30, 'Hanoi');
// let myPerson1 = new Person('Son', 33, 'Hoang mai');
// myPerson;


// let x = getResult();

// let y = x;

/// < es6, callBack
// Promise, resolve, reject
// try {

// } catch (error) {

// }
// generator function --> hoc qua

// async/await

// getVal3(); // 2
// getVal1(); // 3
// getVal4(); // 4
// getVal2(); // 1

// function getVal1(){
//     setTimeout(() => {

//         console.log('Run 1');
//     })
// }

// function getVal2(){
//     console.log('Run 2');
// }

// function getVal3(){
//     setTimeout(() => {

//         console.log('Run 3');
//     }, 0)
// }

// function getVal4(){
//     setTimeout(() => {

//         console.log('Run 4');
//     }, 1000)
// }
// ``;
// const x = 'gagewg'
// console.log(`my name is ${x}`);

let products = [
    { id: 1, name: 'Product 1', price: 1200 },
    { id: 2, name: 'Product 2', price: 2400 }
];


function getProducts(products) {
    let output = '';
    products.forEach(product => {
        output += `<li>${product.id} - ${product.name} - ${product.price}</li>`;
    });

    document.getElementById('root').innerHTML = output;
}

function createProduct() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // products.push(product);
            resolve(products)
        }, 5000)
    })
    // setTimeout(() => {
    //     products.push(product); //
    //     callback(products); //
    // }, 2000);
}

// createProduct({ id: 3, name: 'Product 3', price: 9900 }, getProducts);

// getProducts(products);  callback hell
//2. Promise


// function getResult() {
//     return new Promise((resolve, reject) => {
//         const error = false;
//         if (!error) {
//             resolve({ id: 1, name: 'name 1' });
//         } else {
//             reject('Something wrong');
//         }
//     })
//     // const error = true;
//     // if(!error){
//     //     return Promise.resolve({id: 1, name: 'name 1'});
//     // } else {
//     //     return Promise.reject('Something wrong');
//     // }
// }
// getResult().then(response => {
//     console.log(response);
// }).catch(err => {
//     console.log(err)
// })

createProduct().then((res) => {
    res.push({ id: 3, name: 'Product 3', price: 9900 })
    getProducts(res);
}).catch(err => {
    console.log(err);
})

async function apiRequest(){
   return await fetch('http://165.22.103.200:8000/api/categories').then((res) => res.json());
    //  return http://165.22.103.200:8000/api/categories;

}

// getCategories().then(res => {
//     console.log(res.data);
// })

function getVal(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(9);

        }, 500);
    });
}

// async function getVal(){
//     let x = await 4 + 6;
//     return x;
// }
// DENO
// let x1 = getVal();
// let x = x1 + 1;
// console.log(x);

// let xxx = getVal();

// getVal().then(res => {
//     console.log(res+2);
// });

// getVal();


async function getTotal(){
    // return new Promise((resolve, reject) => {
    //     resolve(getVal());

    // })
    // return getVal().then((res) => {
    //     return res + 9;

    // })


    return  await getVal() + 12;
    // return rs + 9;
}

// let x = getTotal()
// log(x)
async function getCates(){
    return await apiRequest();
}

// getCates().then(....)

// Generator
function* getName(){
    console.log('done 1')
    yield {id: 1, name: 'name 1'};
    console.log('done 2');
}

let myGen = getName();
console.log(myGen.next().value);
// Redux-Saga, react-> redux

// NGRX, http angular