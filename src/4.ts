class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private keyObj: Key) {}
  getKey(): Key {
    return this.keyObj;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected keyObj: Key) {}

  comeIn(person: Person): void {
    if (this.door) this.tenants.push(person);
  }

  abstract openDoor(keyObj: Key): boolean;
}

class MyHouse extends House {
  openDoor(keyObj: Key) {
    if (keyObj.getSignature() !== this.keyObj.getSignature()) {
      return (this.door = true);
    }
    return (this.door = false);
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
