const solution=(array)=>{
    let max=array[0];
    let max_index=0;
    for(i in array)
        if(array[i]>max){
            max=array[i];
            max_index=i;
        }
    return [max,parseInt(max_index)];
}
//`for...in` 루프를 사용하면 배열의 인덱스가 문자열로 반환되기 때문에 `i`가 숫자가 아닌 문자로 인식된다
//그래서 index를 배열로 반환할떄는 parseInt를 사용해야 한다
/* 더 좋은 풀이 
//max 함수 사용
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
*/
