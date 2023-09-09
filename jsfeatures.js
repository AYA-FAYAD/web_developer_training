// function rollDie(numside) {
     
//     if (numside === undefined) {
//         numside= 6
//     }
    
//     return Math.floor(Math.random() * numside) + 1
    
// }



// function rollDie(numside = 6) {
//     return Math.floor(Math.random() * numside) + 1
// }

// order is importent
//


// S P R E A D (...num) take the arry and speard into individual arrgument

// const num = [1, 5, 6, 24, 9, 3, 74, 2, 1]

// Math.max(...num)  74
// Math.max(num)    NaN

// const cat = ['blue', 'scout', 'rocket'];
// const dogs = ["hopee", "lolo"];
// copy arry to new one
// const allpets = [...cat, ...dogs]


// const feline = { leg: 4, family: "fayad" };
// const canine = { isFurry: true, family: "emad" };

// const dataform = {
//     email: 'aua989815@gmail.com',
//     password: 'aya564646414',
//     username:'ays'
// }

// const newusername={...dataform, id: 2345, isAdmin: false }

// R E S T

// function sum() {
//     return arguments.reduce((total,el) => total+el)
// }   not work

// function sum(num) {
//     console.log(num)
// }

// sum(12, 2, 3)    its take the first arguments just


// function sum(...num) {
//     console.log(num)
// }

// sum(12, 2, 3)


// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
// }

// sum(12, 2, 3)


// function raceResults(glod, silver, ...everyoneElse) {
//     console.log(`GOLD MEDAL GOSE TO:${glod}`)
//     console.log(`GOLD MEDAL GOSE TO:${silver}`)
//     console.log(`THANK TO EVERY ONE ELSE:${ everyoneElse}`)

// }
// raceResults('aya','mostafa','hope','adoos')


// destructuting  arrays

// const scores = [5455, 5454, 85454, 5454, 5485, 5415, 4544];
// const highscore = scores[0];
// const secondscors = scores[1];
// const [gold, silver, bronze,...everyoneElse] = scores;


const user ={
    email: 'dddgfegfiegfi.com',
    password: 'scifjswk55',
    firstname: 'aya',
    lastname: 'fayad',
    born: 1995,
    died: 2075,
    bio: 'aya medical bio',
    city:'Amman'
    
}


function fullname({ firstname, lastname }) {
    return `${firstname} ${lastname}`
}
// const firstname = user.firstname;
// const lastname = user.lastname;
// const { email, firstname, bio, city } = user;
// rename key:
// const { born: birthyear } = user;

