const sumAll = function(startNumber, endNumber) {

    let listBetweenNumbers = [];
    let sumValue = 0;

    if (startNumber < 0 || endNumber < 0 || typeof startNumber != "number" || typeof endNumber != "number") {
        return("ERROR")
    }

    if (startNumber > endNumber) {
        let swapVariable = startNumber;
        startNumber = endNumber;
        endNumber = swapVariable;
    }

    for (let i = startNumber; i <= endNumber; i++) {
        listBetweenNumbers.push(i);
    }

    for (let j = 0; j < listBetweenNumbers.length; j++) {
        sumValue += listBetweenNumbers[j];
    }

    return sumValue

};

// Do not edit below this line
module.exports = sumAll;
