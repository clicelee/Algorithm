function solution(n) {
    if(n%2==1)
        return ((n+1)/2)**2;
    else{
        let sum = 0;
        for (let i = 2; i <= n; i += 2) {
          sum += i * i;
        }
        return sum;
    }
}
