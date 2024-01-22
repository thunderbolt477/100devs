//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function MakeSkater(skaterSponsor, skaterLeadFoot, skaterSpeed, skaterHealth) {
  this.sponsor = skaterSponsor;
  this.leadFoot = skaterLeadFoot;
  this.speed = skaterSpeed;
  this.health = skaterHealth;
  this.trick = () => {
    console.log("KICK FLIP BABY");
  };
  this.jump = () => {
    console.log("GETTING AIR");
  };
  this.getUp = () => {
    console.log("GETTING UP BAYBEEEE");
  };
}
