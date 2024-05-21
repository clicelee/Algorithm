const solution=(array, n)=>{
    let count=0;
    for(i of array)
        if(i==n) count++;
    return count;
}