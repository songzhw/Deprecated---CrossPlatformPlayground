// 能否有两个useEffect() : 可以
// setState(value, callback) : 要用useEffect()来实现. 若不想componentDidMount()时被调用, 就加个if-else判断就好.

import React, { useEffect, useState } from "react";

export const HooksPitfall01 = () => {
  const [apple, setApple] = useState();
  const [banana, setBanana] = useState();

  useEffect(() => {
    if (apple === undefined) {
      return;
    }
    console.log(`useEffect(apple) : `, apple);
  }, [apple]);

  useEffect(() => {
    console.log(`useEffect(banana) : `, banana);
  }, [banana]);

  function onApple() {
    setApple("apple 02");
  }

  function onBanana() {
    setBanana("banana 02");
  }

  return (
    <div>
      <button onClick={onApple}> set apple</button>
      <button onClick={onBanana}> set banana</button>
    </div>
  );
};