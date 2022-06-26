// eslint-disable-next-line func-names
module.exports = function (date) {
  const newDate = new Date(date);
  return `${newDate.getHours()}:${newDate.getMinutes()}`;
};
