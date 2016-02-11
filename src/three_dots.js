console.log('three dots ... ========');

let first2 = [1, 2, 3];
let second = [4, 5, 6];

console.log(first2);
first2.push(second);
console.log(first2);
first2.push(...second);
console.log(first2);

console.log('three dots ... ========');