import React from "react";
import { mix1, mix2 } from "./Middleman";
import obj2, { obj1 } from "./Target";

export function SingletonScreen() {

  function showMix1() {
    mix1();
  }

  function showMix2() {
    mix2();
  }

  function showOriginal() {
    console.log(`screen1 : `, obj1);
    console.log(`screen2 : `, obj2);
  }

  return (
    <div>
      <button onClick={showMix1}> mix 01</button>
      <button onClick={showMix2}> mix 02</button>
      <button onClick={showOriginal}> target = ?</button>
    </div>
  );
}
