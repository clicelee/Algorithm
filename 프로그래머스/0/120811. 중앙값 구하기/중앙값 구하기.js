const solution=(array)=>{
    array.sort((a, b) => a - b);
    answer=array[~~((array.length)/2)];
    return answer;
}