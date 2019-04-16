// localstorage的k,v都只能为string
import { useState } from "react";

export function useLocalStorage(key: string) {
  const [pet, setPet] = useState(localStorage.getItem(key));

  function setFavoritePet(favPet: string) {
    setPet(favPet);
    localStorage.setItem(key, favPet);
  }

  return [pet, setFavoritePet];
}
