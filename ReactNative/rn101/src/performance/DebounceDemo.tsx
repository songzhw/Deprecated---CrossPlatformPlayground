function debounce(func: Function, wait: number, immediate = false) {
  let timeout: number | undefined;
  return function() {
    // @ts-ignore
    var context = this, args = arguments;
    var later = function() {
      timeout = undefined;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    // @ts-ignore
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function work() {
  console.log(`work `, new Date());
}

console.log(`start `, new Date());
setTimeout(() => debounce(work, 1000)(), 500);
console.log(`end`, new Date());
