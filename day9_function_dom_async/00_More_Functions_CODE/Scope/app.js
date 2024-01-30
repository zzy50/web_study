// ==============
// FUNCTION SCOPE
// ==============
let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);

const bird = 'Scarlet Macaw';
function birdWatch() {
    const bird = 'Great Blue Heron';
    console.log(bird);
}
birdWatch()
// 0
// 6
// Great Blue Heron


// ==============
// BLOCK SCOPE
// ==============
let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'HIII!'
}
console.log(radius);
console.log(msg)

for (let i = 0; i < 5; i++) {
    let msg = "ASKLDJAKLSJD";
    console.log(msg)
}
console.log(msg) // Uncaught ReferenceError: msg is not defined
console.log(i) // 8


// ==============
// LEXICAL SCOPE
// ==============

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
    console.log(color);
}

bankRobbery();

// PLEASE HELP US, SPIDERMAN
// PLEASE HELP US, WOLVERINE
// PLEASE HELP US, BLACK PANTHER
// PLEASE HELP US, BATWOMAN
// Uncaught ReferenceError: color is not defined 
//     at bankRobbery(<anonymous>:13:17)
//     at <anonymous>:16:1