const net = new brain.NeuralNetwork(); // create neural network

const data = [
  { input: { r: 0, g: 0, b: 0 }, output: [1] },
  { input: { r: 1, g: 1, b: 1 }, output: [0] },
  {
    input: {
      r: 0.7340696815022514,
      g: 0.6951114669475011,
      b: 0.976769320704352,
    },
    output: [0],
  },
  {
    input: {
      r: 0.2999792132541974,
      g: 0.5290872090061283,
      b: 0.8698971369463189,
    },
    output: [1],
  },
  {
    input: {
      r: 0.07149938287001611,
      g: 0.059009762436241786,
      b: 0.34347966812638586,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8870242516880043,
      g: 0.29687606961310786,
      b: 0.9500524234661158,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8519309038215974,
      g: 0.7149092695523926,
      b: 0.17752197404898462,
    },
    output: [0],
  },
  {
    input: {
      r: 0.07356495067362512,
      g: 0.6193409716544025,
      b: 0.916695285102453,
    },
    output: [0],
  },
  {
    input: {
      r: 0.47298324723123897,
      g: 0.8106413317138792,
      b: 0.3397078366907784,
    },
    output: [0],
  },
  {
    input: {
      r: 0.38545155332684633,
      g: 0.32632701463049885,
      b: 0.7755188903222909,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4008692445301736,
      g: 0.18034715123270217,
      b: 0.2871477609565336,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5426977785676925,
      g: 0.4186131545700611,
      b: 0.23665617281410634,
    },
    output: [0],
  },
  {
    input: {
      r: 0.0492842621798355,
      g: 0.6749228969260641,
      b: 0.4597040219034776,
    },
    output: [0],
  },
  {
    input: {
      r: 0.22740267374312828,
      g: 0.44099214649189244,
      b: 0.3007882869924341,
    },
    output: [1],
  },
  {
    input: {
      r: 0.578617294211595,
      g: 0.7233217209791658,
      b: 0.056534187611415154,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9346714429928056,
      g: 0.9248957699058897,
      b: 0.9068373346911223,
    },
    output: [0],
  },
  {
    input: {
      r: 0.57471294317637,
      g: 0.0764003286764956,
      b: 0.9190989043068745,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4097147659186182,
      g: 0.6739064674700499,
      b: 0.11692498323210154,
    },
    output: [0],
  },
  {
    input: {
      r: 0.30445308862731,
      g: 0.9552151876340638,
      b: 0.5467891928317694,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5557539394199551,
      g: 0.001659396023125037,
      b: 0.16366227334334615,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5035960270956454,
      g: 0.7308079088543351,
      b: 0.21558523774198135,
    },
    output: [0],
  },
  {
    input: {
      r: 0.430254683836778,
      g: 0.45478358002069585,
      b: 0.9394346374162796,
    },
    output: [0],
  },
  {
    input: {
      r: 0.522880435821717,
      g: 0.9202605030509126,
      b: 0.7881363218443014,
    },
    output: [0],
  },
  {
    input: { r: 0.557023486494431, g: 0.3213645318147349, b: 0.51829377955333 },
    output: [1],
  },
  {
    input: {
      r: 0.5270380154280006,
      g: 0.9402589737180658,
      b: 0.651578523485767,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8487944077708838,
      g: 0.13421253760442609,
      b: 0.526126920073543,
    },
    output: [0],
  },
  {
    input: {
      r: 0.629184964101271,
      g: 0.7376499899923361,
      b: 0.9293272421573993,
    },
    output: [0],
  },
  {
    input: {
      r: 0.08601406553486135,
      g: 0.18613789430606564,
      b: 0.011257437644243362,
    },
    output: [1],
  },
  {
    input: {
      r: 0.15911913196647332,
      g: 0.3059812057928295,
      b: 0.7921287622884916,
    },
    output: [1],
  },
];

net.train(data);

const colorElement = document.getElementById("color");
const guessElement = document.getElementById("guess");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const printButton = document.getElementById("print-button");

let color;
setRandomColor();

whiteButton.addEventListener("click", () => chooseColor(1));

blackButton.addEventListener("click", () => chooseColor(0));

printButton.addEventListener("click", printData);

function chooseColor(value) {
  data.push({
    // add new user generated data to data array
    input: color,
    output: [value],
  });
  setRandomColor();
}

function printData() {
  // After user has generated data, hit "print" to print to console, then copy paste from there into data constant
  console.log(JSON.stringify(data));
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };

  const guess = net.run(color)[0]; // Run the random color 'color' thru ai

  guessElement.style.color = guess > 0.5 ? "#FFF" : "#000"; // If guess is greater than 0.5, set text color to white, else black
  colorElement.style.backgroundColor = `rgba(${color.r * 255}, ${
    color.g * 255
  }, ${color.b * 255})`; // Set background color to value
}
