const solution=(num) => {
    let count=0;
    while(true){
        if(num===1) return count;
        (num%2===0)?(num=num/2):(num=num*3+1);
        count++;
        if(count===500) return -1;
    }
}