gsap.registerPlugin(ScrollTrigger);

gsap.to(".orange", {
  rotate: 360 * 5,
  scrollTrigger: {
    trigger: ".header",
    start: "top top",
    end: "bottom+=1000 top",
    scrub: true,
  }
});

gsap.to(".arrow", {
  yPercent: -20,
  duration: 0.8,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

document.querySelectorAll(".section").forEach((section, index) => {
  const content = section.querySelector(".content");
  const image = section.querySelector(".image-wrapper");

  // First section: content left, image right
  if (index === 0 && content && image) {
    gsap.from(content, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(image, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  }

  // Second section: image left, content right
  if (index === 1 && content && image) {
    gsap.from(image, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(content, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  }

  if (index === 2) {
    const wrappers = section.querySelectorAll(".wrapper-content");

    wrappers.forEach((wrapper, i) => {
      gsap.from(wrapper, {
        x: i === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: wrapper,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }
});

// Fade in .testimonials
gsap.from(".testimonials", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// // Fade in .img-section
gsap.from(".img-section", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".img-section",
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});

// Fade in .footer
gsap.from(".footer", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
let menuOpen = false;

hamburger.addEventListener("click", () => {
  if (!menuOpen) {
    gsap.set(mobileMenu, { display: "flex", opacity: 0, y: -50 });

    gsap.to(mobileMenu, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    menuOpen = true;
  } else {
    gsap.to(mobileMenu, {
      y: -50,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        mobileMenu.style.display = "none";
      },
    });

    menuOpen = false;
  }
});



