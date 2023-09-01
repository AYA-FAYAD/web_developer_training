// let yorname=prompt("enter your name")

// function aya() {
//     console.log(`you again ${yorname}`);
//     console.log("for the last time");
//     console.log("leave me alone!!!!0^0");
// }
// aya()



function hopee(FirstName, lastname) {          
    console.log(`firstname is:${FirstName} ${lastname[0]}.`);
}

hopee('aya', 'fayad');


function repeat(str, num) {
    for (let i = 0; i < num; i++){
        console.log("hi")
    }
}
repeat('ddd', 4);

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
    return sum;
}

add(1, 21);