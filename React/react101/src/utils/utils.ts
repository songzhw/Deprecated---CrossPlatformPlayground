// 类似Java中Thread.sleep(ms)的效果
export const delayAsync = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const delaySync = (ms: number) => {
  const end = new Date().getTime() + ms;
  while (new Date().getTime() < end) {
  }
};


export function updateState(state: any, updates: any) {
  if (state === null || typeof state !== "object") {
    // return @updates if there's no @state defined or @state is a simple type
    return updates;
  }

  const updatedState = {};
  let hasUpdates = false;

  // iterate recursively over @updates to check for changes and apply the updated sub state
  // tslint:disable-next-line:forin
  for (const key in updates) {
    const updatedValue = updateState(state[key], updates[key]);
    if (updatedValue !== state[key]) {
      // @ts-ignore
      updatedState[key] = updatedValue;
      hasUpdates = true;
    }
  }
  return hasUpdates
    ? Object.assign(state.constructor(), state, updatedState)
    : state;
}

// tslint:disable-next-line:ban-types
export function debounce(func: Function, wait: number, immediate = false) {
  let timeout: number | undefined;
  return function() {
    // @ts-ignore
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = undefined;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    // @ts-ignore
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}
