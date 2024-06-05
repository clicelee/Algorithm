const solution=(n)=>{
    let newN=Math.sqrt(n); //제곱근을 구한다
    return (newN===~~newN)?1:2; //제곱근에 소수점이 없다면, 올바른 제곱수이다
}