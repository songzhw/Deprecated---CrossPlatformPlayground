export const CarSchema = {
  name: "Car",
  properties: {
    name: "string",
    miles: { type: "int", default: 0 }
  }
};

export const OwnerSchema = {
  name: "Owner",
  properties: {
    name: "string",
    cars: "Car[]",
    avatar: "data?"
  }
};
