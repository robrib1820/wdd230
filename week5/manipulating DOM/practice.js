const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network;"
link.href = 'https://developer.mozilla.org';

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara =document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara);

//To remove, I can use both methods

/*sect.removeChild(linkPara);
//linkPara.remove();
//linkPara.parentNode.removeChild(linkPara);
para.style.color = "orange"
para.style.backgroundColor = "black"
para.style.padding = "10px"
para.style.textAlign = "center"*/
para.setAttribute("class", "highlight");
const paragraph = document.createTextNode("I am learning JavaScript vey well!")
const newParagraph = document.querySelector("paragraph")
newParagraph.appendChild(paragraph);