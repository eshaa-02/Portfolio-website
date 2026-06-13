document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       LOADER
    ========================== */
    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 800);
    });


    /* =========================
       SMOOTH SCROLL
    ========================== */
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });


    /* =========================
       ACTIVE NAV LINK ON SCROLL
    ========================== */
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        links.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });


    /* =========================
       NAVBAR BACKGROUND ON SCROLL
    ========================== */
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


    /* =========================
       SCROLL REVEAL ANIMATION
    ========================== */
    const revealElements = document.querySelectorAll(".section, .project-card, .skill");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


    /* =========================
       CONTACT FORM (BASIC)
    ========================== */
    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const inputs = form.querySelectorAll("input, textarea");

            inputs.forEach(input => input.value = "");

            alert("Message sent successfully 🚀");
        });
    }

});