const solution = (s)=>{
    const result = s.replace(/one|two|three|four|five|six|seven|eight|nine|zero/g, (matched) => {
      switch (matched) {
        case 'one':
          return '1';
        case 'two':
          return '2';
        case 'three':
          return '3';
        case 'four':
          return '4';
        case 'five':
          return '5';
        case 'six':
          return '6';
        case 'seven':
          return '7';
        case 'eight':
          return '8';
        case 'nine':
          return '9';
        case 'zero':
          return '0';
        default:
          return matched;
      }
    });
    return Number(result);
}
