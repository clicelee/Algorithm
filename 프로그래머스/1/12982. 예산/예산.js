const solution=(d, budget) => {
    let count=0;
    for(i of d.sort((a,b)=>a-b)){
        if(i<=budget){
            budget-=i;
            count++;
        }
        else break;
    }    
    return count;
}


/* better solution */
//reduce 사용하기
function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((count, price) => {
        return count + ((budget -= price) >= 0);
    }, 0);
}
