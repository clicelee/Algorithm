const solution=(s1, s2)=>{
    let sumArray=[...s1,...s2]; //s1과 s2를 합한다
    let s=new Set(sumArray); //합한 배열에서, 중복된 객체를 제거한다
    return sumArray.length-[...s].length; //합 했을 때 길이-중복된 것 제거 했을 때 길이=중복된 것의 길이
}

