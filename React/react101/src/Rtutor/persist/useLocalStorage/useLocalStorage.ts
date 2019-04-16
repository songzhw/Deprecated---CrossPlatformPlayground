// localstorage的k,v都只能为string
import { useState } from "react";

export function useLocalStorage(key: string): [string, (pet: string) => void] {
  const defaultPet = localStorage.getItem(key) ? localStorage.getItem(key)! : "";
  const [pet, setPet] = useState<string>(defaultPet);

  function setFavoritePet(favPet: string) {
    setPet(favPet);
    localStorage.setItem(key, favPet);
  }

  return [pet, setFavoritePet];
}
