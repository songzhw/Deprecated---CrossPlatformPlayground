import React, { useState } from "react";

export const NetworkDemo = () => {
  const [image, setImage] = useState("");

  function onClick() {
    loadImage("http://i64.tinypic.com/2nkmiqg.jpg");
    // .then(src => {
    //   setImage(src);
    // });
  }

  function loadImage(uri: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.withCredentials = false;
      xhr.onreadystatechange = () => {
        console.log(xhr.response);
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
      <img src={image} width={720} height={1280} alt="loading" onLoad={onLoad}/>
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