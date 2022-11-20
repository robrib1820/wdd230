const url = 'https://api.openweathermap.org/data/2.5/weather?q=Londrina&units=imperial&appid=436149f23f7acd351f99d168d82eda92'

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

/*------temperature ------****/

/*display the temp obtained, the icon and the description*/
  function  displayResults(weatherData) {

    let section = document.createElement('section');
    let currentTemp = document.createElement('p');
    let weatherIcon = document.createElement('img');
    let captionDesc = document.createElement('figcaption');
    let windSpeed = document.createElement('p');
    let windChill = document.createElement('p');
 
    const fahrenheitTemp = weatherData.main.temp.toFixed(0);
    currentTemp.innerHTML = `Temperature <strong>${fahrenheitTemp}ºF</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
        
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent =capitalize (desc);

  
    const speed = weatherData.wind.speed;
    if (fahrenheitTemp <= 50 && speed > 3) {
        const windC = windChill(fahrenheitTemp,speed);
        windChill.textContent = `Wind Chill: ${windC.toFixed(0)}`;
    }
    else {
      windChill.textContent = `Wind Chill: N/A`;
    }

    windSpeed.innerHTML = `Speed: ${speed}`;
    // Add/append the section
    section.appendChild(currentTemp);
    section.appendChild(weatherIcon);
    section.appendChild(captionDesc);
    section.appendChild(windSpeed);
    section.appendChild(windChill);

    // Add/append the section element
    document.querySelector('section.weatherSection').appendChild(section);
  }

/* calculate the wind chill*/
function windChill(fahrenheitTemp, speed) {
  const fahrenheit = 35.74 + 0.6215 * fahrenheitTemp - 35.75 * (speed**0.16) + 0.4275 * fahrenheitTemp * (speed**0.16)
  return fahrenheit
}
/* capitalize the figcaption */
function capitalize(string) {
    
    string = string.split(" ");

    for (let i = 0; i < string.length; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].substr(1);
    }
    return string.join(" ");
}
