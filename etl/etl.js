export const transform = oldData => {
  let result = Object.entries(oldData).reduce((newData, [point, letters]) => {
    letters.forEach(letter => {
      newData[letter.toLowerCase()] = Number(point);
    });
    return newData;
  }, {});

  return result;
};
