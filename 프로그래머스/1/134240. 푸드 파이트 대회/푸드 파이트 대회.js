const solution= (food) => String([...food.map(i=>(i%2!=0)?(i-1)/2:(i/2)).map((e,i)=>(e!=0)?String(i).repeat(e):''),0,...food.map(i=>(i%2!=0)?(i-1)/2:(i/2)).map((e,i)=>(e!=0)?String(i).repeat(e):'').reverse()].join(''));
// function solution(food) {
//     let evenFood=food.map(i=>{return (i%2!=0)?(i-1)/2:(i/2)});
//     console.log(evenFood);
//     let answer=evenFood.map((e,i)=>{
//         return (e!=0)?String(i).repeat(e):'';
//     });  
//     return String([...answer,0,...answer.reverse()].join(''));
// }