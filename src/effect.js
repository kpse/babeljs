import {Observable} from 'rxjs/Rx'

// Observable.timer(0, 1000)
//   .map(i => `Seconds elapsed ${i}`)
//   // Effects (imperative)
//   .subscribe(text => {
//     const container = document.querySelector('#app');
//     container.textContent = text;
//   });


function main() {
  return {
    DOM: Observable
      .timer(0, 1000)
      .map(i => `Seconds elapsed ${i}`),
    Log: Observable
      .timer(0, 1000)
      .map(i => `Seconds elapsed ${i}`)
  }
}

function DOMEffect(events) {
  events.DOM.subscribe(text => {
    const container = document.querySelector('#app');
    container.textContent = text;
  });
}

function LogEffect(events) {
  events.Log.subscribe(text => {
    console.log(text);
  });
}

DOMEffect(main());
LogEffect(main());