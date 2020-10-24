/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;

/**
 * Byrja forrit.
 */
function start() {
  let thiscode = prompt(
    "Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“"
  );
  let kodun;
    (thiscode == 'kóða' |'afkóða') ? kodun = window.prompt(
      "Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]"
    ) : kodun = window.prompt(
      "Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]"
    );
}


  /*let answer = thiscode;
    window.alert(
      "Veit ekki hvaða aðgerð " + '"' + answer + '"' + " er. Reyndu aftur."
    );
}*/

// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits
start();

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n) {
  let nafn = 'A';

  for (let i = 0; i < nafn.length; i++) {
    nafn.toLocaleUpperCase = nafn[i] + 3;
  }
  console.log(nafn);
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
