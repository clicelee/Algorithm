const solution=(message)=>{
    // return 2*(Array.from(message)).length;
    // return 2*(message.split('').length);
    return(2*[...message].length);
}
// 문자열을 배열로 바꾸는 방법에는 3가지가 있다
// 그 중 [...스프레드 연산자]가 제일 빠르다
