export const compute = (fStrand, sStrand) => {
  let errorCount = 0;
  // Error controls
  strandControl(fStrand, sStrand);

  fStrand = fStrand.split("");
  sStrand = sStrand.split("");

  fStrand.forEach((letter, index) => {
    letter !== sStrand[index] ? errorCount++ : errorCount;
  });

  return errorCount;
};

const strandControl = (fStrand, sStrand) => {
  if (fStrand === sStrand) return;
  if (fStrand === "") throw new Error("left strand must not be empty");
  else if (sStrand === "") throw new Error("right strand must not be empty");
  if (fStrand.length !== sStrand.length) {
    throw new Error("left and right strands must be of equal length");
  }
};
