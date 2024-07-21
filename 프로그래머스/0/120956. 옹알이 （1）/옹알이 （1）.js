// const solution=(babbling)=>{
//     let array=babbling.filter(n=>{n===("aya"|"ye"|"ma"|"woo")});
//     return array;
// }
//단어장에 있는 단어를 지우고, 문자열이 비면 통과
const solution = (babbling) => {
    const canPronounce = ["aya", "ye", "woo", "ma"];
    let count = 0;

    babbling.forEach(word => {
        let temp = word;
        canPronounce.forEach(pron => {
            temp = temp.split(pron).join(' ');
        });
        if (temp.trim() === '') count++;
    });

    return count;
}
