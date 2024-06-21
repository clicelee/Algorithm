//1. 문자열을 배열로 바꾸어 저장한다
//2. 원소를 하나씩 읽으면서 더한다
//3. 만약 z가 나오면 직전 값을 뺀다
const solution=(s)=>{
    newArray=[...s.split(' ')]; //1
    let sum=0;
    for(i in newArray){ 
        if(newArray[i]==="Z") sum-=Number(newArray[i-1]); //3
        else sum+=Number(newArray[i]); //2
    }
    return sum;
}