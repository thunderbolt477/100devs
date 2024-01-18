//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeFighter(
  fighterPower,
  fighterSpeed,
  fighterStamina,
  fighterSpecial
) {
  this.power = fighterPower;
  this.speed = fighterSpeed;
  this.health = fighterStamina;
  this.ability = fighterSpecial;
  this.heavyPunch = function () {
    let total = 3 * this.power;
    alert(`Swung for ${total} hp`);
  };
  this.mediumPunch = function () {
    let total = 2 * this.power;
    alert(`Swung for ${total} hp`);
  };
  this.lightPunch = function () {
    let total = 1 * this.power;
    alert(`Swung for ${total} hp`);
  };
}
