const convertToCelsius = function(num) {
  var res = (num - 32) * 5/9
  return parseFloat(res.toFixed(1))

};

const convertToFahrenheit = function(num) {
  var res = (num * 9/5 +32)
  return parseFloat(res.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
