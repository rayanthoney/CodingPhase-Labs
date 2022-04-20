// CREATE AN OBJECT TO KEEP TRACK OF WHAT HAPPENS INSIDE THE FORM.
let state = {
	price: getNumber(document.querySelectorAll('[name="price"]')[0].value),
	loan_years: document.querySelectorAll('[name="loan_years"]')[0].value,
	down_payment: document.querySelectorAll('[name="down_payment"]')[0].value,
	interest_rate: document.querySelectorAll('[name="interest_rate"]')[0].value,
	property_tax: document.querySelectorAll('[name="property_tax"]')[0].value,
	home_insurance: document.querySelectorAll('[name="home_insurance"]')[0].value,
	hoa: document.querySelectorAll('[name="hoa"]')[0].value,
};
//  DECLARED THE VARIABLES
let totalLoan,
	totalMonths,
	monthlyInterest = 200,
	monthlyPrincipalInterest = 330,
	monthlyPopertyTaxes = 355,
	monthlyHomeInsurance = 100,
	monthlyHOA = 100,
	labels = ["Principal & Interest", "Property Tax", "Home Insurance", "HOA"],
	backgroundColor = [
		"rgba(255, 99, 132, 0.2)",
		"rgba(54, 162, 235, 0.2)",
		"rgba(255, 206, 86, 0.2)",
		"rgba(75, 192, 192, 0.2)",
		"rgba(153, 102, 255, 0.2)",
		"rgba(255, 159, 64, 0.2)",
	];
borderColor = [
	"rgba(255, 99, 132, 1",
	"rgba(54, 162, 235, 1",
	"rgba(255, 206, 86, 1",
	"rgba(75, 192, 192, 1",
	"rgba(153, 102, 255, 1",
	"rgba(255, 159, 64, 1",
];
// FUNCTION TO TURN STRINGS INTO A NUMBER BY REMOVING CHARACTERS.
function getNumber(str) {
	return Number(str.replace(/[^0-9\.-]+/g, ""));
}
// EXAMPLE FROM CHARTS JS TO CREATE A GRAPH CHART.
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
	type: "doughnut",
	data: {
		labels: labels,
		datasets: [
			{
				label: "# of Votes",
				data: [
					monthlyPrincipalInterest,
					monthlyPopertyTaxes,
					monthlyHomeInsurance,
					monthlyHOA,
				],
				backgroundColor: backgroundColor,
				borderColor: borderColor,
				borderWidth: 1,
			},
		],
	},
});
myChart.options.animation = false;

// ADD EVENT LISTENER TO INPUTS
let i;
let inputTexts = document.getElementsByClassName("form-group__textInput");
for (i = 0; i < inputTexts.length; i++) {
	inputTexts[i].addEventListener("input", updateInputStates);
}

function updateInputStates(event) {
	let name = event.target.name;
	let value = event.target.value;
	if (name == "price") {
		value = getNumber(value);
	}
	state = {
		...state,
		[name]: value,
	};
	console.log(state);
}

console.log(inputTexts);
