const solution=(array, height)=>{
    count=0;
    for(i of array) 
        if(height<i){
            count++;
        }
    return count;
}