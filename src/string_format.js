console.log('string format ========');

let hello = 'hello';
let world = `${hello} world`;

console.log(world);

function tag(strings, ...values) {
  let status = (values[0] < 21) ? "awake" : 'sleepy';

  return `${strings[0]}${values[0]}${strings[1]}${status}`
}

var message = tag`It's ${new Date().getHours()} I'm ${""}`;

console.log(message);

console.log('string format ========');