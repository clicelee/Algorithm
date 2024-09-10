const solution = (give, receive, current)=>{
    let bonus = 0;
    while(current >= give){ 
        let newCola=~~(current/give)*receive;
        bonus+=newCola
        current=current%give+newCola;
    }
    return bonus;
}