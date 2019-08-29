function Parent() {
  const valueList: any[] = [];
  let index = 0;

  // pseudo-code
  /*
  render(component){
    component.render();
    index = 0; // 不将index置0, 那就会无限++一直走下去了
  }
   */

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


