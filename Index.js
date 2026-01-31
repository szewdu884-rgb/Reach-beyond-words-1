// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
// Dark Mode Toggle (persistent)
const toggle = document.getElementById("themeToggle");
const html = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if (savedTheme) html.setAttribute("data-theme", savedTheme);
toggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
// Count Up
document.querySelectorAll("[data-count]").forEach(counter => {
  let started = false;
  window.addEventListener("scroll", () => {
    if (!started && counter.getBoundingClientRect().top < window.innerHeight) {
      started = true;
      let target = +counter.dataset.count;
      let count = 0;
      let interval = setInterval(() => {
        count += target / 100;
        counter.textContent = Math.floor(count);
        if (count >= target) {
          counter.textContent = target;
          clearInterval(interval);
        }
      }, 20);
    }
  });
});
