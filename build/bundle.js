/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n// abstract class Car {\n//   constructor(\n//     public model: string,\n//     protected founder: string = \"\",\n//     private year: number = 2016\n//   ) {}\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n//   speed(speed?: number) {\n//     if (speed) return `${speed} KM/H`;\n//     return `${this.year * 100} KM/H`;\n//   }\n//   set setFounder(getFounder: string) {\n//     this.founder = getFounder;\n//   }\n//   get getInfo() {\n//     return {\n//       year: this.year,\n//       model: this.model,\n//       founder: this.founder,\n//     };\n//   }\n//   // const myFoo: myF = foo(name: string)\n//   abstract foo(): number;\n//   testAbstarct(): number {\n//     const speed: number = this.foo();\n//     return speed * 10;\n//   }\n// }\n// class IranKhodro extends Car {\n//   constructor(public model: string, public speeder: number) {\n//     super(model);\n//   }\n//   run() {\n//     return this.founder;\n//   }\n//   foo() {\n//     return this.speeder;\n//   }\n// }\n// const newKhodro = new IranKhodro(\"DENA+\", 99).testAbstarct();\n// console.log(newKhodro);\n// class Car {\n//   static model: string = \"BMW1\";\n//   constructor(model: string) {\n//     Car.model = model;\n//   }\n//   showModel() {\n//     return Car.model;\n//   }\n//   static showModel() {\n//     return Car.model;\n//   }\n// }\n// console.log(Car.showModel());\n// class Car {\n//   readonly model: string;\n//   constructor(model: string) {\n//     this.model = model;\n//   }\n//   set changeModel(model: string) {}\n// }\n// const car1 = new Car(\"BMW\");\n// console.log(car1.model);\n//Singlton Design Pattern\n// class Car {\n//   private static instance: Car;\n//   private constructor(public model?: string, public newCar?: boolean) {}\n//   public static getInstance(): Car {\n//     // if (Car.instance) throw new Error(\"Instance Created Before\");\n//     if (!Car.instance) Car.instance = new Car();\n//     return Car.instance;\n//   }\n//   setProperties(model: string, newCar: boolean) {\n//     if (this.model || !!this.newCar) return;\n//     this.model = model;\n//     this.newCar = newCar;\n//   }\n// }\n// const car1 = Car.getInstance();\n// car1.setProperties(\"BMW\", false);\n// const car2 = Car.getInstance();\n// car2.setProperties(\"BMWwwww\", false);\n// console.log(car2);\n// class Car {\n//   private static instance: Car;\n//   private constructor() {}\n//   static getInstance(): Car {\n//     if (!Car.instance) Car.instance = new Car();\n//     return Car.instance;\n//   }\n// }\n// const car1 = Car.getInstance();\n// const car2 = Car.getInstance();\n// console.log(car1===car2)\n//interface\n// interface myObj {\n//   readonly name: string;\n//   age: number | null;\n//   [props: string]: string | number | null;\n// }\n// type myType = {\n//   readonly name?: string;\n//   age?: number | null;\n// };\n// function testInterFace(object: myObj) {\n//   return object.name;\n// }\n// const myObj = { name: \"obj\", age: null };\n//\n// interface Person {\n//   name: string;\n//   age: number;\n//   info(): string;\n// }\n// class Amin implements Person {\n//   constructor(public name: string, public age: number) {}\n//   info(): string {\n//     return this.name;\n//   }\n// }\n// class Parisa {}\n// class Mahmood {}\n// const newPerson: Person = new Amin(\"amin\", 21);\n// generic\n// function Test<T>(name: T[]): T[] {\n//   return name;\n// }\n// console.log(Test(['1', 2, 3, '4']));\n// interface myFInterface<T> {\n//   (data: T): unknown;\n// }\n// const myF: myFInterface<number> = (name: number): unknown => name;\n// interface myTest<T extends number | string> {\n//   name: T;\n//   age: T;\n//   // sayAge(): T;\n// }\n// const thisTest = (data: myTest<number>) => data.name;\n// console.log(thisTest({ name: 46, age: 56 }));\n// class Generic<T extends number | string> {\n//   constructor(public list: T[]) {}\n//   addItem(item: T): void {\n//     this.list.push(item);\n//   }\n//   getItem(index: number): T {\n//     return this.list[index];\n//   }\n// }\n// const genericTest = new Generic<number>([1, 2, 3, 4]);\n// genericTest.addItem(99991);\n// genericTest.addItem(9999);\n// console.log(genericTest.getItem(genericTest.list.length - 1));\n// class Generic<T extends number | string, U extends number | boolean> {\n//   constructor(public list: T[], protected age: U) {}\n// }\n// let genericFunc: <T extends number | string, U extends object | boolean>(\n//   name: T,\n//   age: U\n// ) => void = <T, U>(name: T, age: U): void => {\n//   console.log(name ,age);\n// };\n// console.log(genericFunc<number, boolean>(56, false));\n// decorators\n// function auth<T extends { new (...args: any[]): any }>(constructor: T) {\n//   return class extends constructor {\n//     auth = false;\n//   };\n// }\n// @auth\n// class User {\n//   name = \"amin\";\n// }\n// const user1 = new User();\n// console.log(user1);\n// multi decorator\n// function first<T extends { new (...args: any[]): any }>(constructor: T) {\n//   console.log(\"constructor firstProperty\", constructor);\n//   // console.log(\"constructor firstProperty\");\n//   return class extends constructor {\n//     property = \"First Property\";\n//   };\n// }\n// function second<T extends { new (...args: any[]): any }>(constructor: T) {\n//   // console.log(\"constructor secondroperty\", constructor);\n//   return class extends constructor {\n//     property = \"Second Property\";\n//   };\n// }\n// @first\n// @second\n// class User {\n//   name = \"amin\";\n// }\n// const user1 = new User();\n// console.log(user1);\n//decorator factory\n// class decorators and send parameters\n// function decoratorsFactory(param: boolean) {\n//   return function auth<T extends { new (...args: any[]): any }>(constructor: T) {\n//     // console.log(\"constructor secondroperty\", constructor);\n//     return class extends constructor {\n//       property = \"Second Property\";\n//       auth = param;\n//     };\n//   };\n// }\n// @decoratorsFactory(false)\n// class User {\n//   name = \"amin\";\n// }\n// const user1 = new User();\n// console.log(user1);\n// mehod decarator - decorator factory\n// function changable(value:boolean) {\n//   return function(target:any, propertyKey: any, descriptor: PropertyDescriptor) {\n//     console.log(target, propertyKey, target[propertyKey])\n//     !value ? descriptor.writable = false :  descriptor.writable = true;\n//   }\n// }\n// class User {\n//   private name = \"amin\";\n//   // constructor(private name: string) {}\n//   @changable(false)\n//   getUserName() {\n//     return this.name;\n//   }\n// }\n// const myUser = new User();\n// myUser.getUserName = () => \"TEST\";\n// console.log(myUser.getUserName());\n// property decorator and parameter decorator\n// function emoji(){\n//   return function(target:any, key: string | symbol) {\n//     let val = target[key]\n//     Object.defineProperty(target, key, {\n//       get: ()=> val,\n//       set: (newValue)=> {\n//         val = newValue\n//       },\n//       configurable: true,\n//       enumerable:true\n//     })\n//   }\n// }\n// function log(target:Object, methodKey: string | symbol, parameterIndex: number) {\n//   console.log(target, methodKey, parameterIndex)\n// }\n// class IceCream {\n//   @emoji()\n//   flavor = 'vanilla'\n//   getInfo(@log name: string){}\n// }\n// const myIceCream = new IceCream();\n// // console.log(myIceCream.flavor)\n// console.log(myIceCream.getInfo('amin'));\n// module - webpack\nconst myModule_1 = __importDefault(__webpack_require__(/*! ./myModule */ \"./src/myModule.ts\"));\nmyModule_1.default.say('Hello Aminea');\n\n\n//# sourceURL=webpack://ts/./src/main.ts?");

/***/ }),

/***/ "./src/myModule.ts":
/*!*************************!*\
  !*** ./src/myModule.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass sayHi {\n    say(message) {\n        console.log(message);\n    }\n}\nexports[\"default\"] = new sayHi();\n\n\n//# sourceURL=webpack://ts/./src/myModule.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;