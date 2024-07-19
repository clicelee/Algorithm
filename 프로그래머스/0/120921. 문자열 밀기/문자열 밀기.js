const solution = (A, B) => {
    for(let i=0; i<A.length; i++)
        if((A.slice(-i)+A.slice(0,-i)) === B) return i;
    return -1;
}
// https://www.youtube.com/watch?v=HwpF73JJC8s&list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS 생각의 전환이 필요한 부분
