// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const lookup = "abcdefghijklmnopqrstuvwxyz";
  // let lookup = "abcdefghij k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z";
  //               0123456789 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26 || uniqueCharacters(alphabet)) {
      return false;
    } else {
      return encode ? encoder(input, alphabet) : decoder(input, alphabet);
    }
  }

  function decoder(input, alphabet) {
    //DECODING
    let result = "";
    for (let i = 0; i < input.length; i++) {
      if (alphabet.includes(input[i])) {
        let indexNew = alphabet.indexOf(input[i]);
        result += lookup[indexNew];
      } else {
        result += input[i];
      }
    }
    return result;
  }

  function encoder(input, alphabet) {
    //ENCODING
    let result = "";
    for (let i = 0; i < input.length; i++) {
      const lowercasedLetter = input[i].toLowerCase();
      if (lookup.includes(lowercasedLetter)) {
        // if input[i] is a letter, then true, run this >
        let indexNew = lookup.indexOf(lowercasedLetter);

        result += alphabet[indexNew];
      } else {
        result += input[i];
      }
    }
    return result;
  }

  function uniqueCharacters(string) {
    for (let i = 0; i < string.length; i++) {
      if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
        return true;
      }
    }
    return false;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
