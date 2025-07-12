const heroName = "Kumar Harsh"; 
const heroTitle = document.getElementById("hero-title");
let idx = 0;
function animateHeroName() {
  if (idx < heroName.length) {
    const span = document.createElement('span');
    span.textContent = heroName[idx] === " " ? "\u00A0" : heroName[idx];
    span.style.opacity = 0;
    heroTitle.appendChild(span);
    setTimeout(() => {
      span.style.opacity = 1;
      span.style.transition = "opacity 0.36s, transform 0.36s";
      span.style.transform = "translateY(0)";
    }, 70);
    idx++;
    setTimeout(animateHeroName, 85);
  } else {
    heroTitle.style.opacity = 1;
    setTimeout(() => {
      document.getElementById("hero-subtitle").style.opacity = 1;
      document.getElementById("hero-subtitle").style.transform = "translateY(0)";
    }, 500);
  }
}
window.addEventListener("DOMContentLoaded", animateHeroName);

// Navbar scroll
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  // Highlight current section in navbar
  let sections = ["hero","about","skills","projects","experience","contact"];
  let current = "hero";
  for (const sec of sections) {
    const el = document.getElementById(sec);
    if (el && el.getBoundingClientRect().top - 90 < 0) {
      current = sec;
    }
  }
  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

// Smooth scroll
navLinks.forEach(a => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      target.scrollIntoView({behavior: "smooth"});
    }
  });
});

// Skills animated bars
function animateSkills() {
  document.querySelectorAll('.bar').forEach(bar => {
    bar.style.width = bar.getAttribute('data-level') + "%";
  });
}
let skillsAnimated = false;
window.addEventListener("scroll", () => {
  if (!skillsAnimated) {
    const skillsSection = document.getElementById("skills");
    if (skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
      animateSkills();
      skillsAnimated = true;
    }
  }
});

// Project card flip
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('flipped'));
  card.addEventListener('mouseleave', () => card.classList.remove('flipped'));
  card.addEventListener('focus', () => card.classList.add('flipped'));
  card.addEventListener('blur', () => card.classList.remove('flipped'));
});

// Contact form
const form = document.getElementById("contact-form");
const successMsg = form.querySelector(".success-message");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  successMsg.style.display = "block";
  form.querySelector("button").textContent = "Sent!";
  setTimeout(() => {
    successMsg.style.display = "none";
    form.querySelector("button").textContent = "Send";
    form.reset();
  }, 2200);
});