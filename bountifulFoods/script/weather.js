//const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=55d0241207a1bebb3277308ad7cf6bca'
// const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=55d0241207a1bebb3277308ad7cf6bca'
// async function apiFetch() {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data); // this is for testing the call
//         displayResults(data);
//       } else {
//           throw Error(await response.text());
//       }
//     } catch (error) {
//         console.log(error);
//     }
// }
  
// apiFetch();

// /*------temperature ------****/

// /*display the temp obtained, the icon and the description*/
//   function  displayResults(weatherData) {

//     let section = document.createElement('section');
//     let currentTemp = document.createElement('p');
//     let weatherIcon = document.createElement('img');
//     let captionDesc = document.createElement('figcaption');
//     let windSpeed = document.createElement('p');
//     let windChill = document.createElement('p');
 
//     const fahrenheitTemp = weatherData.main.temp.toFixed(0);
//     currentTemp.innerHTML = `Temperature <strong>${fahrenheitTemp}ºF</strong>`;
  
//     const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
//     const desc = weatherData.weather[0].description;
        
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     captionDesc.textContent =capitalize (desc);

  
//     const speed = weatherData.wind.speed;
//     if (fahrenheitTemp <= 50 && speed > 3) {
//         const windC = windChill(fahrenheitTemp,speed);
//         windChill.textContent = `Wind Chill: ${windC.toFixed(0)}`;
//     }
//     else {
//       windChill.textContent = `Wind Chill: N/A`;
//     }

//     windSpeed.innerHTML = `Speed: ${speed}`;
//     // Add/append the section
//     section.appendChild(currentTemp);
//     section.appendChild(weatherIcon);
//     section.appendChild(captionDesc);
//     section.appendChild(windSpeed);
//     section.appendChild(windChill);

//     // Add/append the section element
//     document.querySelector('div#weatherSection').appendChild(section);
//   }

// /* calculate the wind chill*/
// function windChill(fahrenheitTemp, speed) {
//   const fahrenheit = 35.74 + 0.6215 * fahrenheitTemp - 35.75 * (speed**0.16) + 0.4275 * fahrenheitTemp * (speed**0.16)
//   return fahrenheit
// }
// /* capitalize the figcaption */
// function capitalize(string) {
    
//     string = string.split(" ");

//     for (let i = 0; i < string.length; i++) {
//         string[i] = string[i][0].toUpperCase() + string[i].substr(1);
//     }
//     return string.join(" ");
// }

//const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=436149f23f7acd351f99d168d82eda92";
const url ="https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=436149f23f7acd351f99d168d82eda92";
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayResults(weatherData) {

    let weatherIcon = document.createElement('img');
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    //weatherIcon.setAttribute('alt', desc);
    document.getElementById("temperature").innerHTML = "Temperature: " + weatherData.list[0].main.temp.toFixed(0) + "Fº";
    document.getElementById("condition").innerHTML = "Condition: " + weatherData.list[0].weather[0].description;
    document.getElementById("humidity").innerHTML = "Humidity: " + weatherData.list[0].main.humidity;
    document.getElementById("day").innerHTML = "Thursday: " + weatherData.list[0].dt_txt;


    let weatherIcon1 = document.createElement('img');
    const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.list[7].weather[0].icon}.png`;
    const desc1 = weatherData.list[0].weather[0].description;
    weatherIcon1.setAttribute('src', iconsrc1);
    //weatherIcon1.setAttribute('alt', desc1);
    document.getElementById("temperature1").innerHTML = "Temperature: " + weatherData.list[7].main.temp.toFixed(0) + "Fº";
    document.getElementById("condition1").innerHTML = "Condition: " + weatherData.list[7].weather[0].description;
    document.getElementById("humidity1").innerHTML = "Humidity: " + weatherData.list[7].main.humidity;
    document.getElementById("day1").innerHTML = "Friday: " + weatherData.list[7].dt_txt;


    let weatherIcon2 = document.createElement('img');
    const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.list[14].weather[0].icon}.png`;
    const desc2 = weatherData.list[0].weather[0].description;
    weatherIcon2.setAttribute('src', iconsrc2);
    //weatherIcon2.setAttribute('alt', desc2);
    document.getElementById("temperature2").innerHTML = "Temperature: " + weatherData.list[14].main.temp.toFixed(0) + "Fº";
    document.getElementById("condition2").innerHTML = "Condition: " + weatherData.list[14].weather[0].description;
    document.getElementById("humidity2").innerHTML = "Humidity: " + weatherData.list[14].main.humidity;
    document.getElementById("day2").innerHTML = "Saturday: " + weatherData.list[14].dt_txt;

    document.getElementById("icons1").appendChild(weatherIcon);
    document.getElementById("icons2").appendChild(weatherIcon1);
    document.getElementById("icons3").appendChild(weatherIcon2);
}