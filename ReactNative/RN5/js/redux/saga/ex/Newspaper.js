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
  console.log(`szw newspaper createNews()`);
  handler = setInterval(() => {
    console.log(`szw newspaper: ${id}`);
    listenerFunc(id++);
  }, 1000);
}

export default { subscribe, unsubscribe, createNews };