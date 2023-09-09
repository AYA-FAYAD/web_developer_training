let totalEggs = 0;
function collectEgg() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEgg(5);
console.log(totalEggs);


const name = "aya";
function group() {
    const name = "hope"
    console.log(name)
}


let deadlyAnimal = "Blue-Ringed Octopus";
 
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    // console.log(deadlyAnimal);
}
 
handleAnimal();
console.log(deadlyAnimal)


for (let i = 0; i < 5; i++){
    let msg = "fsfnskjfnlkslk"
    console.log(msg)
}
console.log(msg)

for(let i = 0; i < 5; i++){
    var msg = "fsfnskjfnlkslk"
    console.log(msg)
}
console.log(msg)

function bankRobbery() {
    const heroes = ["spiderman", "wolverine", "black panther"]
    function cryforhelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
            }
        
        }
        inner();

    }
    cryforhelp();
}
bankRobbery();

//  function Expression
const add = function (x, y) {
    return x + y;
}

const square = function (num) {
    return Math.pow(num, 2);
}

function calltwice(func) {
    func();
    func();
}


function rolldie() {
    const roll = Math.floor(Math.random()+6)+1
    console.log(roll)
}


calltwice(rolldie);

calltwice(rolldie());