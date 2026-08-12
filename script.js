const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const sections = [...document.querySelectorAll("main section[id]")];
const navItems = [...document.querySelectorAll(".nav-links a")];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(item => item.classList.toggle("active", item.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const note = document.getElementById("formNote");
  note.textContent = "Thanks! The form is working on the page. Connect it to an email service before publishing.";
});

document.getElementById("year").textContent = new Date().getFullYear();
