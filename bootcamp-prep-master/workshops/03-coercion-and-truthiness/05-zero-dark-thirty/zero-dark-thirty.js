function zeroDarkThirty(num) {
    if (num === 0) return NaN;
    let result ='';
    let strNum = num.toString();
    
    for (let i = 0; i < strNum.length; i++) {
            if (strNum[i] != 0) {
                result =+ strNum[i];
            }
    }
    return parseInt(result);

    //return num === 0 ? NaN : Number(num.toString().replace(/0/g,''));
    
}
