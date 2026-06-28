/* =====================================
   ACTIVE NAVIGATION LINKS
===================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

function updateActiveNavLink() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNavLink);
updateActiveNavLink();


/* =====================================
   MOBILE MENU
===================================== */

const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector("nav ul");

if (menuIcon && navMenu) {

    menuIcon.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuIcon.classList.toggle("bx-menu");
        menuIcon.classList.toggle("bx-x");

    });

}

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuIcon) {
            menuIcon.classList.remove("bx-x");
            menuIcon.classList.add("bx-menu");
        }

    });

});


/* =====================================
   SCROLL ANIMATION
===================================== */

const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el) => {

    el.classList.add("hidden");
    observer.observe(el);

});


/* =====================================
   TYPING EFFECT
===================================== */

const roles = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Learner",
    "Building Cool Projects"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


/* =====================================
   SCROLL PROGRESS BAR
===================================== */

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* =====================================
   BACK TO TOP BUTTON
===================================== */

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.classList.add("show-btn");

        } else {

            backToTop.classList.remove("show-btn");

        }

    });

}

/* =====================================
   EMAILJS CONTACT FORM
===================================== */

emailjs.init("9VS1F82jK75lOXzqZ");

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.send("bigslim1", "template_60d9bic", {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            title: document.getElementById("title").value,
            message: document.getElementById("message").value
        })

        .then(function () {

            alert("✅ Your message has been sent successfully!");

            contactForm.reset();

        })

        .catch(function (error) {

            console.error(error);

            alert("❌ Failed to send message. Please try again.");

        });

    });

}
