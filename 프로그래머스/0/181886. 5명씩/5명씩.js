const solution=(names)=>{
    let answer=[];
    for(i=0;i<Math.ceil(names.length/5);i++)
        answer.push(names[0+5*i]);
    return answer;
}