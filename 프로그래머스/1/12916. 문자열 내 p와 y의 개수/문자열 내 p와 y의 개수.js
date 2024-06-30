const solution=(s)=>{
    let count=0;
    for(i of [...s]){
        if(i==='P'||i==='p') count++;
        else if(i==='Y'||i==='y') count--;
    }
    return count===0?true:false;
}


/*better solution */
// function solution=(s)=> s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
// x를 기준으로 나누었을때 조각과, y를 기준으로 나누었을떄 조각의 개수가 같다면, 둘의 개수는 같은것이다
