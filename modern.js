// // multiple ways to create an object
//
// // const o1 = new Object();
// // const o2 = Object.create();
// //
// // // object literal
// // const o3 = {};
// const hello = 'hello';
// exports.id = 'the exports object';
//
// const obj = {
//   p1: 2,
//   p2: 'hello',
//   // functions below
//   p3: function() {
//     console.log('p3', this)
//     // this is equal to the function
//   },
//   p4: () => {
//     console.log('p4', this)
//     // does not care who called it
//     // very handy for delayed executions: event listeners, event handlers
//   },
//   p5() {
//     console.log('p5', this)
//   },
//   // dynamic property
//   [hello]: 'test'
// }
//
//
// console.log(obj.p3());
// console.log(obj.p4());
// console.log(obj.p5());





// this.id = 'exports';
// this.answer = 42;
//
// // this is a regular function will point to its caller
// // settimeout will be the caller
// // this is a global call
// // setTimeout(function x() {
// //   console.log(this.answer);
// // }, 2000);
//
// // arrow function does not care about caller
// // for delayed execution
// setTimeout(() => {
//   console.log(this.answer);
// }, 2000);
//
//
// // template string
// const ts = `
//
//
//   ${ 40 = 2}
//   multiple
//   line
//   string
// `;
//
// console.log(ts);

// class Person {
//   f0() {
//
//   }
// }

// class Student extends Person {
//   constructor(name) {
//     super();
//     // have to call if inheriting from another class AND customizing constructors
//     // i am a new class and inheriting from another class
//     this.id = Math.random();
//     this.name = name;
//   }
//
//   // shared function
//   f1() {
//     console.log('Name is ${this.name}');
//   }
// }
//
// const student1 = new Student("Max");
// const student2 = new Student("John");
//
// student2.f2 = function() {
//   // instance function
// }
//
// student1.f1();


// previously you had to have constructors/prototype
// a prototype function is a shared function


// node signature
// const delay = (delayInSeconds, callback) => {
//   setTimeout(callback, delayInSeconds * 1000);
// }

// node promise
const delay = (delayInSeconds, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve();
    }, delayInSeconds * 1000);

  })
}

// delay(2, () => {
//   console.log('Hello');
// })
//
// delay(2)
//   .then(() => {
//     console.log('Hello Promises');
//   })

// async
// this part isn't working
// might be an issue with different node versions
// i was using 6.x
// Samer used 9.x
const doThis = async () => {
  const result = await delay(2);
  console.log("hello aync/await", result);
}

doThis();


// eslint
// prettier
