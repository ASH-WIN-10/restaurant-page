function loadContact() {
  const navContact = document.querySelector("#navContact");
  navContact.classList.toggle("active");

  const content = document.querySelector("#content");
  const contactPage = document.createElement("div");
  contactPage.id = "contact";
  content.appendChild(contactPage);

  const mainHeading = document.createElement("span");
  mainHeading.id = "mainHeading";
  mainHeading.textContent = "Contact Us";

  const infoContainer = document.createElement("div");
  infoContainer.className = "container";

  const hoursDiv = document.createElement("div");
  hoursDiv.className = "highlightCard";
  hoursDiv.innerHTML = `
    <div>
      <span>Hours</span>
    </div>
    <div>
      <span>Monday: 12:00 - 22:00</span>
      <span>Tuesday: 12:00 - 22:00</span>
      <span>Wednesday: 12:00 - 22:00</span>
      <span>Thursday: 12:00 - 22:00</span>
      <span>Friday: 12:00 - 22:00</span>
      <span>Saturday: 12:00 - 23:30</span>
      <span>Sunday: 12:00 - 23:30</span>
    </div>
  `;

  const contactInfoContainer = document.createElement("div");
  contactInfoContainer.className = "highlightCard";
  contactInfoContainer.innerHTML = `
    <div>
      <span>Contact Info</span>
    </div>
    <div>
      <span>+91 123 456 789</span>
      <span>coffeed@fakeEmail.com</span>
    </div>
  `;

  infoContainer.append(hoursDiv, contactInfoContainer);

  const addressContainer = document.createElement("div");
  addressContainer.className = "container";
  const mapDiv = document.createElement("div");
  mapDiv.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1755.5382500359249!2d75.59047515938566!3d28.356536688149273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sin!4v1721755435299!5m2!1sen!2sin" width="350" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  const addressText = document.createElement("div");
  addressText.className = "highlightCard";
  addressText.innerHTML = `
    <div>
      <span>Address</span>
    </div>
    <div>
      <span>123 Street</span>
      <span>Jaipur, Rajasthan</span>
      <span>India</span>
    </div>
  `;
  addressContainer.append(mapDiv, addressText);

  contactPage.append(mainHeading, infoContainer, addressContainer);
}

export { loadContact };
