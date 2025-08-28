window.onload = function () {
  console.log("Hackie Landing Page Ready 🚀");

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");

      if (href && href !== "#") {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // ===== Waitlist button click =====
  const waitlistBtn = document.querySelector(".waitlist-form button");
  if (waitlistBtn) {
    waitlistBtn.addEventListener("click", () => {
      const emailInput = document.querySelector(".waitlist-form input");
      if (emailInput && emailInput.value) {
        alert(`Thanks for joining the waitlist, ${emailInput.value}! 🚀`);
        emailInput.value = "";
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }

  // ===== Modal Sign In =====
  const modal = document.getElementById("signinModal");
  const signInBtn = document.querySelector(".btn-outline"); // navbar Sign In button
  const closeBtn = document.querySelector(".modal .close");

  if (signInBtn && modal && closeBtn) {
    // Open modal
    signInBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
    });

    // Close modal on X click
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal if user clicks outside modal content
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
};
// ===== Modal Register =====
const registerModal = document.getElementById("registerModal");
const getStartedBtn = document.querySelector(".btn-primary[href='#']"); // navbar Get Started button
const closeBtns = document.querySelectorAll(".modal .close");

if (getStartedBtn && registerModal) {
  // Open register modal
  getStartedBtn.addEventListener("click", (e) => {
    e.preventDefault();
    registerModal.style.display = "flex";
  });

  // Close modal on X click
  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  // Close modal if user clicks outside
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });

  // Handle form submission
  const registerForm = document.getElementById("registerForm");
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (name && email && password) {
      alert(`🎉 Successfully Registered!\nWelcome, ${name}`);
      registerForm.reset();
      registerModal.style.display = "none";
    } else {
      alert("⚠ Please fill out all fields.");
    }
  });
}
