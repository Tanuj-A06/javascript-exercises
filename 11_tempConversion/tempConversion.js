const convertToCelsius = function(a) {
  let ans=Math.round(((a-32)*(5/9)*10))/10;
  return ans;
};

const convertToFahrenheit = function(b) {
  let ans=Math.round((b*(9/5) + 32)*10)/10
  return ans;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
