function solution(dots) {
    let sortedDots=dots.sort((a,b)=>a[0]-b[0]);
    console.log(sortedDots);
    let width=sortedDots[3][1]-sortedDots[2][1];
    let height=sortedDots[2][0]-sortedDots[0][0];
    // return (sortedDots[3][1]-sortedDots[2][1])*(sortedDots[1][0]-sortedDots[0][0]);
    console.log(width,height);
    return Math.abs(width*height);
    // console.log(dots[0][0],dots[0][1]);
    // console.log(dots.sort());
    // var answer = 0;
    // return answer;
}