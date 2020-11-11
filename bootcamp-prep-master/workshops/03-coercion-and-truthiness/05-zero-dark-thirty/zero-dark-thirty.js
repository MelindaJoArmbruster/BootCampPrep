function zeroDarkThirty(num) {
    if (num === 0) return NaN;
    let result ='';
    let strNum = String(num);
    
    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] != 0) {
            result =+ strNum[i];
        }
    }
    return Number(result);    
}
