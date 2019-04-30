import obj2, { obj1 } from "./Target";

export const mix1 = () => {
  obj1.id = 100;
  obj1.name = "hyaku";
  console.log(obj1);
};

export const mix2 = () => {
  obj2.temp = -20;
  obj2.weather = "snow";
  console.log(obj2);
};


