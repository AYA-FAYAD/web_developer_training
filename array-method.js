// foreach method
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function print(num) {
//     console.log(num)
// }
// numbers.forEach(print)


// numbers.forEach(function (el) {
//     if (el % 2 == 0) {
//         console.log(el)
//     }
// })

// for (let el of numbers) {
//     console.log(el);
// }


// const movies = [
//     {
//         title: 'Amadeus',
//         score:99
//     },
//     {
//         title: 'Stand By Me ',
//         score:85
//     },
//     {
//         title: 'Parasite ',
//         score:95
//     },
//     {
//         title: 'Alien',
//         score:90
//     }
// ]

// movies.forEach(function (movies) {
//     console.log(`${movies.title} - ${movies.score} /100`)
// })

// MAP take result and put on new array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const doubles=numbers.map(function (num) {
//     return num * 2;
    
// })

// const title =movies.map(function (movies) {
//     return movies.title.toUpperCase();
// })

// ARROW FUNCTION =>

// const add = function (x, y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

// const square = (x) => {
//     return x * x;       //// () here optinal
// }

// const square = x => {
//     return x * x;
// }


// const rollDie = () => {
//     return Math.floor(Math.random() *6) +1
// }

// const rollDie = () => {
//     return Math.floor(Math.random() *6) +1
// }


//  you dont need ues return word
// const rollDie = () => (
//     Math.floor(Math.random() *6) +1
// )

// const ad = (a, b) => a + b;

// const newmovie=movies.map(function (movie) {
//     return `${movie.title} - ${movie.score/10}`
// })

// const newmovie=movies.map(movie => (
//     `${movie.title} - ${movie.score/10}`
// ))

// not arry method setTimeout && settinterval
// console.log("hellllo")
// setTimeout(() => {
//     console.log("ayyya")
// },3000)


// const id =setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// filter justv true one and put it in new array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const four=numbers.filter(n => {
//     return n===4 
// })



const movies = [
    {
        title: 'Amadeus',
        score:99
    },
    {
        title: 'Stand By Me ',
        score: 85,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30 ',
        score:70,
        year: 2004
    },
    {
        title: 'Stand By Me ',
        score:85,
        year: 1986
    
    },
    {
        title: 'Waterworld ',
        score:62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score:71,
        year: 1996
    },
    {
        title: 'Parasite ',
        score:95,
        year: 2019
        
    },
    {
        title: 'Notting Hill ',
        score:77,
        year: 1999
    },

    {
        title: 'Alien',
        score: 90,
        year:1979
    }
]

// const goodmovies= movies.filter(movies => {
//     return movies.score >80
// })
// const goodTitles = goodmovies.map(m => m.title)

// const goodmovies= movies.filter(m => m.score>80).map(m => m.title)

// const badmovies= movies.filter(m => m.score <70)

// function validUserNames(arr) {
//     const filteredArr = arr.filter(function (name) {
//       return name.length < 10;
//     });
//     return filteredArr;
//   }

// some every true and false

// const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77]

// exams.every(score => score >= 75)
// exams.some(score => score>= 75)

movies.some(mov => mov.year > 2015)