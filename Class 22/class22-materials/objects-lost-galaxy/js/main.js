//Create a mouse object that has four properties and three methods
let mouse = {};

mouse.brand = "Logitech";
mouse.color = "black";
mouse.features = "side-buttons";
mouse.wireless = "true";

mouse.leftClick = function () {
  console.log("LEFT CLICK");
};

mouse.rightClick = function () {
  console.log("RIGHT CLICK");
};

mouse.scroll = function () {
  console.log("JUMP");
};
