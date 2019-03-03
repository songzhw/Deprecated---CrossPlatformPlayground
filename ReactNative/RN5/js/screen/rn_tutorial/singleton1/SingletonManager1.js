import { singleton1 } from "./Singleton1";

export class SingletonManager1 {
  modifySingleton() {
    singleton1.id = 200;
  }

  printSingleton() {
    console.log(`szw Mgr1 singleton = ${JSON.stringify(singleton1)}`);
  }
}