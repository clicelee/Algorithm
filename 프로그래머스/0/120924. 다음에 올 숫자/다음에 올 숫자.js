const solution=(n)=>{
    if(n[1]/n[0]===n[2]/n[1]) return n[n.length-1]*(n[1]/n[0]);
    else return n[n.length-1]+(n[1]-n[0]);
}