import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const Pet2 = () => {
  const [pet, setPet] = useLocalStorage("key1");

  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    const name = event.currentTarget.dataset.pet!;
    setPet(name);
  }

  return (
    <div>
      <p> favorite = {pet}</p>
      <button data-pet="cat" data-color="ginger" onClick={onClick}> cat</button>
      <button data-pet="dog" data-color="white" onClick={onClick}> dog</button>
    </div>
  );
};
