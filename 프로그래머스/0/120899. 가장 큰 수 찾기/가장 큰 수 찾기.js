const solution=(array)=>{
    let max=array[0];
    let max_index=0;
    for(i in array)
        if(array[i]>max){
            max=array[i];
            max_index=i;
        }
    return [max,parseInt(max_index)];
}
