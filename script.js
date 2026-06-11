// Navbar Toggle
const navBar = document.getElementById("navBar");

function togglebtn() {
    navBar.classList.toggle("hidemenu");
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Search Form Validation
const searchForms = document.querySelectorAll("form");

searchForms.forEach(form => {
    form.addEventListener("submit", function (e) {

        const inputs = form.querySelectorAll("input");

        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert("Please fill all fields before searching.");
        }
    });
});

// Image Hover Animation
const images = document.querySelectorAll("img");

images.forEach(img => {

    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.05)";
        img.style.transition = "0.4s";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });

});

// Property Card Click Effect
const houses = document.querySelectorAll(".house");

houses.forEach(house => {

    house.addEventListener("click", () => {

        house.style.background = "#f5f5f5";

        setTimeout(() => {
            house.style.background = "transparent";
        }, 500);

    });

});

// CTA Button Alert
const ctaBtn = document.querySelector(".cta-btn");

if (ctaBtn) {

    ctaBtn.addEventListener("click", function (e) {

        e.preventDefault();

        alert("Thank you for your interest! More details coming soon.");

    });

}

// Contact Host Button
const contactBtn = document.querySelector(".contact-host");

if (contactBtn) {

    contactBtn.addEventListener("click", function (e) {

        e.preventDefault();

        alert("Host contacted successfully!");

    });

}

// Register Button
const registerBtns = document.querySelectorAll(".register-btn");

registerBtns.forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        alert("Registration feature coming soon!");

    });

});

// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "1000";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Current Year Auto Update
const footerText = document.querySelector(".footer p");

if (footerText) {

    const year = new Date().getFullYear();

    footerText.innerHTML =
        `Copyright © ${year}, Easy Tutorials.`;

}
