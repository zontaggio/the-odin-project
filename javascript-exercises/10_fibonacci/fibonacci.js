const fibonacci = function(numPosition) {

    let fiboContainer = [0, 1];
    let newFibo = [];

    if (numPosition < 0) {
        return("OOPS");
    }

    for (i = 0; i < numPosition - 1; i++) {
        newFibo = fiboContainer[i] + fiboContainer[i + 1];
        fiboContainer.push(newFibo);
    }

    fiboContainer.shift()
    return fiboContainer[numPosition - 1];
};

// Do not edit below this line
module.exports = fibonacci;
