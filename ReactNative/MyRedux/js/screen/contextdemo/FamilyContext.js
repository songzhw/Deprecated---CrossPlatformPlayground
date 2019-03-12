import React from "react";

const FamilyContext = React.createContext({});

export const FamilyProvider = FamilyContext.Provider;
export const FamilyConsumer = FamilyContext.Consumer;

function throttle(fn, intervalTime) {
  var isDoingIt = false;
  return function() {
    if (isDoingIt) return;

    isDoingIt = true;
    fn.apply(this, arguments);
    setTimeout(() => isDoingIt = false, intervalTime);
  };
}

// window.onresize = function() {
window.onresize = throttle(() => console.log(`resize`));