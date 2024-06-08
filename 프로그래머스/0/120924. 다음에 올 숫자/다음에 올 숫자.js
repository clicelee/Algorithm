
const solution=(n)=>{
    if(n[1]/n[0]===n[2]/n[1]) return n[n.length-1]*(n[1]/n[0]);
    else return n[n.length-1]+(n[1]-n[0]); //여기서 마지막 원소를 가져올 때 n.pop()를 이용하면 더 편하다
}
