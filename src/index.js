import { loadHome } from "./loadHome";
import { loadMenu } from "./loadMenu";
import { loadContact } from "./loadContact";
import "./style.css";
import Logo from "./logo.svg";

function header() {
	const logoDiv = document.querySelector("#logo");

	const logoImg = new Image();
	logoImg.src = Logo;
	logoDiv.appendChild(logoImg);

	const logoText = document.createElement("span");
	logoText.textContent = "COFFEED";
	logoDiv.appendChild(logoText);
}

function removeClassAndElements() {
	const content = document.querySelector("#content");
	content.removeChild(content.firstChild);
	navButtons.forEach((button) => button.classList.remove("active"));
}

const navButtons = document.querySelectorAll("nav button");

navButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		removeClassAndElements();
		console.log(e.target.id);
		if (e.target.id === "navHome") loadHome();
		else if (e.target.id === "navMenu") loadMenu();
		else if (e.target.id === "navContact") loadContact();
	});
});

header();
loadHome();
