function solution(n, m) {
    function GCD(n,m){
        let answer=1;
        for(i of Array.from({ length: n }, (_, index) => index + 1))
            if((n%i==0)&&(m%i==0)) answer=i;
        return answer;
    }
    const LCM=(n,m)=> ((n/GCD(n,m))*(m/GCD(n,m))*GCD(n,m));
    return [GCD(n,m), LCM(n,m)];
}