const repeatString = function(string, num) {

    let result = ""
    for (let i = 0; i < num; i++) {
        const err = "ERROR"
        if (num < 0) {
            console.log(err)
        }
        result += string
    }
    return result

};

// Do not edit below this line
module.exports = repeatString;
