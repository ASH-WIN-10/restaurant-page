function loadMenu() {
  const navMenu = document.querySelector("#navMenu");
  navMenu.classList.toggle("active");

  const content = document.querySelector("#content");
  const menuPage = document.createElement("div");
  menuPage.id = "menu";
  content.appendChild(menuPage);

  const mainHeading = document.createElement("span");
  mainHeading.id = "mainHeading";
  mainHeading.textContent = "Menu";

  const menuGrid = document.createElement("div");
  menuGrid.id = "menuGrid";

  menuGrid.innerHTML = `
    <div class="card">
      <div class="imageDiv" id="imageDiv1"></div>
      <div class="textDiv">
        <span>Affogato</span><span>₹310</span>
      </div>
    </div>
    <div class="card">
      <div class="imageDiv" id="imageDiv2"></div>
      <div class="textDiv">
      <span>Black Coffee</span><span>₹100</span></div>
    </div>
    <div class="card">
      <div class="imageDiv" id="imageDiv3"></div>
      <div class="textDiv">
        <span>Cappuccino</span><span>₹140</span>
      </div>
    </div>
    <div class="card">
      <div class="imageDiv" id="imageDiv4"></div>
      <div class="textDiv">
        <span>Cold Coffee</span><span>₹140</span>
      </div>
    </div>
    <div class="card">
      <div class="imageDiv" id="imageDiv5"></div>
      <div class="textDiv">
        <span>Espresso</span><span>₹110</span>
      </div>
    </div>
    <div class="card">
      <div class="imageDiv" id="imageDiv6"></div>
      <div class="textDiv">
        <span>Mocha</span><span>₹130</span>
      </div>
    </div>
  `;

  menuPage.append(mainHeading, menuGrid);
}

export { loadMenu };
