//Dates
const date = new Date();
const year = date.getFullYear();

//To add the year in the page
document.querySelector("#year").textContent =year;

// To add the last modified visit
const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;
