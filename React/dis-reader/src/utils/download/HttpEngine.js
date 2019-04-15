export const http = (url) => {
  return new Promise((resolve, reject) => {
    const url = "https://gerhardsletten.github.io/react-reader/files/alice.epub";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = () => {
      if (xhr.status && xhr.status < 400) {
        console.log(`szw got resposne : ${xhr.status}`);
        resolve(xhr.response);
      } else {
        console.log(`szw error on downloading : ${xhr.status}`);
        reject(new Error(`error ${xhr.status}`));
      }
    };
    xhr.send();
  });
};
