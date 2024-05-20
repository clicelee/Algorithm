const solution=(numbers)=>{
    sum=numbers[0];
    for(i=1; i<numbers.length; i++) sum+=numbers[i];
    return sum/numbers.length;
}