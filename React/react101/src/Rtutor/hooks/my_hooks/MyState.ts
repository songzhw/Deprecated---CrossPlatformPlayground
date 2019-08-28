export function MyReact() {
  let value: any;

  function useMyState(initValue: any) {
    function setValue(newValue: any) {
      value = newValue;
    }

    return [value, setValue];
  }

  return useMyState;
}



