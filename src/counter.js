const counter  = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT' :
      return state + 1;
    case 'DECREMENT' :
      return state + 1;
    default :
      return state;
  }
};

console.log(counter(1, {type: 'INCREMENT'}));
console.log(counter(2, {type: 'DECREMENT'}));