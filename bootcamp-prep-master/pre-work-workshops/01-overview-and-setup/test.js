The alternative solution below does not use the built in 'indexOf' method
*/

function caesarCypher(str, num){
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var encrypted = '';

  for(var i = 0; i < str.length; i++){
    var char = str[i];
    if(char !== ' ') {

     // loop over alphabet 
      for(var j = 0; j < alphabet.length; j++) {
        var letter = alphabet[j];
       // if letter matches the current character in the string we want to encrypt, save the alphabet index
        if(letter === char) {
          var idx = j;
          break;
        }
      }
      var rotatedIdx = idx + num;
      if(rotatedIdx >= 26){
        rotatedIdx = rotatedIdx - 26;
      }
      var newChar = alphabet[rotatedIdx]
    } else {
      var newChar = ' '
    }
    encrypted += newChar
  }
  return encrypted
}
