const requestFile = './scripts/data.json';
const carDs = document.querySelector('.cards');

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


  
    // Change the textContent property of the elements to contain the values
    name.textContent = card.name;
    address.textContent = `Address: ${card.addresses}`;
    phoNe.textContent = `Phone: ${card.phone}`;
    url.textContent = `URL: ${card.URL}`;
    mebLevel.textContent = `Membership Level: ${card.membershipLevel}`;
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', card.imageurl);
    portrait.setAttribute('alt', `Portrait of ${card.name} company.`);
    portrait.setAttribute('loading', 'lazy');
  
    // Append the section(card) with the elements created
    cards.appendChild(name);
    cards.appendChild(portrait);
    cards.appendChild(address);
    cards.appendChild(phoNe);
    cards.appendChild(url);
    cards.appendChild(mebLevel);
    
    
  
    // Append the cards
    document.querySelector('div.cards').appendChild(cards);
  }
