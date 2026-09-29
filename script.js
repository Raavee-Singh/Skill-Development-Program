const button = document.querySelector(".button");

button.addEventListener("click", function (event) {
    event.preventDefault();

    alert("Let's start building healthier habits!");

    document.querySelector("#lifestyle").scrollIntoView({
        behavior: "smooth"
    });
});


const sections = document.querySelectorAll("div[id]");
const navigationLinks = document.querySelectorAll(".navigation a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(function (link) {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + currentSection) {
            link.style.color = "#8b5e34";
        }
    });
});


const footerText = document.querySelector(".footer p");

const currentYear = new Date().getFullYear();

footerText.innerHTML =
    "© " + currentYear +
    " Health Awareness Website | Stay Healthy • Stay Happy";