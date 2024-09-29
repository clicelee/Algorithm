const solution=(name, yearning, photo)=> {
    let dictionary=name.reduce((acc, name, index)=>{
        acc[name]=yearning[index];
        return acc;
    },{});
    return photo.map((e,i) => e.reduce((acc,person)=>acc+(dictionary[person]||0),0));}