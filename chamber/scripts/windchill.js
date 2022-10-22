const tC = 10   ;
const skmH = 5;

document.querySelector('#data_weather').textContent = tC;
document.querySelector('#wind_speed').textContent = skmH;

const tF = tC * (9/5) + 32;
const smH = skmH / 1.609;

console.log(tF);
console.log(smH);

if (tF <= 50 && smH > 3) {
const f = 35.74 + 0.6215 * tF - 35.75 * (smH**0.16) + 0.4275 * tF * (smH**0.16)
document.querySelector('#wind_chill').textContent = f.toFixed(1);
}
else {
  document.querySelector('#wind_chill').textContent = 'N/A';
}