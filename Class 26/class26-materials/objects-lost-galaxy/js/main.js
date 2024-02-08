//Create a pizza object that has four properties and three methods

function MakePizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaPrice) {
  (this.size = pizzaSize)((this.crust = pizzaCrust))((this.sauce = pizzaSauce))(
    (this.price = pizzaPrice)
  );
}
