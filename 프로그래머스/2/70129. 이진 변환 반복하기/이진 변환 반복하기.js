const solution = (s) => {
    let deleted_zero=0;
    let count=0;
    while(s!=1){
        let length_1=s.length;
        s = String(s).replace(/0/g, '');
        deleted_zero+=length_1-s.length;
        s=(s.length).toString(2);
        count++;
    }
    return [count,deleted_zero];
}