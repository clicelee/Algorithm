const returnMax=(a,b,c)=>{
    if((b-a)>(c-b)) return c;
    else return a;
}
const solution=(array, n)=>{
    array.push(n);
    newArray=array.sort((a,b)=>a-b);
    indexN=newArray.indexOf(n);
    length=newArray.length;
    if(indexN===0) return newArray[1];
    else if(indexN===(length-1)) return newArray[length-2];
    else return (returnMax(newArray[indexN-1], n, newArray[indexN+1]));
}

/* much better solution */
// 절댓값 이용 Math.abs()하면 returnMax 함수를 구현할 필요 없다
// function solution(array, n) {
//     array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

//     return array[0];
// }
