const solution=(age)=>{
    array=age.toString().split('');
    let answer=[];
    let myMap = new Map([
        ['0', 'a'], ['1', 'b'], ['2', 'c'], ['3', 'd'], ['4', 'e'],
        ['5', 'f'], ['6', 'g'], ['7', 'h'], ['8', 'i'], ['9', 'j']
    ]);
    for(let i=0;i<array.length;i++) answer[i]=myMap.get(array[i]);
    return answer.join('');
}