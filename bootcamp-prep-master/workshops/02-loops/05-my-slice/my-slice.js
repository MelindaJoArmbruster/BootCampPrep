/*function mySlice(str, start, end) {
    if (!end) {
        return str.substr(start);
    } else if (!start && !end) {
        return str;
    } else {
        return str.substr(start, (end - start));
    }
}*/
//Solution 2: Uses default parameters for the optional ones

const mySlice = (str, start, end) => {
  let slicedString = "";
  if (start === undefined && end === undefined) {
    return str;
  }
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = str.length;
  }
  for (let i = start; i < end; ++i) {
    let curChar = str[i];
    slicedString += curChar;
  }
  return slicedString;
};

//Solution 3:
/*
function mySlice(originalString, startIdx, endIdx) {

    // if both startIdx and endIdx are undefined, return the original string
    if(startIdx === undefined && endIdx === undefined){
      return originalString;
    }
  
    // if startIdx was not passed into the function, give it a default value of 0, pointing to the first character in the string
    if (startIdx === undefined) {
      startIdx = 0;
    }
  
    // if endIdx was not passed into the function, give it a default value as the length of the string
    if (endIdx === undefined) {
      endIdx = originalString.length;
    }
  
    // will concatenate characters onto slicedString before returning it
    let slicedString = '';
  
    // use the startIdx and endIdx as the start and end of the loop
    for (let i = startIdx; i < endIdx; i++) {
  
      // store the current character in a variable (optional)
      let char = originalString[i];
  
      // concatenate the character onto slicedString
      slicedString += char;
    }
  
    // return slicedString after the for loop
    return slicedString;
  }
  */
