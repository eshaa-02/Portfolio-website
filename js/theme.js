const themeBtn = document.getElementById("themeBtn");
const body = document.body;

// Load saved theme on start
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        body.classList.add("light-mode");
        themeBtn.textContent = "🌙";
    } else {
        body.classList.remove("light-mode");
        themeBtn.textContent = "☀️";
    }
}

// Toggle theme
function toggleTheme() {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌙";
    } else {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "☀️";
    }
}

// Event listener
themeBtn.addEventListener("click", toggleTheme);

// Init
document.addEventListener("DOMContentLoaded", loadTheme);