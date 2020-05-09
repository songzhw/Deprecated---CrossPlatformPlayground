export const CarSchema = {
  name: "Car",
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: "string",
    miles: {type: "int", default: 0}
  }
};

export const OwnerSchema = {
  name: "Owner",
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: "string",
    cars: "Car[]",
    avatar: "data?"
  }
};
