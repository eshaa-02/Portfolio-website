const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;

// Track mouse position
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

// Smooth follower animation
function animateFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;

    follower.style.transform = `translate(${followerX}px, ${followerY}px)`;

    requestAnimationFrame(animateFollower);
}

animateFollower();

// Hover effect on links & buttons
const hoverTargets = document.querySelectorAll("a, button, .skill, .project-card");

hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
        follower.classList.add("active");
    });

    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
        follower.classList.remove("active");
    });
});