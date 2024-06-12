class Car {
  constructor(model, make, year) {
    this._model = model;
    this._make = make;
    this._year = year;
  }
  get model() {
    return this._model;
  }
  get make() {
    return this._make;
  }
  get year() {
    return this._year;
  }
  engineOn() {
    console.log(`${this._model} is on`);
  }
  engineOff() {
    console.log(`${this._model} is off`);
  }
}

class Nissan extends Car {
  constructor(make, model, year, transmission, fuelType) {
    super(make, model, year);
    this.transmission = transmission;
    this.fuel = fuelType;
  }
  ripIt() {
    console.log(`${this._model} go BRRRRRRR`);
  }
}

let r34 = new Nissan("Nissan", "Skyline", "1999", "manual", "ethanol");

// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
//     speak(){
//         console.log(`${this._name} makes a sound`)
//     }
// }
// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} barks`)
//     }
// }
// class Cat extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} meows`)
//     }
// }

// let simba = new Dog('Simba','Shepard')
// let machi = new Dog('The Machine','Pitbull')
// let salem = new Cat('Salem', 'American Shorthair')

// let farm = [simba,machi,salem]

// for( a of farm ){
//     a.speak()
// }
