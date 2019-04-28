import React, { useEffect } from "react";

export const AtLocalStorageScreen = () => {

  function save1() {
    localStorage.setItem("lsx999", "111");
  }

  useEffect(() => {
    // does not work on Chrome
    window.addEventListener("storage", (ev: StorageEvent) => console.log(`szw storage event `));
  }, []);

  let read = localStorage.getItem("lsx999");
  read = read ? read : "(none)";

  return (
    <div>
      <p> value in LocalStorage : {read} </p>
      <button onClick={save1}>save</button>
    </div>
  );
};