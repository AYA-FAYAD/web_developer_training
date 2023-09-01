// console.log("HELLO FROM OUR FIRST JS FILE!!!")
// if (1 + 1 == 2) {
//     console.log(" MATH IS WORK")
// }

//

const password = prompt("please enter a new password")
if (password.length >= 6) {
    if (password.indexOf('') === -1) {
        console.log("good job ! no space")
    }
    else {
        console.log("password cannot contain space")
    }
} else {
    console.log("not enogh passwrd")
}

// password cannot include space
