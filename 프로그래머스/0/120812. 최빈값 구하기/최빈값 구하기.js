const solution=(array)=>{
    let map=new Map();
    for(let i of array){
        if(map.has(i)) map.set(i, map.get(i)+1);
        else map.set(i,1);
    }
    // console.log(map);
    let sortedMap=new Map([...map.entries()].sort((a, b)=>b[1]-a[1]));
    let sortedArray=[...sortedMap.entries()];
    if (sortedArray.length>1){
        if (sortedArray[0][1]===sortedArray[1][1]) return -1;
        else return sortedArray[0][0];
    }
    else return sortedArray[0][0];    
}