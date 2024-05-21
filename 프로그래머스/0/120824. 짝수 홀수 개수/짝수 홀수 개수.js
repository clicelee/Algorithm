const solution=(array)=>{
    even=0; odd=0;
    for(i of array) if(i%2==0) even++;
    odd=array.length-even;
    var answer=[even, odd];
    return answer;
}