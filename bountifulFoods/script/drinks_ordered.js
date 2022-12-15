// initialize display elements
//const todayDisplay = document.querySelector(".today");
const drinksOrdered = document.querySelector(".ordered");

// get the stored value in localStorage
let numOrder = Number(window.localStorage.getItem("order-ls"));

// determine if this is the first visit or display the number of visits.
if (order !== 0) {
	drinksOrdered.textContent = numOrder;
} else {
	drinksOrdered.textContent = ` This is your first drink! Enjoy it!`;
}

// increment the number of visits.
numOrder++;
// store the new number of visits value
localStorage.setItem("order-ls", numOrder);