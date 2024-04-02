//Create an a class and extend it - Can be anything you would like it to be!
class Animal {
  constructor(name) {
    this.name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Cow extends Animal {
  constructor(name, breedingLocation, price) {
    super(name);
    this.location = breedingLocation;
    this.price = price;
  }
  speak() {
    console.log("moo");
  }
}

let tank = new Cow("Wagyu", "Kobe", "$$$$");
