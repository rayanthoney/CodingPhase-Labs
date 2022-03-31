// JavaScript code goes here
console.log("Hello Codingphase World :)");

// document.getElementById('main').style.backgroundColor = 'red';
// document.getElementById('main').style.height = '200px';
// document.getElementById('main').style.width = '200px';

////////////////////////////
// or use box = to 'main' //
////////////////////////////

// Variable = box = main
// let box = document.getElementById('main')

// setTimeout(( ) => {

//     box.style.background = 'linear-gradient(45deg, rgba(95,7,221,1) 0%, rgba(255,0,213,1) 100%)';
//     box.style.height = '400px';
//     box.style.width = '400px';
//     box.classList.add('animation-in')

// }, 200)




let box = document.getElementById("main");
let btnNum1 = document.getElementById('btn-num1');
let btnNum2 = document.getElementById('btn-num2');
let btnNum3 = document.getElementById('btn-num3');
let btnExit = document.getElementById('btn-exit');

let initBox = () => {
	box.style.background = '#5f07dd';
	box.style.height = "200px";
	box.style.width = "200px";
};

initBox();

let animationStart = () => {
		box.classList.add("animation-in");
};

let animationReverse = () => {
	box.classList.remove("animation-in");
};

btnNum1.addEventListener("click", () => {
	animationStart();
});

btnNum2.addEventListener("click", () => {
	animationStart();
});

btnNum3.addEventListener("click", () => {
	animationStart();
});

btnExit.addEventListener("click", () => {
	animationReverse();
});
