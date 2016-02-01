'use strict';

var recevie = function recevie() {
  var complete = arguments.length <= 0 || arguments[0] === undefined ? function () {
    return console.log('finished!');
  } : arguments[0];
  return complete();
};

recevie();