document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("no-js");
  document.body.classList.add("js-ready");

  const menuToggle = document.getElementById("menuToggle");
  const navList = document.getElementById("primaryNav");
  const navLinks = navList ? navList.querySelectorAll("a") : [];

  if (menuToggle && navList) {
    const closeMenu = () => {
      navList.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const clickedInside = navList.contains(target) || menuToggle.contains(target);
      if (!clickedInside) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  const toggleInfoBtn = document.getElementById("toggleInfoBtn");
  const moreInfo = document.getElementById("moreInfo");

  if (toggleInfoBtn && moreInfo) {
    toggleInfoBtn.addEventListener("click", () => {
      const isHidden = moreInfo.hasAttribute("hidden");

      if (isHidden) {
        moreInfo.removeAttribute("hidden");
        toggleInfoBtn.setAttribute("aria-expanded", "true");
        toggleInfoBtn.textContent = "Skjul informasjon om taushetsplikt";
      } else {
        moreInfo.setAttribute("hidden", "");
        toggleInfoBtn.setAttribute("aria-expanded", "false");
        toggleInfoBtn.textContent = "Vis mer om taushetsplikt";
      }
    });
  }

  const contactForm = document.getElementById("contactForm");
  const topicField = document.getElementById("topic");
  const feedback = document.getElementById("formFeedback");

  if (contactForm && topicField && feedback) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = topicField.value.trim();

      if (!message) {
        feedback.textContent = "Skriv noen ord om hva du trenger hjelp med.";
        topicField.focus();
        return;
      }

      feedback.textContent = "Takk! Meldingen er registrert (demo). Helsesykepleier tar kontakt.";
      contactForm.reset();
    });
  }

  const faqButtons = document.querySelectorAll(".faq-trigger");
  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const panelId = button.getAttribute("aria-controls");
      if (!panelId) return;

      const panel = document.getElementById(panelId);
      if (!panel) return;

      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isExpanded));

      if (isExpanded) {
        panel.setAttribute("hidden", "");
      } else {
        panel.removeAttribute("hidden");
      }
    });
  });

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index * 35, 240)}ms`;
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => element.classList.add("in-view"));
  }
});
