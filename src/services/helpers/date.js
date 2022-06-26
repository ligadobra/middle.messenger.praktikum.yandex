module.exports = function (date) {
  const newDate = new Date(date);
  return `${newDate.getHours()}:${newDate.getMinutes()}`;
};
