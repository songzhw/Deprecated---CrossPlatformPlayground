function Parent() {
  let value: any;

  function child(initValue: any) {
    value = value || initValue;

    function setValue(newValue: any) {
      value = newValue;
    }

    return [value, setValue];
  }

  return child;
}

export const useMyState = Parent();


