const solution=(array)=>{
    let concatArray=array.join('');
    return (concatArray.split('').filter((n)=>n==='7')).length;
}
/* another solution */
// 7을 기준으로 나눌 수도 있다
// function solution(array) {
//     return array.join('').split('7').length-1;
// }
//length-1을 하는 이유는 다음과 같다:
// 막대기를 두번 자르면 세조각, 10번 자르면 11조각이 된다
//자르는 기준이 7이니까, 나눠진 조각수에서 1을 빼줘야 몇번 쪼갰는지, 즉 7의 개수가 몇개인지 구할 수 있다
