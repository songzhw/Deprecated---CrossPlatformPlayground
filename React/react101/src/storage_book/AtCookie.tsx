import React from "react";

export const AtCookieScreen = () => {

  function save1() {
    document.cookie = "name=songzhw";
  }

  function save2() {
    document.cookie = "name=xxx";
    document.cookie = "age=90";
  }

  function save3() {
    document.cookie = "token=3000;expires=31 Dec 8999 23:59:59 GMT; domain=localhost";
  }

  function deleteCookie(){
    document.cookie="token=3000; expires=01 Dec 1970 1:1:1 GMT"
  }

  return (
    <div>
      <button onClick={save1}>save</button>
      <button onClick={save2}>save multiple</button>
      <button onClick={save3}>save and settings</button>
      <button onClick={deleteCookie}>delete cookie</button>
    </div>
  );
};