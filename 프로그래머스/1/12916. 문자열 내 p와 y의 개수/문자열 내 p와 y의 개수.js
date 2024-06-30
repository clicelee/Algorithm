const solution=(s)=>{
    let count=0;
    for(i of [...s]){
        if(i==='P'||i==='p') count++;
        else if(i==='Y'||i==='y') count--;
    }
    return count===0?true:false;
}

