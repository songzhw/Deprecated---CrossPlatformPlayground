let listenerFunc;
let handler = {};
let id = 1;

export function subscribe(obsv) {
  listenerFunc = obsv;
}

export function unsubscribe() {
  clearInterval(handler);
  handler = {};
  id = 1;
}

export function createNews() {
  handler = setInterval(() => {
    listenerFunc(id++);
  }, 1000);
}