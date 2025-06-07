const fibonacci = function(a) {
    if(!Number.isInteger(a)) a=Number(a);
    if(a<0) return "OOPS";
    if(a===0) return 0;
    else{
        let first=1;
        let second=0;
        for(let i=2;i<=a;i++){
            let next=first+second;
            second=first;
            first=next;
        }
        return first;
    }
};

// Do not edit below this line
module.exports = fibonacci;
