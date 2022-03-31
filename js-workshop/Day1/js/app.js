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



// create an h1 element
let h1 = document.createElement('h1');
// give it some content
let titleText = document.createTextNode('Mary had a lil lamb');
// add text node to the newly created h1
h1.appendChild(titleText)
// add the newly created element and its content into the DOM
document.body.appendChild(h1)


main.innerHTML =
`<div>
    <h2>Lorem Doodle</h2>
    <img src="https://doodleipsum.com/700/flat?i=1fd425a431f7f9d55bb237a7c39f3f73">
</div>`