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


require('./string_format')

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


require('./three_dots');


require('./object_method');


import * as mod from 'math/addition';

console.log(mod.sumTwo(1, 2));
console.log(mod.sumThree(1, 2, 3));
console.log(mod.sumThree(...[6, 7, 8]));

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

require('./loop');

require('./oct');


require('./collection');


import {Movie} from 'movie/movie'

let m = new Movie();

console.log(m.watch('ling ling qi'));

require('./reflect');
require('./counter');
require('./effect');

