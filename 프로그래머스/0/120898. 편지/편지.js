const solution=(message)=>{
    // return 2*(Array.from(message)).length;
    // return 2*(message.split('').length);
    return(2*[...message].length);
}