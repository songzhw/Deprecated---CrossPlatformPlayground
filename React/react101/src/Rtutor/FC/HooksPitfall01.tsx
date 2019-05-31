// 能否有两个useEffect()
// setState(value, callback) => ?

import React, { useEffect, useState } from "react";

export const HooksPitfall01 = () => {
  const [apple, setApple] = useState("a");
  const [banana, setBanana] = useState("b");

  useEffect(() => {
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
      <p></p>
    </div>
  );
};