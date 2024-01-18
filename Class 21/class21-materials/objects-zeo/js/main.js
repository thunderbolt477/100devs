//Create a stopwatch object that has four properties and three methods
let stopwatch = {
  currentTime: 0,
  watchColor: "black",
  watchButtons: 2,
  brand: "Nike",
  tellTime: function (currentTime) {
    console.log(`the current time is ${currentTime}`);
  },
  resetTime: function (currentTime) {
    currentTime = 0;
  },
  startTime: function () {
    console.log("START");
  },
};
