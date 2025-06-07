const palindromes = function (a) {
    let ans=true;
    a=a.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    for(let i=0;i<a.length/2;i++){
        if(a[i]!=a[a.length-1-i]){
            ans=false;
            break;
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = palindromes;
