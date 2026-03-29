const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
  return a - b
	
};

const sum = function(arr) {
  let sum = 0

  if (arr.length === 0){
    return 0
  }
  else {
    for (let i = 0; i < arr.length; i++){

      sum += arr[i]
  }
  }
	return sum
};

const multiply = function(arr) {
  res = arr.reduce((a, b) => a*b, 1)
  return res
  };

const power = function(a, b) {
  return a ** b 
	
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
