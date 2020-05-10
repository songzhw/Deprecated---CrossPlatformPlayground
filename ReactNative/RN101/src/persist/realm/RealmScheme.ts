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

/*
 本来是想在从DB中取到数据后, 不用 as any,
 但这在TypeScript里失败了. Realm对TS的支持很少
 下面的代码在使用 Realmopen({schema: [Car, Owner]})时会失败!!!

 import { ObjectClass, ObjectSchema } from "realm";

export class Car implements ObjectClass{
  schema: ObjectSchema;

  constructor() {
    this.schema = {
      name: "Car",
      primaryKey: 'id',
      properties: {
        id: 'int',
        name: "string",
        miles: {type: "int", default: 0}
      }
    };
  }
}


export class Owner implements ObjectClass{
  schema: ObjectSchema;

  constructor() {
    this.schema = {
      name: "Owner",
      primaryKey: 'id',
      properties: {
        id: 'int',
        name: "string",
        cars: "Car[]",
        avatar: "data?"
      }
    };
  }
}


 */
