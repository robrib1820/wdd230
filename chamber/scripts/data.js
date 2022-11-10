const requestFile = 'data.js';
const cards = document.querySelector('.cards');

fetch(requestFile)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const cards = jsonObject['cards'];
    cards.forEach(displayCards);
  });

  function displayCards(card) {
    // Create elements to add to the document
    let cards = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phoNe = document.createElement('p');
    let url = document.createElement('p');
    let mebLevel = document.createElement('p');
    let portrait = document.createElement('img');


  
    // Change the textContent property of the h2 element to contain the prophet's full name
    name.textContent = `${card.name}`;

    // Add Birth date and place
    address.textContent = `Address: ${card.addresses}`;
    phoNe.textContent = `Phone: ${card.phone}`;
    url.textContent = `URL: ${URLsite}`;
    mebLevel.textContent = `Membership Level: ${membershipLevel}`;
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', card.imageurl);
    portrait.setAttribute('alt', `Portrait of ${card.name} company.`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    cards.appendChild(name);
    cards.appendChild(address);
    cards.appendChild(phoNe);
    cards.appendChild(url);
    cards.appendChild(mebLevel);
    cards.appendChild(portrait);
    
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(cards);
  }
