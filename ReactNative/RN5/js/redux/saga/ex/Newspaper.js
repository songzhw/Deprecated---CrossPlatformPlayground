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

  setTimeout(() => {
    clearInterval(handler);
    console.log(`szw newspaper finishes!`)
  }, 3333);

  /*
  // 这一段代码就会有问题, saga与reducer就收不到gkwr
  for (let i = 0; i < 100; i++) {
    listenerFunc(i);
  }
  */
}

export default { subscribe, unsubscribe, createNews };