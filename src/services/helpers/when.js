module.exports = (leftOperand, operator, rightOperand, options) => {
  const operators = {
    eq(l, r) {
      return l === r;
    },
    noteq(l, r) {
      return l !== r;
    },
    gt(l, r) {
      return Number(l) > Number(r);
    },
    or(l, r) {
      return l || r;
    },
    and(l, r) {
      return l && r;
    },
    "%": (l, r) => l % r === 0,
  };
  const result = operators[operator](leftOperand, rightOperand);

  if (result) return options.fn(this);
  return options.inverse(this);
};
