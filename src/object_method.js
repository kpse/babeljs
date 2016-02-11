console.log('object method ========');

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

console.log('object method ========');