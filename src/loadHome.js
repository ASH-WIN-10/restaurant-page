import Coffee from "./coffee.svg";

function loadHome() {
	const navHome = document.querySelector("#navHome");
	navHome.classList.add("active");

	const content = document.querySelector("#content");
	const homePage = document.createElement("div");
	content.appendChild(homePage);
	homePage.id = "home";

	// Hero
	const heroDiv = document.createElement("div");
	const heroText = document.createElement("span");
	heroText.id = "heroText";
	heroText.textContent = "Have you got your cup of coffee today?";

	const coffeeImg = document.createElement("img");
	coffeeImg.src = Coffee;
	heroDiv.append(heroText, coffeeImg);

	// Container 1
	const container1 = document.createElement("div");
	container1.className = "container";

	const text1 = document.createElement("span");
	text1.textContent = "Did you not? Try ours 👉";

	const orderBtn = document.createElement("button");
	orderBtn.textContent = "Order Now";
	orderBtn.className = "primaryBtn";
	container1.append(text1, orderBtn);

	// Section Break
	const sectionBreak = document.createElement("hr");

	// Container 2
	const container2 = document.createElement("div");
	container2.className = "container";

	const text2 = document.createElement("span");
	text2.textContent = "Or explore your taste in our menu!";

	const exploreBtn = document.createElement("button");
	exploreBtn.textContent = "Explore";
	exploreBtn.className = "primaryBtn";

	container2.append(text2, exploreBtn);

	// Appending elements in the homePage
	homePage.append(heroDiv, container1, sectionBreak, container2);
}

export { loadHome };
