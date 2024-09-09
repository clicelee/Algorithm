const solution = (s) => {
    let answer = [];
    
    for(i of [...s]){
        if(i==="(")
            answer.push(i);
        else{
            if(answer.length===0) return false;
            answer.pop(i);
        }
    }
    return (answer.length===0);
}