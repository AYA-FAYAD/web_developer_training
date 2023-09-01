
let input = prompt("what would you like to do?");
const todo = ["sleep", "read book"];
while (input !== 'q' && input !== 'quit') {
    if (input === 'list') {
        console.log('********************')
        for (let i = 0; i < todo.length; i++){
            console.log(`${i}:${todo[i]}`);
        }
        console.log('***************')
    } else if (input === "new") {
        const newtodo = prompt("ok,what is new?")
        todo.push(newtodo);
        console.log(`ok ${newtodo} add to list`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('enter an index to delete it??'));
        if (!Number.isNaN(index)) {
            const deleted = todo.splice(index, 1);
            console.log(`ok ${deleted} was deleted!`)
        } else {
            console.log("unknown index 0-0")
        }
    }
    input = prompt("what would you like to do?")
}
console.log("ok QUIT THE APP 0-0")