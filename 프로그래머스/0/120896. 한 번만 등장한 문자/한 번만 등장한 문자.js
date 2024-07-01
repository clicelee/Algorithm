const solution=(s)=>{
    let map=new Map();
    for(let i of s){
        if(map.has(i)) map.set(i, map.get(i)+1);
        else map.set(i,1);
    }
    let oneAppearVlaue=[];
    for(let [key, value] of map.entries())
        if(value===1) oneAppearVlaue.push(key);
    return oneAppearVlaue.sort().join('');
}