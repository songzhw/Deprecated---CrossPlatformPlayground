// localstorage的k,v都只能为string
import { useState } from "react";
import { PetCombination } from "./FavoritePetScreen";

export function useLocalStorage(key: string): PetCombination {
  const defaultPet = localStorage.getItem(key) ? localStorage.getItem(key)! : "";
  const [pet, setPet] = useState<string>(defaultPet);

  function setFavoritePet(favPet: string) {
    setPet(favPet);
    localStorage.setItem(key, favPet);
  }

  return [pet, setFavoritePet];
}
