const isBadNumber=(n)=> n%3===0||n.toString().includes('3'); //저주의 숫자 판별기
const solution=(n)=>{
    let count=0;
    let number=0;
    while(count<n){
        number++;
        if(isBadNumber(number)===false) count++;
    }
    return number;
}