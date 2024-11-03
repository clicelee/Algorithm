let solution = (s) => s.split(' ').map((e,i)=>[...e].map((value,index)=> (typeof value === "number")?value:(index==0?value.toUpperCase():value.toLowerCase())).join('')).join(' ')
// i love short code♥️
// var solution =(s)=>{
//     var splittedS= s.split(' ');
//     var answer=splittedS.map((e,i)=>
//                   [...e].map((value,index)=>
//                              (typeof value === "number")?value:(index==0?value.toUpperCase():value.toLowerCase())).join(''));
// return answer.join(' ');
// }