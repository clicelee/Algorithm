//약수와 관련 있는 문제이다
//중복을 허용하지 않는 Set 객체를 사용
const solution=(n)=>{
    let s=new Set;
    // for(let i=1; i<=n/2;i++){
    for(let i=1; i<=Math.sqrt(n); i++){
        if(n%i===0) { s.add(i); s.add(n/i);}
    }
    return Math.ceil([...s].length);
}
