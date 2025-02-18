const repeatString = function(string, num) {

    let repeatedString = ""

    for (let i = 0; i <= num - 1; i++) {
        repeatedString += string
    }

    if (num >= 0) {
        return repeatedString;
    } else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = repeatString;
