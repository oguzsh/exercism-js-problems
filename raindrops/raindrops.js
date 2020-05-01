export const convert = (number) => {
  var output = "";
  number % 3 === 0 ? (output += "Pling") : null;
  number % 5 === 0 ? (output += "Plang") : null;
  number % 7 === 0 ? (output += "Plong") : null;

  return output + "" || number + "";
};
