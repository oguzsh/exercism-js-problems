export const gigasecond = startDate => {
  var startTime = startDate.getTime();
  var endDate = new Date(startTime + 1000000000000);
  return endDate;
};
