export const isPangram = (text = "") => {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  let pangramStatus = true;

  text = text.toLowerCase().replace(/[^a-z]/g, "");

  for (var i = 0; i < letters.length; i++) {
    if (text.includes(letters[i]) === false) {
      pangramStatus = false;
    }
  }
  return pangramStatus;
};
