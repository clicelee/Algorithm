function solution(sides) {
    sides.sort((a,b)=>a-b);
    console.log(sides);
    return ((sides[0]+sides[1])>sides[2])?1:2;
}