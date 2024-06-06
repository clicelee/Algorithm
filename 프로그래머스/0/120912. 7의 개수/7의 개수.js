const solution=(array)=>{
    let concatArray=array.join('');
    return (concatArray.split('').filter((n)=>n==='7')).length;
}

