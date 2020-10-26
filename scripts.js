/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;
let  LETTERS_arr = LETTERS.split(''); //array af LETTERS
let testing = LETTERS_arr.join(''); //aftur til baka test


/**
 * Byrja forrit.
 */

encode('EINAR', 3);
decode('GKPDU', 3);

 function start() {
}

// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits


/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */

 // EINAR(3) = GKPDU.
 // Æ(7) = E
function encode(str, n) {
  let newStr = str.split('');
  let tester = [];

  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < LETTERS_arr.length; j++) {
      if (newStr[i] === LETTERS_arr[j] & j+n <= 31) {
        tester[i] = LETTERS_arr[j+n];
      } else if (newStr[i] === LETTERS_arr[j] & j+n > 31) {
        tester[i] = LETTERS_arr[j-(32-n)];
      }
    }
  }
  str = tester.join('')
  console.log(str);
return str;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */


function decode(str, n) {
  let newStr = str.split('');
  let tester = [];

  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < LETTERS_arr.length; j++) {
      if (newStr[i] === LETTERS_arr[j] & j-n >= 0) {
        tester[i] = LETTERS_arr[j-n];
      } else if (newStr[i] === LETTERS_arr[j] & j-n < 0) {
        tester[i] = LETTERS_arr[j + (32-n)];
      }
    }
  }
  str = tester.join('');
  console.log(str);
return str;
}

console.assert(encode("A", 3) === "D", "kóðun á A með n=3 er D");
console.assert(decode("D", 3) === "A", "afkóðun á D með n=3 er A");
console.assert(
  encode("AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ", 32) ===
    "AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ",
  "kóðun með n=32 er byrjunarstrengur"
);
console.assert(
  encode("AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ", 3) ===
    "DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB",
  "kóðun á stafrófi með n=3"
);
console.assert(
  decode("DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB", 3) ===
    "AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ",
  "afkóðun á stafrófi með n=3"
);
console.assert(
  decode(encode("HALLÓHEIMUR", 13), 13) === "HALLÓHEIMUR",
  "kóðun og afkóðun eru andhverf"
);
