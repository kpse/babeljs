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


