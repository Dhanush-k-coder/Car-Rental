const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn?.querySelector("i");

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks?.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", { ...scrollRevealOption, origin: "right" });
ScrollReveal().reveal(".header__content h2", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__content .section__description", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".header__form form", { ...scrollRevealOption, delay: 2000 });
ScrollReveal().reveal(".about__card", { ...scrollRevealOption, interval: 500 });

const tabs = document.querySelector(".deals__tabs");

tabs?.addEventListener("click", (e) => {
  const tabContents = document.querySelectorAll(".deals__container .tab__content");
  Array.from(tabs.children).forEach((item) => {
    item.classList.toggle("active", item.dataset.id === e.target.dataset.id);
  });
  tabContents.forEach((item) => {
    item.classList.toggle("active", item.id === e.target.dataset.id);
  });
});

ScrollReveal().reveal(".choose__image img", { ...scrollRevealOption, origin: "left" });
ScrollReveal().reveal(".choose__content .section__header", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".choose__content .section__description", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".choose__card", { duration: 1000, delay: 1500, interval: 500 });

ScrollReveal().reveal(".subscribe__image img", { ...scrollRevealOption, origin: "right" });
ScrollReveal().reveal(".subscribe__content .section__header", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".subscribe__content .section__description", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".subscribe__content form", { ...scrollRevealOption, delay: 1500 });

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

// Register Form Submission
document.getElementById("registerForm")?.addEventListener("submit", async function (e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  const result = await response.json();
  alert(result.message);
  if (response.ok) window.location.href = "login.html";
});

// Login Form Submission
document.getElementById("loginForm")?.addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const result = await response.json();
  if (response.ok) {
    localStorage.setItem("token", result.token);
    alert("Login Successful");
    window.location.href = "index.html";
  } else {
    alert(result.message);
  }
});
