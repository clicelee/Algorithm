const solution=(name, yearning, photo)=> {
    let dictionary=name.reduce((acc, name, index)=>{
        acc[name]=yearning[index];
        return acc;
    },{});
    return photo.map((e,i) => e.reduce((acc,person)=>acc+(dictionary[person]||0),0));}
/* another solution */
//using indexOf
function solution(name, yearning, photo) {
    return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
}
