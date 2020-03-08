export const reverseString = (text = "") => {
  let wordsArray = text.split("");
  let reverseWordArray = wordsArray.reverse();

  let word = "";
  reverseWordArray.forEach(element => {
    word = word + element;
  });

  return word;
};
