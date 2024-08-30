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