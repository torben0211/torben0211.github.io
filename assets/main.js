(() => {
  // Update year in footer
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      mobileNav.hidden = isOpen;
    });
  }

  // Mailto builder (Contact page)
  // IMPORTANT: replace this email:
  const TO_EMAIL = "REPLACE_WITH_YOUR_EMAIL";

  const mailBtn = document.querySelector("[data-mailto]");
  if (mailBtn) {
    mailBtn.addEventListener("click", () => {
      const v = (id) => (document.getElementById(id)?.value || "").trim();

      const subject = encodeURIComponent("Assessment request: Industrial refrigeration");
      const body = encodeURIComponent(
        `Name: ${v("name")}\n` +
        `Company: ${v("company")}\n` +
        `Role: ${v("role")}\n` +
        `Country/Region: ${v("region")}\n` +
        `Site type: ${v("site")}\n` +
        `Biggest priority: ${v("priority")}\n\n` +
        `Message:\n${v("msg")}\n`
      );

      window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
    });
  }
})();
