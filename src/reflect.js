console.log('reflect ========');

var Reflect = require('harmony-reflect');

let obj = {name: 'suoqin'};
let newVar = Reflect.get(obj, 'name');
console.log('reflect: name = ', newVar);

console.log('reflect ========');