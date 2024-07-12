const solution = (id_pw, db) => {
    let id=id_pw[0];
    let pw=id_pw[1];
    for(i of db)
        if(i[0]===id) return (i[1]===pw)?("login"):("wrong pw");
    return "fail"
}
/* better solution */

//map을 이용하였다
//has: 값이 있는가?
//get: 값을 가져온다
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}


/* best solution */
//구조분해 할당, some 메서드
var solution=([a,b],d)=>d.some(([p,q])=>a==p&&b==q)?'login':d.some(([p])=>a==p)?'wrong pw':'fail'
