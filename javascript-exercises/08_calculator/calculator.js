const add = function(n1, n2) {
	return (n1 + n2);
};

const subtract = function(n1, n2) {
	return (n1 - n2);
};

const sum = function(arr1) {
  let totalSum = 0;
	for (let i = 0; i < arr1.length; i++) {
    totalSum += arr1[i];
  }
  return totalSum;
};

const multiply = function(arr1) {
  let totalMultiply = 1;
	for (let i = 0; i < arr1.length; i++) {
    totalMultiply = totalMultiply * arr1[i]
  }
  return totalMultiply;
};

const power = function(n1, n2) {
  return (n1 ** n2);
};

const factorial = function(n1) {
  let factContainer = 1;
  if (n1 == 0) {
    return 1;
  } else {
    while (n1 != 0) {
      factContainer = factContainer * n1
      n1--
    }
    return factContainer;
  }
	
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
