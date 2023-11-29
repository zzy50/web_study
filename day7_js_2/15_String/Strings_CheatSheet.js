// Making Strings
let color = "purple";

// Single quotes work too:
let city = 'Tokyo';

//Strings have a length:
city.length; //5
"abcd".length

let string = "abcd"
string + 1234; //'abcd1234'

//We can access specific characters using their index:
city[0]; //'T'
city[3]; //'y'

// String methods:
'hello'.toUpperCase(); // "HELLO";
'LOL'.toLowerCase(); // "lol"
'    omg  '.trim(); // "omg"

// String methods with arguments:
// ==============================

//indexOf returns the index where the character is found (or -1 if not found)
'spider'.indexOf('i'); //2
'vesuvius'.indexOf('u'); //3 - only returns FIRST matching index
'cactus'.indexOf('z'); //-1 not found

let tvShow = 'catdog';
tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog'); // 3
tvShow.indexOf('z'); // -1 (not found)

let sample = "haha that is so funny!";
sample.slice(5) // "that is so funny!" > python의 sample[5:]
sample.slice(5, 9) // "that" > python의 sample[5:9]
sample.slice(-6) // "funny!"" > python의 sample[-6:] 
sample.slice(-6, -4) // "fu" > python의 sample[-6:-4]

// slice - returns a "slice" of a string
"pancake".slice(3); //"cake" - slice from index 3 onwards
"pancake".slice(0, 3); //"pan" - slice from index 0 up to index 3

// replace - returns a new string, with the FIRST match replaced
"pump".replace("p", "b"); //"bump" - only replaces first "p"
"pump".replaceAll("p", "b") //"bumb" - 지원하지 않는 브라우저가 많으므로 주의

// String Template Literals
// Use backtick characters, NOT SINGLE QUOTES!
// ========================
const msg = `My favorite color is: ${color}` //"My favorite color is: olive green"

const str = `There are ${60 * 60 * 24} seconds in a day`//"There are 86400 seconds in a day"

