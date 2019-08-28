export function useMyState(initValue: any) {
  let value = initValue;

  function setValue(newValue: any) {
    value = newValue;
  }

  return [value, setValue];
}



