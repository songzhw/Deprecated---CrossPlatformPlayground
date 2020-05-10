export class Car {
}

// @ts-ignore
Car.schema = {
  name: "Car",
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: "string",
    miles: {type: "int", default: 0}
  }
};

export class Owner {
}

// @ts-ignore
Owner.schema = {
  name: "Owner",
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: "string",
    cars: "Car[]",
    avatar: "data?"
  }
};
