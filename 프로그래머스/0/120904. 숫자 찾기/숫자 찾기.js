const solution=(num,k)=>{
    let array=[...num.toString()];
    for(i in array){
        if(array[i]==k) 
            return Number(i)+1
    };
    return -1;
}