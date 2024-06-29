const solution=(num, total)=>{
    let middle=total/num; //total을 num으로 나눔
    if(middle%1!=0) middle-=0.5; //만약 num이 짝수라서 middle 값이 소수인 경우, 0.5를 빼줌
    let array=[middle];
    for(i=1; i<=~~(num/2); i++){
        array.push(middle-i);
        array.push(middle+i);
    }
    array.sort((a,b)=>a-b);
    if(num%2===0) array.shift();
    return array;
}

