import Coffee from "./coffee.svg";

function loadHome() {
	const content = document.querySelector("#content");
	const homePage = document.createElement("div");
	content.appendChild(homePage);
	homePage.id = "home";

	const heroDiv = document.createElement("div");
	const heroText = document.createElement("span");
	heroText.id = "heroText";
	heroText.textContent = "Have you got your cup of coffee today?";

	const coffeeImg = document.createElement("img");
	coffeeImg.src = Coffee;
	heroDiv.append(heroText, coffeeImg);

	homePage.appendChild(heroDiv);

	const text1 = document.createElement("span");
	text1.textContent = "Did you not? Try ours👇";
	homePage.appendChild(text1);

	const orderBtn = document.createElement("button");
	orderBtn.textContent = "Order Now";
	orderBtn.className = "primaryBtn";
	homePage.appendChild(orderBtn);

	// const sectionBreak = document.createElement("hr");
	// homePage.appendChild(sectionBreak);

	// const text2 = document.createElement("span");
	// text2.textContent = "Or explore your taste in our menu!";
	// homePage.appendChild(text2);

	// const exploreBtn = document.createElement("button");
	// exploreBtn.textContent = "Explore";
	// exploreBtn.className = "primaryBtn";
	// homePage.append(exploreBtn);
}

export default loadHome();
