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


/*other solution */

function solution(array) {
    let m = new Map();
    for (let n of array) m.set(n, (m.get(n) || 0)+1); //여기까지는 같음
    m = [...m].sort((a,b)=>b[1]-a[1]); //여기까지도 같음
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1; //여기서부터 훨씬 간결하다
    //삼항 연산자를 사용하여 정렬된 배열의 길이가 1이거나 첫 번째 값의 빈도가 두 번째 값의 빈도보다 큰 경우 최빈값을 반환하고, 그렇지 않으면 -1을 반환한다
}
