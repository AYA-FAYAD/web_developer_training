// let totalEggs = 0;
// function collectEgg() {
//     totalEggs = 6;
// }
// console.log(totalEggs);
// collectEgg(5);
// console.log(totalEggs);


// const name = "aya";
// function group() {
//     const name = "hope"
//     console.log(name)
// }


// let deadlyAnimal = "Blue-Ringed Octopus";
 
// function handleAnimal() {
//     let deadlyAnimal = "Scorpionfish";
//     // console.log(deadlyAnimal);
// }
 
// handleAnimal();
// console.log(deadlyAnimal)


// for (let i = 0; i < 5; i++){
//     let msg = "fsfnskjfnlkslk"
//     console.log(msg)
// }
// console.log(msg)

// for(let i = 0; i < 5; i++){
//     var msg = "fsfnskjfnlkslk"
//     console.log(msg)
// }
// console.log(msg)

// function bankRobbery() {
//     const heroes = ["spiderman", "wolverine", "black panther"]
//     function cryforhelp() {
//         function inner() {
//             for (let hero of heroes) {
//                 console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
//             }
        
//         }
//         inner();

//     }
//     cryforhelp();
// }
// bankRobbery();

// //  function Expression
// const add = function (x, y) {
//     return x + y;
// }

// const square = function (num) {
//     return Math.pow(num, 2);
// }

// function calltwice(func) {
//     func();
//     func();
// }


// function rolldie() {
//     const roll = Math.floor(Math.random()+6)+1
//     console.log(roll)
// }


// calltwice(rolldie);

// calltwice(rolldie());




// returnuning function

//




// function makeBetweenfunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }

// const isChild = makeBetweenfunc(0, 18)
// const isAdult = makeBetweenfunc(19,20)


// function isBetween(num) {
//     return num >=1 && num <= 100
// }

// function isBetween2(num) {
//     return num >=1 && num <= 10
// }

// method
// const mymath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }

// mymath.square(2)

// shortcut

// const mymath = {
//     PI: 3.14159,
//     square (num) {
//         return num * num;
//     },
//     cube (num) {
//         return num ** 3;
//     }
// }
//  shortcut()
// const square = {
//     area(side) {
//       return side * side;
//     },
//     perimeter(side) {
//       return side * 4;
//     }
//   }



// this keyword

// const bird = {
//     name: 'hopee',
//     color: 'yllow',
//     size: 'small',
//     sing() {
//         console.log('i love aya')
//     }
    
// }

// const bird = {
//     name: 'hopee',
//     color: 'yllow',
//     size: 'small',
//     sing() {
//         console.log(`${this.name} says i love aya`);
//     }
    
// }
//  const sing2 = bird.sing this to window
// bird.sing() this to object bird


// try&&catch  code runnnnn!

try {
    hello.toUpperCase();
} catch{
    console.log('ERROR')
}

console.log('after')

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log ('please pass a string next time!')
    }
}
