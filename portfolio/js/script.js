// Show and hide project details
const detailButtons = document.querySelectorAll(".details-button");

detailButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const details = button.nextElementSibling;

    details.classList.toggle("show");

    if (details.classList.contains("show")) {
      button.textContent = "Less Details";
    } else {
      button.textContent = "More Details";
    }
  });
});


// Highlight nav link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function() {
  let currentSection = "";

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(function(link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});
