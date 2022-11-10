//const txt = '{"name":"John", "age":30, "city":"New York"}'
//const obj = JSON.parse(txt);
//document.getElementById("cards").innerHTML = obj.name + ", " + obj.age + "," + obj.city;

//const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
//const myArr = JSON.parse(text);
//document.getElementById("cards").innerHTML = myArr;

//const txt = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
//const obj = JSON.parse(txt);
//obj.birth = new Date(obj.birth);
//document.getElementById("cards").innerHTML = obj.name + "," + obj.birth;

//const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
//const obj = JSON.parse(text, function (key, value) {
//    if (key == "birth") {
//        return new Date(value);
//    } else {
//        return value;
//    }
//});
//document.getElementById("cards").innerHTML = obj.name + ", " + obj.birth; 

//If you need to include a function, write it as a string.
//const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
//const obj = JSON.parse(text);
//obj.age = eval("(" + obj.age +")"); 
//document.getElementById("cards").innerHTML = obj.name + ", " + obj.age();


const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    //let h4 = document.createElement('h4');
    let numOfchildren = document.createElement("p");


  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    //h4.textContent = ` ${prophet.order}th President of the Church of Jesus Christ of Latter Day Saints`;

    // Add Birth date and place
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    // Add Num Of Children
    numOfchildren.textContent = `Number of Children: ${prophet.numofchildren}`
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    //card.appendChild(h4);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(numOfchildren);
    card.appendChild(portrait);
    
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }