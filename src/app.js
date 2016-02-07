let recevie = (complete = () => console.log('finished!')) => complete();

recevie();

let [first,,,,fifth] = [1, 2, 3, 4, 5];

console.log(first, fifth);

let people = [
  {name: 'suoqin', email: 'suoqin@gmail.com'},
  {name: 'zhangjie', email: 'zhangjie@gmail.com'}

];

let [,zj] = people;

function logEmail({email}) {
  console.log(email);
}

logEmail(zj);


let hello = 'hello';
let world = `${hello} world`;

console.log(world);

function tag(strings, ...values) {
  let status = (values[0] < 21) ? "awake" : 'sleepy';

  return `${strings[0]}${values[0]}${strings[1]}${status}`
}

var message = tag`It's ${new Date().getHours()} I'm ${""}`;

console.log(message);

//import "babel-polyfill";
//function* greet() {
//  console.log(`you called 'next'`);
//  yield 'hello';
//}
//
//let greeter = greet();
//console.log(greeter);
//let next = greeter.next();
//console.log(next.value);

let firstName = 'John';
let lastName = 'Suo';

let person = {firstName, lastName};

console.log(person);

let mascot = "moose";

let team = {person, mascot};

console.log(team);


let first2 = [1, 2, 3];
let second = [4, 5, 6];

console.log(first2);
first2.push(second);
console.log(first2);
first2.push(...second);
console.log(first2);


var color = 'red';
var speed = 10;
var drive = 'go2';
var car = {
  color, speed,

  go() {
    console.log('vroom');
  },
  [drive]: function () {
    console.log('[drive]');
  }
};

console.log(car.color);
console.log(car.speed);

car.go();
car.go2();


import * as mod from 'math/addition';

console.log(mod.sumTwo(1, 2));
console.log(mod.sumThree(1, 2, 3));
console.log(mod.sumThree(...[6,7,8]));

const VALUE = 'foo bar';
//VALUE = 'other';
console.log(VALUE);


import Student from 'models/student'

let user = new Student('suoqin', 33);

console.log(user.name);
console.log(user._age);

import Person from 'models/person'


let user2 = new Person('suoqin2', 44, 'China');

console.log(user2.name);
console.log(user2.citizen);

let loopArray = [1,2,3,4,5];

for (var i of loopArray) {
  console.log(i, 'loopArray');
}
