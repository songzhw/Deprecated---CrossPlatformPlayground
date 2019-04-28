import React, { useEffect } from "react";

export const AtLocalStorageScreen = () => {

  function save1() {
    localStorage.setItem("lsx999", "44");
  }

  useEffect(() => {
    // only works the data is changed in another tab
    window.addEventListener("storage", (ev: StorageEvent) => console.log(`szw storage event `, ev));
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