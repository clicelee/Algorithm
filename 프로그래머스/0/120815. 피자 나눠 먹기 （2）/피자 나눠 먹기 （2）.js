const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);
const solution=(n)=>lcm(n,6)/6;

// 6명 6*1개 6
// 10명 6*5개 30
// 4명 6*3개 18
// n과 6의 최소공배수 =>return 최소공배수/6
// 최소공배수 구하는 함수: lcm(n,6)



