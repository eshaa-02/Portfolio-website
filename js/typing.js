const typingText = document.querySelector(".typing-text");

const roles = [
    "Frontend Developer",
    "UI/UX Enthusiast",
    "JavaScript Developer",
    "Web Designer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentRole.substring(0, charIndex);

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = 1200; // pause before deleting
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);