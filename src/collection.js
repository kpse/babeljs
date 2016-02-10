console.log('collection ========');
let set1 = new Set();

set1.add({x: 12});
set1.add(44);
set1.add("text");

console.log(set1.has('text'));

set1.delete(44);

for (var i of set1) {
  console.log(i);
}

var set2 = new Set([1, 2, 3, 4]);
var set3 = new Set(set1);


console.log(set2.size);
console.log(set3);


let map1 = new Map();

map1.set({x: 12}, 12);

console.log(map1);

console.log(map1.has({x: 12}));

map1.set(11, 22);
map1.set(11, 33);

console.log(map1);

map1.delete(11);

console.log(map1);

map1.clear();

console.log(map1);


let map2 = new Map([[1,2],[3,4]]);

console.log(map2);

console.log('collection ========');