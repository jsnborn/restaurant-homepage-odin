import "./style.css";
import bigmac from "./images/bigmac.jpg";
import crispy from "./images/crispy.jpg";

function createNavBar() {
  const nav = document.createElement("nav");
  nav.className = "navbar";

  nav.innerHTML = `
      <div class="logo">JayD's</div>
      <div class="nav-links">
        <a href="#" class="nav-link" data-section="menu">Menu</a>
        <a href="#" class="nav-link" data-section="rewards">Rewards</a>
        <a href="#" class="nav-link" data-section="deals">Deals</a>
        <a href="#" class="nav-link" data-section="about">About</a>
      </div>
      <button class="order-btn">Order Now</button>
    `;

  return nav;
}

function createHeroSection() {
  const hero = document.createElement("section");
  hero.className = "hero";

  hero.innerHTML = `
      <div class="hero-image">
        <img src="${crispy}" alt="Crispy Strips">
      </div>
      <div class="hero-text">
        <h1>Jay's Crispy Sandwich</h1>
        <p>The next big thing in dipping is here. Juicy and peppery with Creamy Chili Dip.</p>
        <button class="cta-btn">Order in the App</button>
      </div>
    `;

  return hero;
}

function createPromoSection() {
  const promo = document.createElement("section");
  promo.className = "promo";

  promo.innerHTML = `
      <div class="promo-image">
        <img src="${bigmac}" alt="Big Mac">
      </div>
      <div class="promo-text">
        <h2>Free Big Jay® w/ $1 Purchase</h2>
        <p>Download the app and get a free Big Jay with your first purchase of $1 or more!</p>
        <button class="cta-btn">Get a Free Big Jay in the App</button>
      </div>
    `;

  return promo;
}

// Function to display content for each section
function displayContent(section) {
  const contentContainer = document.querySelector(".content-container");

  // Clear existing content
  contentContainer.innerHTML = "";

  switch (section) {
    case "menu":
      contentContainer.innerHTML = `
          <h2>Menu</h2>
          <p>Our menu offers a variety of delicious items.</p>
          <ul>
            <li>Classic Crispy Sandwich</li>
            <li>Big Jay Burger</li>
            <li>Fries</li>
            <li>Soft Drinks</li>
          </ul>
        `;
      break;
    case "rewards":
      contentContainer.innerHTML = `
          <h2>Rewards</h2>
          <p>Earn points with every purchase and get exclusive rewards!</p>
        `;
      break;
    case "deals":
      contentContainer.innerHTML = `
          <h2>Deals</h2>
          <p>Check out our latest deals and special offers.</p>
        `;
      break;
    case "about":
      contentContainer.innerHTML = `
          <h2>About Us</h2>
          <p>JayD's is all about serving the best crispy sandwiches, made with care and love.</p>
        `;
      break;
    default:
      contentContainer.innerHTML = "<p>Select a section to learn more.</p>";
  }
}

// Create a container for dynamic content
function createContentContainer() {
  const contentContainer = document.createElement("div");
  contentContainer.className = "content-container";
  contentContainer.innerHTML = "<p>Select a section to learn more.</p>";

  return contentContainer;
}

// Append elements to the body
document.body.appendChild(createNavBar());
document.body.appendChild(createHeroSection());
document.body.appendChild(createPromoSection());
document.body.appendChild(createContentContainer());

// Ensure the DOM is loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Add event listener to handle navigation clicks
  document.querySelector(".nav-links").addEventListener("click", (e) => {
    if (e.target && e.target.matches(".nav-link")) {
      e.preventDefault(); // Prevent the default link behavior (no page reload)
      const section = e.target.getAttribute("data-section");
      displayContent(section);
    }
  });
});
