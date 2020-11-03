function mostVowels(str) {
    let vowels = [a,e,i,o,u,A,E,I,O,U];
    let arrStr = str.split(' ');
    let bestCount = 0;
    let bestWord;

    for (let i = 0; i < arrStr.length; i++) {
        const word = arrStr[i];
        let vowelCount = 0;
        for (let k = 0; k < word.length; k++) {
            const char = word[k];
            if(vowels.includes(char)) {
                vowelCount++;
            }
        }
        if (vowelCount > bestCount) {
            bestCount = vowelCount;
            bestWord = word;
        }
    }
    if (vowelCount = 0) {
        return ' ';
    }
    return bestWord;
}
