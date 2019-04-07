import React, { useEffect } from "react";

export const MovieScreen: React.FunctionComponent = () => {

  useEffect(() => {
    fetch("https://www.mocky.io/v2/5caa5b8e3000001607904577")
      .then(response => {
        if (response.status !== 200) {
          console.error("response error : code = ", response.status);
          return;
        }

        response.json()
          .then(resp => console.log(resp));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div/>
  );
};