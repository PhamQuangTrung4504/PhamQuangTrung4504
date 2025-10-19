// ===== PARTICLES CONFIGURATION =====
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ff0080",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff0080",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

// ===== MOBILE NAVIGATION =====
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// ===== TYPING EFFECT =====
const typingElement = document.querySelector(".typing-effect");
const texts = [
  "Software Developer",
  "Mobile App Developer",
  "AI Enthusiast",
  "Problem Solver",
  "Full Stack Developer",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  const typingSpeed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
setTimeout(typeEffect, 1000);

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll(".counter");
const observerOptions = {
  threshold: 0.5,
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseInt(counter.getAttribute("data-target"));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + "+";
        }
      };

      updateCounter();
      counterObserver.unobserve(counter);
    }
  });
}, observerOptions);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// ===== SKILL BARS ANIMATION =====
const skillBars = document.querySelectorAll(".skill-bar-fill");

const skillBarObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const progress = bar.getAttribute("data-progress");
      bar.style.width = progress + "%";
      skillBarObserver.unobserve(bar);
    }
  });
}, observerOptions);

skillBars.forEach((bar) => {
  skillBarObserver.observe(bar);
});

// ===== SCROLL ANIMATIONS =====
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".skill-card, .project-card, .stat-card, .contact-item"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Initialize animation states
document
  .querySelectorAll(".skill-card, .project-card, .stat-card, .contact-item")
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.6s ease";
  });

window.addEventListener("scroll", animateOnScroll);
animateOnScroll(); // Run once on load

// ===== SMOOTH SCROLL WITH OFFSET =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 10, 10, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(255, 0, 128, 0.3)";
  } else {
    navbar.style.background = "rgba(10, 10, 10, 0.95)";
    navbar.style.boxShadow = "0 2px 20px rgba(255, 0, 128, 0.1)";
  }
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
  const message = contactForm.querySelector("textarea").value;

  // Here you would typically send the form data to a server
  // For now, we'll just show an alert
  alert(`Thank you for your message, ${name}! I'll get back to you soon.`);

  // Reset form
  contactForm.reset();
});

// ===== GLITCH EFFECT ON HOVER =====
const glitchText = document.querySelector(".glitch");

glitchText.addEventListener("mouseenter", () => {
  glitchText.style.animation = "glitch 0.3s infinite";
});

glitchText.addEventListener("mouseleave", () => {
  glitchText.style.animation = "none";
});

// ===== ADD GLITCH ANIMATION TO CSS =====
const style = document.createElement("style");
style.textContent = `
    @keyframes glitch {
        0% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
                        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
        }
        14% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
                        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
        }
        15% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
        }
        49% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
        }
        50% {
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                        0.05em 0 0 rgba(0, 255, 0, 0.75),
                        0 -0.05em 0 rgba(0, 0, 255, 0.75);
        }
        99% {
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                        0.05em 0 0 rgba(0, 255, 0, 0.75),
                        0 -0.05em 0 rgba(0, 0, 255, 0.75);
        }
        100% {
            text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
                        -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
                        -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
        }
    }
`;
document.head.appendChild(style);

// ===== LAZY LOAD IMAGES =====
const images = document.querySelectorAll("img[data-src]");
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      imageObserver.unobserve(img);
    }
  });
});

images.forEach((img) => imageObserver.observe(img));

// ===== THEME TOGGLE (Optional Enhancement) =====
// You can add a theme toggle button later if needed

console.log("🚀 Portfolio loaded successfully!");
console.log("💻 Developed by Pham Quang Trung");
