const memBers = "./scripts/spotlight.json";

fetch(memBers)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject["members"];
    for (let j = 0; j < 10; j++) {
      displaySpotlight(companies[randomIntFromInterval(0, companies.length -1)]);
    }
  });

  var i = 0;

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  let complist = [];

function displaySpotlight(company) {

  if (complist.includes(company.name)) {

  } else {

    if ((`${company.membershipLevel}` == "Gold Membership" || `${company.membershipLevel}` == "Silver Membership") && i < 3) {

      complist.push(company.name);

      i = i + 1;

      let card = document.createElement("div");
      let h2 = document.createElement("h2");
      let logo = document.createElement("img");
      let phone = document.createElement("p");
      let url = document.createElement("a");
      let address = document.createElement("p");

      h2.textContent = company.name;
      phone.textContent = company.phone;
      url.textContent = company.URL;
      address.textContent = company.addresses;
      url.setAttribute("href", `${company.URL}`);
  
      logo.setAttribute("src", company.imageurl);
      logo.setAttribute("alt", `${company.name} logo`);
    
      card.appendChild(h2);
      card.appendChild(logo);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(url);
      card.appendChild(document.createElement("hr"));
  
      document.querySelector(".spotlight").appendChild(card);
      

      if (i == 3) {
          card.setAttribute("class", "div1");
      }

  }

  }
  
  }

// fetch(memBers)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     const companies = jsonObject["members"]

//     let spotlightCompanies = [];
//     for (const company of Object.keys(companies)) {

//       console.log(company);
//         if (companies[company].membershipLevel.includes("Silver") || companies[company].membershipLevel.includes("Gold Membership")) {
//             //console.log(companies[company]);
//             spotlightCompanies.push(companies[company]);
//         }
//     }
//     console.log(spotlightCompanies);

//     let companiesIndex = Object.keys(spotlightCompanies);
//     console.log(companiesIndex);
//     let companiesIndexNumber = companiesIndex.map(string => {
//       return Number(string)
//     });

//     console.log(Math.floor(Math.random() * spotlightCompanies.length));
    
    



    // console.log(typeof companies);
    // console.log(companies.sort());