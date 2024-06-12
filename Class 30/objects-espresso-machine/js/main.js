//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
  constructor(color, brand, model, price) {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.price = price;
    let on = false;
  }

  turnOn = function () {
    let on = true;
    alert("the water is poouring");
  };
  turnOff = function () {
    let on = false;
    alert("the water has stopped");
  };
  steam = function () {
    alert("steamer is on");
  };
}

let gaggia = new EspressoMachine("red", "Gaggia", "Classic Pro", 400);
