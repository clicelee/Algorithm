const solution=(A,B)=>{
    A.sort((a,b)=>a-b); //오름차순 정렬
    B.sort((a,b)=>b-a); //내림차순 정렬
    let answer=0;
    for(let i=0; i<A.length; i++) answer+=A[i]*B[i];
    return answer;
}