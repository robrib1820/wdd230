function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

//date 
const datefield = document.querySelector("#date")
const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(now);
datefield.innerHTML = `${fullDate}`