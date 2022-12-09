// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // let lookup = "abcdefghij k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z"
  //               0123456789 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

  let lookup = "abcdefghijklmnopqrstuvwxyz";


  function caesar(input, shift, encode = true) {
    // your solution code here
  let result = "";
  if (shift === 0 || shift < -25 || shift > 25) {
    return false;
  } else {
    if (encode === false) {
      shift = 0 - shift;
    }
    // look at each character in the string one by one and for each character
    for (let i=0; i < input.length; i++) {
      const eachLetterLowercased = input[i].toLowerCase();
      // .includes to check if each letter in the input string is found in lookup alphabet
      if(lookup.includes(eachLetterLowercased)) { 
        // if the current character is in the alphabet, find the index of the current character in the lookup  
        // indexOf returns -1 if value isn't found in string we are searching
        // add the shift to that index ---> shiftedIndex is storing the new index number for the encoded message
        let shiftedIndex = lookup.indexOf(eachLetterLowercased) + shift;
        // check for if index's higher than 25...  since z is at index 25, we need to find a new number that will represent going from z back to a at index 0
        if (shiftedIndex > 25) {
          const shiftNumTooLarge = lookup.indexOf(eachLetterLowercased) + shift;
            // minus 26 because index 0 to index 25 is 26 iterations total
            shiftedIndex = shiftNumTooLarge - 26;
        }
        // if shift is neg when near the beginning of lookup (aka the alphabet) add instead
        if (shiftedIndex < 0) {
          const shiftNumTooSmall = lookup.indexOf(eachLetterLowercased) + shift;
          shiftedIndex = shiftNumTooSmall + 26;
        }
        // now we can add to our results string the character that matches its index with the shiftedIndex variable & find character at the shifted index and add it to our result
        result += lookup.charAt(shiftedIndex);
      } else { 
        // if input[i] is a space/symbol, we just add it like normal at the right iteration
        result += eachLetterLowercased; 
      } 
      
    }
    return result;
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
