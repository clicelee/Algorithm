const solution=(n)=>{
    let array=[];
    for(i=0; i<=(~~(n+1)/2)-1; i++)
        array[i]=i*2+1;
    return array;
} 