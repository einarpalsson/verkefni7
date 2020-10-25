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

 function start() {
}

/*let answer = thiscode;
    window.alert(
      "Veit ekki hvaða aðgerð " + '"' + answer + '"' + " er. Reyndu aftur."
    );
}*/

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
  let i = 0;
  let j = 0;
  do {

    if (newStr[j] === LETTERS_arr[i]) {
      newStr[j] = LETTERS_arr[i+n];
    }
    i++;
    j++;
    console.log(newStr)

  } while (i < LETTERS.length & newStr[j] === LETTERS_arr[i] & j < newStr.length);
  return str;

  /*for (let i = 0; i < LETTERS_arr.length; i++) {
    for (let j = 0; j < newStr.length; j++) {
      if (newStr[j] === LETTERS_arr[i] & (newStr.length+n) <= 31) {
        newStr[j] = LETTERS_arr[i+n];
      }
      console.log(newStr);
    }
  }*/


}

/*else if (newStr[j] === LETTERS_arr[i] & LETTERS_arr[i+n] === undefined) {
  newStr[j] = LETTERS_arr[32-(31-n)];
}*/







/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
/*function decode(str, n) {
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
);*/
