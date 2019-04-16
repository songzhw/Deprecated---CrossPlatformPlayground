import React, { useState } from "react";

export const FavoritePetScreen = () => {
  const [pet, setPet] = useState("");

  function onClick(name: string) {
    setPet(name);
  }

  return (
    <div>
      <p> favorite = {pet}</p>
      <button onClick={onClick.bind(self,"cat")}> cat</button>
      <button onClick={onClick.bind(self,"dog")}> dog</button>
    </div>
  );
};
