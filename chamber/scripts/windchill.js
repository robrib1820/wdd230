const skmH = 10;
const tempC = 5;

document.querySelector('#data_weather').textContent = tempC;
document.querySelector('#wind_speed').textContent = skmH;

const tempF = tempC * (9/5) + 32;
const smH = skmH / 1.609;

console.log(tempF);
console.log(smH);

if (tempF <= 50 && smH > 3) {
    const fah = 35.74 + 0.6215 * tempF - 35.75 * (smH**0.16) + 0.4275 * tempF * (smH**0.16)
    document.querySelector('#wind_chill').textContent = fah.toFixed(1);
} else {
    document.querySelector('#wind_chill').textContent = 'N/A';
}