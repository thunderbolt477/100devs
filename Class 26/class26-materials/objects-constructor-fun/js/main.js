//Create a constructor with 4 properties and 3 methods
function MakePizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaPrice) {
  this.size = pizzaSize;
  this.crust = pizzaCrust;
  this.sauce = pizzaSauce;
  this.price = pizzaPrice;
  this.howMuch = function () {
    console.log(`It's ${this.price} today`);
  };
  this.jingle = () => {
    console.log("placeholder for a song");
  };
  this.whatSize = () => {
    console.log(`You ordered a ${this.size}.`);
  };
}

let pizza = new MakePizza("large", "thin", "red sauce", "$15.00");
