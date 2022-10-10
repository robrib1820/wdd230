function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("btn-mobile").classList.toggle("active");
}

const x = document.getElementById("btn-mobile")
x.onclick = toggleMenu;

//date 
const datefield = document.querySelector("#date")
const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(now);
datefield.innerHTML = `${fullDate}`