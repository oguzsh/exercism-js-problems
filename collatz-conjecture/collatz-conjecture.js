export const steps = n => {
  // let i = 0; // process number
  let newValue = n; // value

  const isEven = x => (x % 2 == 0 ? true : false);
  const isOdd = x => (x != 0 ? true : false);

  if (newValue <= 0) {
    throw new Error("Only positive numbers are allowed");
  } else {
    for (var i = 0; newValue != 1; i++)
      if (isEven(newValue)) newValue = newValue / 2;
      else if (isOdd(newValue)) newValue = 3 * newValue + 1;
    //console.log(`${i}. ${newValue}`);
  }
  return i;
};
