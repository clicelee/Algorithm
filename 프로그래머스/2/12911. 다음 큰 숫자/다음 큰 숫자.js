const solution=(n)=>{
    let m=n+1;
    while(m<1001000){
        if(m.toString(2).split('1').length===n.toString(2).split('1').length) return m;
        m++;
    }
    return -1;
}