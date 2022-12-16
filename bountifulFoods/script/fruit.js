const requestFile = './script/fruit.json';
const label = document.querySelector(".fruit_options");

fetch(requestFile)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const fruits = jsonObject['fruits'];
    fruits.forEach(displayInputs);
  });

function displayInputs(input) {
    let option = document.createElement("option");
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    let nutritions1 = document.createElement("p");
    option.textContent = input.name;
    option1.textContent = input.name;
    option2.textContent = input.name;
    nutritions1.textContent = input.nutritions;
    document.querySelector(".fruit_options").appendChild(option);
    document.querySelector(".fruit_options1").appendChild(option1);
    document.querySelector(".fruit_options2").appendChild(option2);

    //Message
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const fruit1 = document.getElementById("fruit1");
    const fruit2 = document.getElementById("fruit2");
    const fruit3 = document.getElementById("fruit3");
    const notes = document.getElementById("notes");



    const element = document.forms[0];

    element.addEventListener("submit", function(form) {
    form.preventDefault();

    name.innerHTML = "Name:" + element.fname.value;
    email.innerHTML = "Email:" + element.email.value;
    phone.innerHTML = "Phone:" + element.phone.value;
    fruit1.innerHTML = "Fruit:" + element.subject1.value;
    fruit2.innerHTML = "Fruit:" + element.subject2.value;
    fruit3.innerHTML = "Fruit:" + element.subject3.value;
    notes.innerHTML = "Special Instructions: " + element.description.value;

    //document.querySelector("#nut").appendChild(nutritions1);
})

}

 // initialize display elements
    //const todayDisplay = document.querySelector(".today");
    const drinksOrdered = document.querySelector(".ordered");

    // get the stored value in localStorage
    let numOrder = Number(window.localStorage.getItem("order-ls"));

    // determine if this is the first visit or display the number of visits.
    if (numOrder !== 0) {
      drinksOrdered.textContent = numOrder;
    } else {
      drinksOrdered.textContent = ` This is your first drink! Enjoy it!`;
    }

    // increment the number of visits.
    numOrder++;
    // store the new number of visits value
    localStorage.setItem("order-ls", numOrder);
