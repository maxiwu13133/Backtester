window.onload = function () {
  chart.render();
}

let initial = 1000;
let numOfTrades = 0;
let points = [
  {x: 0, y: 1000},
  {x: 1, y: 1026},
  {x: 2, y: 1015},
  {x: 3, y: 1049},
  {x: 4, y: 1030},
  {x: 5, y: 1300},
  {x: 6, y: 1200},
  {x: 7, y: 1350},
  {x: 8, y: 1300},
  {x: 9, y: 1367},
  {x: 10, y: 1500},
]

var chart = new CanvasJS.Chart("chart", {
  animationEnabled: true,
  backgroundColor: "#202a2e",
  axisY: {
    minimum: initial,
    labelFontColor: "#8c9597",
    labelFontFamily: "Montserrat",
    labelFontSize: 15,
    valueFormatString: "#",
  },
  axisX: {
    minimum: 0,
    maximum: points.length - 1,
    gridThickness: 1,
    labelFontColor: "#8c9597",
    labelFontFamily: "Montserrat",
    labelFontSize: 15,
    valueFormatString: "0",
  },
  data: [{
    markerSize: 0,
    fillOpacity: 0.5,
    lineThickness: 3,
    type: "splineArea",
    dataPoints: points
  }]
});

let value = document.getElementById("value");
let profit = document.getElementById("profit");
let loss = document.getElementById("loss");

let valueButton = document.getElementById("value-button");
let profitButton = document.getElementById("profit-button");
let lossButton = document.getElementById("loss-button");

let winrate = document.getElementById("winrate");
let pnl = document.getElementById("pnl");
let trades = document.getElementById("trades");
let wl = document.getElementById("wl");

