function Parent() {
  let value: any;

  function useMyState(initValue: any) {
    value = value || initValue;

    function setValue(newValue: any) {
      value = newValue;
    }

    return [value, setValue];
  }

  return { useMyState };
}

export const MyReact = Parent();
