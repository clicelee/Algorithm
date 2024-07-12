function solution(id_pw, db) {
    let id=id_pw[0];
    let pw=id_pw[1];
    for(i of db)
        if(i[0]===id) return (i[1]===pw)?("login"):("wrong pw");
    return "fail"
}
