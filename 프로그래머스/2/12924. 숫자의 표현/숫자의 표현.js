const solution=(n) => {
    let count=0;
    for(let i=1; i*(i-1)/2<n; i++)
        if((n-i*(i-1)/2)%i===0) count ++;
    return count;
}


처음에 푼 코드는 아래와 같았다
function solution(n) {
    let count=1;
    for(let i=~~(n/2)+1; i>1; i--){
        for(let m= i-1; m>=0; m--){
            if((i+m)*(i-m+1)/2 === n) { 
                count++;
                break;
            }
        }
    } 
    return count;
}

그런데 시간 복잡도가 너무 컸다
![](https://i.imgur.com/aHfBgZd.png)

이 공식을 이용해서 코드를 변형했다.
그래서 나온 코드가  `if((n-i*(i-1)/2)%i===0) count ++;` 이다