// Navbar Toggle
const navBar = document.getElementById("navBar");

function togglebtn() {
    navBar.classList.toggle("hidemenu");
}

// Search Form Validation
const forms = document.querySelectorAll("form");

forms.forEach(form => {
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input");

        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
            }
        });

        if (!isValid) {
            alert("Please fill all fields.");
        } else {
            alert("Search Successful!");
        }

    });
});

// Image Hover Effect
const images = document.querySelectorAll("img");

images.forEach(img => {

    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.05)";
        img.style.transition = "0.4s ease";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });

});

// House Click Effect
const houses = document.querySelectorAll(".house");

houses.forEach(house => {

    house.addEventListener("click", () => {

        house.style.backgroundColor = "#f5f5f5";

        setTimeout(() => {
            house.style.backgroundColor = "transparent";
        }, 500);

    });

});

// Register Button
const registerBtns = document.querySelectorAll(".register-btn");

registerBtns.forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        alert("Registration Feature Coming Soon!");

    });

});

// CTA Button
const ctaBtn = document.querySelector(".cta-btn");

if (ctaBtn) {

    ctaBtn.addEventListener("click", function (e) {

        e.preventDefault();

        alert("Thank you for your interest!");

    });

}

// Contact Host Button
const contactBtn = document.querySelector(".contact-host");

if (contactBtn) {

    contactBtn.addEventListener("click", function (e) {

        e.preventDefault();

        alert("Host Contacted Successfully!");

    });

}

// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ff5361";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

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

// Footer Year Auto Update
const footerText = document.querySelector(".footer p");

if (footerText) {

    footerText.innerHTML =
        `Copyright © ${new Date().getFullYear()}, Easy Tutorials.`;

}
