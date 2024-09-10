const solution = (give, receive, current)=>{
    let bonus = 0;
    while(current >= give){ 
        let newCola=~~(current/give)*receive;
        bonus+=newCola
        current=current%give+newCola;
    }
    return bonus;
}
//잘못된 테스트 케이스를 사용해서 계속 혼자서 오류가 났었다. 이상한 부분을 못 찾아서 일단 제출해봤더니 통과! 앞으로 시간낭비 하지 않도록 테스트 케이스를 만들때 검토하자.
