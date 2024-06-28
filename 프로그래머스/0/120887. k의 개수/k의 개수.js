const solution=(i, j, k)=>{
    let answer=0;
    for(i; i<=j; i++){
        for(let char of i.toString()){
            if(char===k.toString()) answer++;
        }
    }
    return answer;
}