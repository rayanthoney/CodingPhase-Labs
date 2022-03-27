// Javascript goes here
console.log('Hello Codingphase World!')

// // Variable
// let car = '1967 Chevy Camaro'
//     alert(car)

// Method Object
// let car = {
//     title: "Camaro",
//     wheels: 4,
//     windows: 6,
//     printMessage: function(){
//         console.log('This Camaro has 4 wheels and 6 windows')
//     }
// }
// console.log(window.document) // will show object list
// alert(car) // will show a pop up

let main = document.getElementById('main')
let box = document.getElementsByClassName('box')
let printBox = (index) => {
    return `This box has a height ${box[index].clientHeight} and a width of ${box[index].clientWidth}`
}
console.log(printBox(0))
document.create