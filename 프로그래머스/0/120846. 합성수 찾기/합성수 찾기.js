const solution=(n)=>{
    let count=0;
    for(let i=2; i<=n; i++){
        for(let j=2; j<i;j++){
            if(i%j==0) {
                count++; 
                break;
            }
        }
    }
    return count;
}

/* other solution*/
  
//성능과 시간은 내가 작성한 코드와 같거나 더 느린데, 이건 n이 100까지인 경우라 어느 코드가 더 효율적인지는 판단할 수 없다고 생각한다
/*
const solution = (n) => {

//합성수인지 아닌지 판단하는 함수
  const isComposite = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) count++;
      if (count > 2) return true; //약수의 개수가 2개를 초과하면 합성수로 판단하고 바로 리턴
    }
    return false;
  }

//메인함수
  let compositeCount = 0;
  for (let i = 4; i <= n; i++) {
    if (isComposite(i)) {
      compositeCount++;
    }
  }
  return compositeCount;
}

*/
