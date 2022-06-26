window.onload = function () {
  renderChart();
}

let initial = 1000;
let current = initial;
let numOfTrades = 0;
let points = [{x: 0, y: initial}];
let wins = 0;
let losses = 0;

let initialValue = document.getElementById("value");
let positive = document.getElementById("positive");
let negative = document.getElementById("negative");

let valueButton = document.getElementById("value-button");
let profitButton = document.getElementById("profit-button");
let lossButton = document.getElementById("loss-button");

let reset = document.getElementById("reset-button");

let winrate = document.getElementById("winrate");
let pnl = document.getElementById("pnl");
let trades = document.getElementById("trades");
let wl = document.getElementById("wl");

valueButton.addEventListener("click", () => {
  resetStats();
})

profitButton.addEventListener("click", () => {
  numOfTrades += 1;
  current += parseInt(positive.value);
  points.push({x: numOfTrades, y: current});
  wins += 1;
  updateStats();
  renderChart();
})

lossButton.addEventListener("click", () => {
  numOfTrades += 1;
  current -= parseInt(negative.value);
  points.push({x: numOfTrades, y: current});
  losses += 1;
  updateStats();
  renderChart();
})

reset.addEventListener("click", () => {
  resetStats();
  initialValue.value = 1000;
  positive.value = 3;
  negative.value = 2;
})

let resetStats = () => {
  initial = parseInt(initialValue.value);
  points = [{x: 0, y: initial}];
  numOfTrades = 0;
  current = initial;
  wins = 0;
  losses = 0;
  winrate.innerHTML = "00.00";
  pnl.innerHTML = "0%";
  trades.innerHTML = 0;
  wl.innerHTML = "0W / 0L";
  renderChart();
}

let renderChart = () => {
  var chart = new CanvasJS.Chart("chart", {
    animationEnabled: true,
    backgroundColor: "#202a2e",
    axisY: {
      minimum: initial,
      maximum: findMaxY(points),
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
  chart.render();
}

let findMaxY = (dataPoints) => {
  max = 0;
  for (let index = 0; index < dataPoints.length; index++) {
    const element = dataPoints[index];
    if(element["y"] > max) {
      max = element["y"];
    }
  }
  return max;
}

let updateStats = () => {
  winrate.innerHTML = ((wins/numOfTrades) * 100).toFixed(2);
  profits = (((current - initial) / initial) * 100).toFixed(2);

  if(profits >= 0) {
    pnl.innerHTML = "↑ " + profits + "%";
    pnl.style.color = "#449a84";
  }
  else {
    pnl.innerHTML = "↓ " + profits + "%";
    pnl.style.color = "#772f34"
  }

  trades.innerHTML = numOfTrades;
  wl.innerHTML = wins + "W / " + losses + "L"
}