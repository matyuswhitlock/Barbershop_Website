// ============================
// File: js/main.js
// Vintage Barbershop Project
// ============================
// ----- DOM Elemeents -----
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink"); // we won't be using an actual phone feature
const heading = document.getElementById("heroHeading");
const featureGrid = document.getElementById("featureGrid");

// ----- Services Data (Array of Objetcs) -----
const servives = [
{
title: "Classic Haircut",
text: "Timeless cuts with modern precision tailored to your style.",
image: "assests/images/feature-1.jpg"    
},
{
 title: "Beard Trim",
text: "Shape and line-up your beard for a clean, sharp finish.",
image: "assests/images/feature-2.jpg"     
},
{
 title: "Straight razor Shave",
text: "Hot towel treatment with a smooth traditional shave.",
image: "assests/images/feature-3.jpg"     
}
];

// ----- Render Features using forEach -----
const renderFeatures = () => {
if (!featureGrid) return;
services.forEach(service => {
 const card = document.createElement("article"); 
 card.classList.add ("feature-card");  
 card.innerHTML = `
 <img src="$(service.image)" alt="$(servvice.title)" class="feature-img"
 />
 <h3 class="feature-title">${service.title}</h3>
 <p class="feature-text">${service.text}</p>
 `;
 featureGrid.appendChild(card);
});    
};
// ----- Helpers / Functions
// Update footer year automatically
const setCurrentYear = () => {
    const now = new Date();
    yearEl.textContent = now.getFullYear();
}; 

// Toggle mobile menu open/close
let isMenuOpen = false;
const toggleMobileMenu =  () => {
    if (!mobileMenu) return;
    if (isMenuOpen === false) {
      mobileMenu.classList.add("is-open");
      isMenuOpen = true;
    } else {
       mobileMenu.classList.remove("is-open"); 
       isMenuOpen= false;
    }
};

// Close mobile menu (used when a link is clicked)
const closeMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
};

// Reusable funtion with parameters (practice patterns)
const updateHeadingText = (newText) => {
    if (!heading) return;
    heading.textContent = newText;
}

// ----- Event Listeners -----
// 1) Set year on page load
setCurrentYear();

// 2) Hamburger menu toggle
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        toggleMobileMenu();
    });
} 

// 3) Close mobile menu when a mobile link is clicked ( event delegation)
if(mobileMenu) {
    mobileMenu.addEventListener("click", (event) => { //adding eventListeners to the closeMobileMenu()
        //If they clicked an <a> inside the menu, close it
        if(event.target.tagName === "A") { // Event represents the what was triggereed, target is what was
            //triggered, tagName is the specfic element name that was targeted
            closeMobileMenu();
        }         
});
}

//4) CTA Button: "Book Now" (plaaceholder behavior)
if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        updateHeadingText("Booking coming next - great choice!");
    });
}

// 5) call Button: try to use the phone number in the footer
if (callBtn) {
    callBtn.addEventListener("click", () => {
        //If you later set phoneLink to tel:, this will work perfectly.
        //For now, this is a beginner-friendly placeholder.
        if (phoneLink) {
            updateHeadingtext("Call us at" + phoneLink.textContent);
        } else {
            updateHeadingText("Call feature coming next!");
        }
    });
}
