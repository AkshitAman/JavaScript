                 // Named export

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  // u have to use exports for even single function
  add,
  subtract,
  multiply,
};
