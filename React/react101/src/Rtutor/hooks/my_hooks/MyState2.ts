function Parent() {
  const valueList: any[] = [];
  let index = 0;

  function child(initValue: any) {
    valueList[index] = valueList[index] || initValue;

    function setValue(newValue: any) {
      valueList[index] = newValue;
    }

    return [valueList[index++], setValue];
  }

  return child;
}

export const useMyState2 = Parent();


