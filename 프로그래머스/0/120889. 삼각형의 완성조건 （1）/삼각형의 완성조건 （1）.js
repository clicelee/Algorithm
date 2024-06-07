function solution(sides) {
    sides.sort((a,b)=>a-b);
    // console.log(sides); 이걸 출력하면 시간을 4ms나 더 많이 잡아먹는다 
    return ((sides[0]+sides[1])>sides[2])?1:2;
}
