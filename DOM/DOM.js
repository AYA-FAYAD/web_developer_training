// DOM  document object model js window
// console dir(document) we see js ,, document is object

// const allimg = document.getElementsByTagName('Img');
// for (let img of allimg) {
//     console.log(img.src)
// }

// const allimg = document.getElementsByTagName('Img');
// for (let img of allimg) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// const squarimages = document.getElementsByClassName('square');

// for (let img of squarimages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

// querySelector  selector the first match
// document.querySelector('p')
// document.querySelector('#banner')  by id
// document.querySelector('.square')  by class



// document.querySelectorAll('.square')

// const links = document.querySelectorAll('p a');
// for (let link of links) {
//     console.log(link.href)
const allLinks = document.querySelectorAll('a');
for (let links of allLinks) {
    links.innerText ='I AM LINK'
}