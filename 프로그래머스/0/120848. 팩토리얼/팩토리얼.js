//1부터 차례로 나눠본 다음, 너무 큰 수로 나눠서 1보다 작아지는 순간 그 직전 i값을 반환한다
const solution=(n)=>{
    let i,number=n;
    for(i=1; i<=10; i++){
        number=number/i;
        if(number<1) break;
    }
    return i-1;
}
