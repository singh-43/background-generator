var css1 = document.querySelector("h3");
var css2 = document.querySelector("h4");
var color1 = document.querySelector(".col1");
var color2 = document.querySelector(".col2");
var color3 = document.querySelector(".col3");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var div = document.getElementById("new");
var body = document.getElementById("gradient");


function setGradient(){
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
	css1.textContent = `${body.style.background};`;
	css1.style.color = css2.style.color = h1.style.color = h2.style.color = div.style.color = color3.value;
	css2.textContent = `${h1.style.color};`;
}

css1.onclick = function() {
  document.execCommand("copy");
}

function copyText(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", css1.textContent);
    console.log(event.clipboardData.getData("text"))
  }
}

css1.addEventListener("copy",copyText)
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
color3.addEventListener("input",setGradient);
