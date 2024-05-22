const gcd=(a, b)=>{
  let remainder = a % b; 
  if (remainder === 0) 
      return b;
  return gcd(b, remainder);
}

const solution=(numer1, denom1, numer2, denom2)=> {
    let numer3=(numer1*denom2+numer2*denom1);
    let denom3=(denom1*denom2);
    let divide=gcd(numer3, denom3); 
    //틀렸던 원인: 변수 이름과 함수 이름 겹쳐서 문제 발생
    return [numer3/divide, denom3/divide];
}
