const sumAll = function(min,max) {
    if(!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    else if(min<0 || max<0) return "ERROR";
    else{
        if(max<min){
            let temp=min;
            min=max;
            max=temp;
        }
        let ans=0
        for(let i=min;i<=max;i++){
            ans+=i;
        }
        return ans;
    }
};

// Do not edit below this line
module.exports = sumAll;
