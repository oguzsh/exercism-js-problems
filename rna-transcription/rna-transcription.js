export const toRna = (data = "") => {
  var dna_rna_complement = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };

  var rna_strands = "";
  for (var x in data) rna_strands += dna_rna_complement[data[x]];
  return rna_strands;
};
