let data = [
	{
		name: "Kelly",
		image_url: "https://doodleipsum.com/200/avatar?i=7a4f635d4afc2cca4ba6f94895bb0566",
		position: "-240px",
	},
	{
		name: "Beyonce",
		image_url: "https://doodleipsum.com/200/avatar?i=995e72be48e90a0aa13341bf2de29179",
		position: "0",
	},
	{
		name: "Michelle",
		image_url: "https://doodleipsum.com/200/avatar?i=5dc583219eaed67919876becac0d62a2",
		position: "240px"
	},
];

let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let image1 = document.getElementById("image-1");
let image2 = document.getElementById("image-2");
let image3 = document.getElementById("image-3");
let circle = document.getElementById("circle");

const init = () => {
    btn1.addEventListener("click", () => {
        circle.style.left = data[0].position;
        setTimeout(() => {
            image1.style.filter = 'saturate(1) contrast(1)';
            image2.style.filter = 'saturate(0) contrast(1)';
            image3.style.filter = 'saturate(0) contrast(1)';
        }, 700)
    });

    btn2.addEventListener("click", () => {
        circle.style.left = data[1].position;
        setTimeout(() => {
            image1.style.filter = 'saturate(0) contrast(1)';
            image2.style.filter = 'saturate(1) contrast(1)';
            image3.style.filter = 'saturate(0) contrast(1)';
        }, 700)
    });

    btn3.addEventListener("click", () => {
        circle.style.left = data[2].position;
        setTimeout(() => {
            image1.style.filter = 'saturate(0) contrast(1)';
            image2.style.filter = 'saturate(0) contrast(1)';
            image3.style.filter = 'saturate(1) contrast(1)';
        }, 700)
    });
}
init()