const add = function(a,b) {
  let ans=a+b;
  return ans;
};

const subtract = function(a,b) {
	let ans=a-b;
  return ans;
};

const sum = function(a) {
  let ans=0;
  for(let i=0;i<a.length;i++){
    ans+=a[i];
  }
  return ans;
};

const multiply = function(a) {
  let ans=1;
  for(let i=0;i<a.length;i++){
    ans*=a[i];
  }
  return ans;
};

const power = function(a,b) {
  return ans=Math.pow(a,b);
};

const factorial = function(a) {
  let ans=1;
  for(let i=2;i<=a;i++){
    ans*=i;
  }
  return ans;
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
