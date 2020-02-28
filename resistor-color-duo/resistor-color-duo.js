export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

export const decodedValue = colors => {
  let resDigit = [];

  for (let i = 0; i < 2; i++) {
    let index = COLORS.indexOf(colors[i]);
    resDigit.push(index);
  }
  let number = resDigit.join("");
  return parseInt(number);
};
