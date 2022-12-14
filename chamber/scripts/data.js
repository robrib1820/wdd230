const requestFile = './scripts/data.json';
const carDs = document.querySelector('.cards');
const lists = document.querySelector('.lists');

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
    let lists = document.createElement('section');

    let name = document.createElement('h2');
    let lName = document.createElement('h2');
    
    let address = document.createElement('p');
    let lAddress = document.createElement('p');

    let phoNe = document.createElement('p');
    let lPhone = document.createElement('p');
    
    let url = document.createElement('p');
    let lUrl = document.createElement('p');

    let mebLevel = document.createElement('p');
    let lmebLevel = document.createElement('p');
    let portrait = document.createElement('img');


  
    // Change the textContent property of the elements to contain the values
    name.textContent = card.name;
    address.textContent = card.addresses;
    phoNe.textContent = card.phone;
    url.textContent = card.URL;
    mebLevel.textContent = card.membershipLevel;
    //list content
    lName.textContent = card.name;
    lAddress.textContent = card.addresses;
    lPhone.textContent = card.phone;
    lUrl.textContent = card.URL;
    lmebLevel.textContent = card.membershipLevel;
    
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

    // Append list elements
    lists.appendChild(lName);
    lists.appendChild(lAddress);
    lists.appendChild(lPhone);
    lists.appendChild(lUrl);
    lists.appendChild(lmebLevel);
    
    
  
    // Append the cards
    document.querySelector('div.cards').appendChild(cards);
    document.querySelector('div.lists').appendChild(lists);
  }

function view(option){
  if (option == 'large'){
      document.querySelector(".cards").style.display=""; 
      document.querySelector(".lists").style.display="none"; 
        
  }else if (option == "small"){
    document.querySelector(".lists").style.display="";
    document.querySelector(".cards").style.display="none";
  }
}
