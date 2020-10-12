const myMnemonic = (...strs) => {
    let answer = '';

for (let i = 0; i < strs.length; ++i) {
    var currentString = strs[i];
    var currentChar = currentString[0];

    answer +=currentChar;
}
return answer;
}
