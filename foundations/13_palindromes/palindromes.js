const palindromes = function (str) {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    const rev = clean.split("").reverse().join("");

    return clean === rev

}

// Do not edit below this line
module.exports = palindromes;
