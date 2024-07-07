import loadHome from "./loadHome";
import loadMenu from "./loadMenu";
import loadContact from "./loadContact";
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

header();
