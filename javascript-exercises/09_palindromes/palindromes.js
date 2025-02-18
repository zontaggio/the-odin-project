const palindromes = function (string) {
    // let withoutSpaces = string.replaceAll(" ", "");
    let withoutSpaces = string.replace(/[^a-zA-Z0-9]+/g, '');
    let reversedString = withoutSpaces.toLowerCase().split("").reverse().join("");
    return(reversedString === withoutSpaces.toLowerCase());
};

// Do not edit below this line
module.exports = palindromes;
