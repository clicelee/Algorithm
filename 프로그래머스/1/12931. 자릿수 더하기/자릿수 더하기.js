const solution =(n) => [...(n+'')].reduce((a,b)=>a+b,0); //-> 이러면 1,2,3 더했을때 0123이렇게 나온다. 
const solution =(n) => [...(n+'')].reduce((a,b)=>a+Number(b),0); //a가 0이니까 그 다음 더할 b 부터 Number을 해준다
