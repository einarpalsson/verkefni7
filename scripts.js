/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;
let  LETTERS_arr = LETTERS.split(''); //array af LETTERS
let testing = LETTERS_arr.join(''); //aftur til baka test


/**
 * Byrja forrit.
 */

start();

 function start() {
   let kodun = window.prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“');
   let kodun_lower = kodun.toLocaleLowerCase();
   console.log(kodun_lower);

   if (kodun_lower !== 'kóða' && kodun_lower !== 'afkóða') {
    window.alert('Veit ekki hvaða aðgerð ' + '"' + kodun + '"' + ' er. Reyndu aftur.');
    start();
    return;
   }

   let svar =
      kodun_lower === 'kóða' ? window.prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]') :
      window.prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]');


   console.log(kodun);
   console.log(svar);
   let n = Number.parseInt(svar);
   let hlidrun = Number.isInteger(n) && n >= 1 && n <=31  ? window.prompt('Gefðu upp strenginn sem á að ' +  kodun + ' með hliðrun ' + svar + ':') : window.alert(svar + ' er ekki heiltala á bilinu [1, 31]. Reyndu aftur.');
   console.log(hlidrun);

   let all_isl = true;
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
      if (newStr[i] === LETTERS_arr[j] && j+n <= 31) {
        tester[i] = LETTERS_arr[j+n];
      } else if (newStr[i] === LETTERS_arr[j] && j+n > 31) {
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
      if (newStr[i] === LETTERS_arr[j] && j-n >= 0) {
        tester[i] = LETTERS_arr[j-n];
      } else if (newStr[i] === LETTERS_arr[j] && j-n < 0) {
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
