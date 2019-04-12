import React, { useState } from "react";

export const NetworkDemo = () => {
  const [image, setImage] = useState("");

  function onClick() {
    loadImage("http://192.168.2.64:3000/wlake.jpg")
      .then(src => {
        setImage(src);
      });
  }

  function loadImage(uri: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onreadystatechange = () => {
        const blob = xhr.response;
        if (blob != null) { // 发现这里会调用"null", "null", "blob(...)"数据几次, 不加这个if就会crash
          resolve(URL.createObjectURL(blob));
        }
      };
      xhr.open("GET", uri, true);
      xhr.send();
    });

  }

  function onLoad() {
    window.URL.revokeObjectURL(image);
  }


  return (
    <div>
      <button onClick={onClick}>download</button>
      <p> img = {image}  </p>
      <img src={image} width={690} height={460} alt="loading" onLoad={onLoad}/>
    </div>
  );
};

/*
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://avatars2.githubusercontent.com/u/4220799?v=3');
xhr.responseType = 'blob'; // 1

xhr.onload = function() {
  if (this.status == 200) {
      var img = document.createElement('img');
      img.src = window.URL.createObjectURL(this.response); // 2
      img.onload = function() {
          window.URL.revokeObjectURL(this.src); //3
      };
      document.body.appendChild(img);
  }
};
xhr.send();

 */