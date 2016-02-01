let recevie = (complete = () => console.log('finished!')) => complete();

recevie();

let [first,,,,fifth] = [1,2,3,4,5]

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
