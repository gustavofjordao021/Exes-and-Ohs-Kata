function XO(str) {
    str = str.toLowerCase();
    let stringCharacters = str.split("");
    let countOfXs = stringCharacters.reduce(function(count, value) {
        return count + (value === 'x');
      }, 0);
    let countOfOs = stringCharacters.reduce(function(count, value) {
        return count + (value === 'o');
      }, 0);
    if (countOfXs === countOfOs) {
      return true;
    } else {
      return false;
    }
}; 