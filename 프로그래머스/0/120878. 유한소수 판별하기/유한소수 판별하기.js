const solution=(a, b) => {
    let minimizedB=b/GCM(a,b);
    while (minimizedB % 2 <= 0) minimizedB /= 2;
    while (minimizedB % 5 <= 0) minimizedB /= 5;
    if(minimizedB === 1) return 1;
    else return 2;
}

const GCM = (num1, num2)=> {
    let aliquotNum1=getAliquot(num1); 
    for(j of aliquotNum1.reverse())
        if(num2%j===0) return j;
    return 1;
}

const getAliquot = (num) => {
    let aliquotNum = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            aliquotNum.push(i);
            if (i !== num / i) aliquotNum.push(num / i);
        }
    }
    return aliquotNum;
}