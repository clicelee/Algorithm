/* my solution */
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

/*better solution */
function solution(a, b) {
    let n = 1;
    for (let i = 1; i <= Math.min(a,b); i++) {
        if (a%i===0 && b%i===0) n = i;
    }
    b/=n;
    while (b%2===0) b/=2;
    while (b%5===0) b/=5;

    return b === 1 ? 1 : 2;   
}


/* other solution */

function solution(a, b) => Number((a/b).toFixed(10)) == a/b ? 1 : 2

// a/b를 소수로 변환하고 소수점 이하 10자리까지 반올림 (`toFixed(10)`)
// 반올림한 값과 원래 값을 비교
// 동일하면 유한소수로 간주하여 1 반환
// 다르면 무한소수로 간주하여 2 반환
