abstract class Car {
  constructor(
    public model: string,
    protected founder: string = "",
    private year: number = 2016
  ) {}

  speed(speed?: number) {
    if (speed) return `${speed} KM/H`;
    return `${this.year * 100} KM/H`;
  }

  set setFounder(getFounder: string) {
    this.founder = getFounder;
  }

  get getInfo() {
    return {
      year: this.year,
      model: this.model,
      founder: this.founder,
    };
  }

  // const myFoo: myF = foo(name: string)

  abstract foo(): number;

  testAbstarct(): number {
    const speed: number = this.foo();
    return speed * 10;
  }
}

class IranKhodro extends Car {

  constructor(public model: string, public speeder: number) {
    super(model);
  }

  run() {
    return this.founder;
  }

  foo() {
    return this.speeder;
  }
}

const newKhodro = new IranKhodro("DENA+", 99).testAbstarct();

console.log(newKhodro);

class Car {
  static model: string = "BMW1";
  constructor(model: string) {
    Car.model = model;
  }

  showModel() {
    return Car.model;
  }

  static showModel() {
    return Car.model;
  }
}

console.log(Car.showModel());

class Car {
  readonly model: string;

  constructor(model: string) {
    this.model = model;
  }

  set changeModel(model: string) {}
}

const car1 = new Car("BMW");

console.log(car1.model);

// Singlton Design Pattern

class Car {
  private static instance: Car;
  private constructor(public model?: string, public newCar?: boolean) {}

  public static getInstance(): Car {
    // if (Car.instance) throw new Error("Instance Created Before");
    if (!Car.instance) Car.instance = new Car();

    return Car.instance;
  }

  setProperties(model: string, newCar: boolean) {
    if (this.model || !!this.newCar) return;
    this.model = model;
    this.newCar = newCar;
  }
}

const car1 = Car.getInstance();
car1.setProperties("BMW", false);

const car2 = Car.getInstance();
car2.setProperties("BMWwwww", false);

console.log(car2);

class Car {
  private static instance: Car;
  private constructor() {}

  static getInstance(): Car {
    if (!Car.instance) Car.instance = new Car();
    return Car.instance;
  }
}

const car1 = Car.getInstance();
const car2 = Car.getInstance();

console.log(car1===car2)

// interface

interface myObj {
  readonly name: string;
  age: number | null;
  [props: string]: string | number | null;
}

type myType = {
  readonly name?: string;
  age?: number | null;
};

function testInterFace(object: myObj) {
  return object.name;
}

const myObj = { name: "obj", age: null };



interface Person {
  name: string;
  age: number;
  info(): string;
}

class Amin implements Person {
  constructor(public name: string, public age: number) {}

  info(): string {
    return this.name;
  }
}

class Parisa {}

class Mahmood {}

const newPerson: Person = new Amin("amin", 21);

// Generic

function Test<T>(name: T[]): T[] {
  return name;
}

console.log(Test(['1', 2, 3, '4']));

interface myFInterface<T> {
  (data: T): unknown;
}

const myF: myFInterface<number> = (name: number): unknown => name;

interface myTest<T extends number | string> {
  name: T;
  age: T;
  // sayAge(): T;
}

const thisTest = (data: myTest<number>) => data.name;

console.log(thisTest({ name: 46, age: 56 }));

class Generic<T extends number | string> {
  constructor(public list: T[]) {}

  addItem(item: T): void {
    this.list.push(item);
  }

  getItem(index: number): T {
    return this.list[index];
  }
}

const genericTest = new Generic<number>([1, 2, 3, 4]);

genericTest.addItem(99991);
genericTest.addItem(9999);

console.log(genericTest.getItem(genericTest.list.length - 1));

class Generic<T extends number | string, U extends number | boolean> {
  constructor(public list: T[], protected age: U) {}
}

let genericFunc: <T extends number | string, U extends object | boolean>(
  name: T,
  age: U
) => void = <T, U>(name: T, age: U): void => {
  console.log(name ,age);
};

console.log(genericFunc<number, boolean>(56, false));

// decorators

function auth<T extends { new (...args: any[]): any }>(constructor: T) {
  return class extends constructor {
    auth = false;
  };
}

@auth
class User {
  name = "amin";
}

const user1 = new User();

console.log(user1);

// multi decorator

function first<T extends { new (...args: any[]): any }>(constructor: T) {
  console.log("constructor firstProperty", constructor);
  // console.log("constructor firstProperty");
  return class extends constructor {
    property = "First Property";
  };
}

function second<T extends { new (...args: any[]): any }>(constructor: T) {
  // console.log("constructor secondroperty", constructor);
  return class extends constructor {
    property = "Second Property";
  };
}

@first
@second
class User {
  name = "amin";
}

const user1 = new User();

console.log(user1);

// decorator factory
class decorators and send parameters

function decoratorsFactory(param: boolean) {
  return function auth<T extends { new (...args: any[]): any }>(constructor: T) {
    // console.log("constructor secondroperty", constructor);
    return class extends constructor {
      property = "Second Property";
      auth = param;
    };
  };
}

@decoratorsFactory(false)
class User {
  name = "amin";
}

const user1 = new User();

console.log(user1);

// mehod decarator - decorator factory

function changable(value:boolean) {
  return function(target:any, propertyKey: any, descriptor: PropertyDescriptor) {
    console.log(target, propertyKey, target[propertyKey])
    !value ? descriptor.writable = false :  descriptor.writable = true;
  }
}

class User {
  private name = "amin";
  // constructor(private name: string) {}

  @changable(false)
  getUserName() {
    return this.name;
  }
}

const myUser = new User();
myUser.getUserName = () => "TEST";
console.log(myUser.getUserName());


// property decorator and parameter decorator

function emoji(){
  return function(target:any, key: string | symbol) {
    let val = target[key]

    Object.defineProperty(target, key, {
      get: ()=> val,
      set: (newValue)=> {
        val = newValue
      },
      configurable: true,
      enumerable:true
    })
  }
}

function log(target:Object, methodKey: string | symbol, parameterIndex: number) {
  console.log(target, methodKey, parameterIndex)
}

class IceCream {

  @emoji()
  flavor = 'vanilla'

  getInfo(@log name: string){}
}

const myIceCream = new IceCream();

// console.log(myIceCream.flavor)
console.log(myIceCream.getInfo('amin'));

// module - webpack

import sayHi from './myModule';

sayHi.say('Hello Aminea')