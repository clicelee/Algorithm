function solution(dots) {
    let sortedDots=dots.sort();
    let width=sortedDots[3][1]-sortedDots[2][1];
    let height=sortedDots[2][0]-sortedDots[0][0];
    return width*height;
}