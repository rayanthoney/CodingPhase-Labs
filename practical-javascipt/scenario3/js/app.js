// let root = document.getElementsByClassName("root")[0];

// Object:
let data = {
	fullName: "Memo Brown",
	position: "UI/UX Designer",
	socials: [
		{
			id: "fb",
			service: "Facebook",
			url: "https://www.facebook.com/mbrown0109",
			icon: "fab fa-facebook-f",
		},
		{
			id: "ig",
			service: "Instagram",
			url: "https://www.instagram.com/mbrown0109",
			icon: "fab fa-instagram",
		},
		{
			id: "db",
			service: "Dribbble",
			url: "https://www.dribbble.com/mbrown0109",
			icon: "fab fa-dribble",
		},
		{
			id: "gl",
			service: "Google",
			url: "https://www.google.com/mbrown0109",
			icon: "fab fa-facebook",
		},
	],
};

let style = document.createElement("style");
let root = document.createElement("div");
let body = document.getElementsByTagName("body")[0];
let card = document.createElement("section");
let html = `
<div class="card__wrapper">
    <img src="img/memoBrown.png" alt="User Image" class="card__user-img ">
    <div class="card__info">
        <span class="card__name">${data.fullName}</span>
        <span class="card__title">${data.position}</span>
    </div>

    <div class="card__socials">
        
    </div>
</div>
`;
let cssStyles = `
    .wrapper {
        background: #197278;
        min-height: 100vh;
    }

    .wrapper::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#c44536, #772e25);
        clip-path: circle(30% at left 70%);
    }
    .wrapper::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#edddd4, #c44536);
        clip-path: circle(20% at right 10%);
    }

    .card {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card__wrapper {
        height: 400px;
        padding: 20px;
        max-width: 300px;
        width: 100%;
        background: white;
        box-shadow: 0px 0px 62px 0px rgba(0, 0, 0, 0.22);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card__user-img {
        border: 2px solid #2c5eff;
        height: 70px;
        width: 70px;
        margin: 2rem 0 1.5rem;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
    }

    .card__info {
        margin-bottom: 0rem;
    }

    .card__name {
        text-align: center;
        display: block;
        font-weight: 600;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .card__title {
        display: block;
        font-size: 0.7rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    .card__icon {
        width: 200px;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid black;
        margin-bottom: 0.4rem;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
        cursor: pointer;
    }

    .card__icon-box {
        width: 25px;
        display: inline-block;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card__icon-title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .card__icon--fb {
        color: #2c5eff;
        border: 1px solid #2c5eff;
    }

    .card__icon--fb:hover {
        background: #2c5eff;
        color: white;
    }
    .card__icon--ig {
        color: #773fe7;
        border: 1px solid #773fe7;
    }

    .card__icon--ig:hover {
        background: #773fe7;
        color: white;
    }
    .card__icon--db {
        color: #f962b1;
        border: 1px solid #f962b1;
    }

    .card__icon--db:hover {
        background: #f962b1;
        color: white;
    }

    .card__icon--gl {
        color: #ff0000;
        border: 1px solid #ff0000;
    }

    .card__icon--gl:hover {
        background: #ff0000;
        color: white;
    }
`;
body.prepend(root);
root.classList.add("root");
card.classList.add("card");
root.prepend(card);
root.style.cssText = `
background: #197278;
min-height: 100vh;
`;
root.prepend(style);
style.innerHTML = cssStyles;
card.innerHTML = html;
let cardSocials = card.getElementsByClassName("card__socials")[0];
let temp = `
<div class="card__icon card__icon--fb">
            <span class="card__icon-box">
                <i class="fab fa-facebook-f"></i>
            </span>
            <span class="card__icon-title">
                Facebook
            </span>
        </div>`;

data.socials.forEach((item, index) => {
	let tempNode = document.createElement("div");
	tempNode.classList.add(`card__icon`, `card__icon--${item.id}`);
	tempNode.innerHTML = `
        <span class="card__icon-box">
            <i class="${item.icon}"></i>
        </span>
        <span class="card__icon-title">
            ${item.service}
        </span>    
    `;
	cardSocials.append(tempNode);
});
console.log(card);
