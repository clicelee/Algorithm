function solution(n, m) {
    function GCD(n,m){
        let answer=1;
        for(i of Array.from({ length: n }, (_, index) => index + 1))
            if((n%i==0)&&(m%i==0)) answer=i;
        return answer;
    }
    return [GCD(n,m), (n*m/GCD(n,m))];
}

/* best solution */
function gcdlcm(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}
