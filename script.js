// ==============================
// CSB Website Interactivity 


// Newsletter subscription feedback
document.addEventListener("DOMContentLoaded", () => {
  const newsForm = document.querySelector(".news-form");
  if (newsForm) {
    newsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsForm.querySelector("input[type='email']");
      const email = emailInput.value.trim();

      if (email === "") {
        alert("Please enter your email address.");
        return;
      }

      alert(`Thank you for subscribing, ${email}! 💌`);
      emailInput.value = "";
    });
  }

  // Contact form validation
  const contactForm = document.querySelector("form");
  if (contactForm && contactForm.querySelector("#message")) {
    contactForm.addEventListener("submit", (e) => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill out all fields before sending your message 🌸");
      } else {
        alert("Thank you! Your message has been sent successfully 💕");
        contactForm.reset();
      }
    });
  }

  // Scroll-to-top button
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑ Top";
  scrollBtn.classList.add("scroll-top-btn");
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
