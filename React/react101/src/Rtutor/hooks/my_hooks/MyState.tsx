import React from "react";

function parent() {
  let _val: any;

  return {
    myState(initState: any) {
      _val = _val || initState;

      function setValue(value: any) {
        _val = value;
      }

      return [_val, setValue];
    }
  };
}

export const MyReact = parent();
// ========================================