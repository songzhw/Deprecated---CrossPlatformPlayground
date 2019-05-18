export const http = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "arraybuffer";
    xhr.onload = () => {
      if (xhr.status && xhr.status < 400) {
        console.log(`szw got status : ${xhr.status}`);
        console.log(`szw got resp = `, xhr.response);
        resolve(xhr.response);
      } else {
        console.log(`szw error on downloading : ${xhr.status}`);
        reject(new Error(`error ${xhr.status}`));
      }
    };
    xhr.onerror = (ev) => {
      console.log(`szw onerror`, ev);
    };
    xhr.open("GET", url, true);
    xhr.send(null);
  });
};
