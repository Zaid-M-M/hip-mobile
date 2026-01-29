gsap.registerPlugin(ScrollTrigger);

// Animate box immediately
gsap.from(".box", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  ease: "power3.out",
});

// DOMContentLoaded animations
document.addEventListener("DOMContentLoaded", () => {
  // Timeline for right panel animations
  const rightPanelTl = gsap.timeline({
    defaults: { ease: "power4.out", duration: 1.4 },
  });

  rightPanelTl
    .from(
      "#right-panel",
      {
        x: "100%",
        duration: 1.2,
      },
      0
    )
    .from(
      "#mobile-side",
      {
        x: "100%",
        duration: 1.2,
      },
      0
    )
    .from(
      "#horizon-text",
      {
        x: 100,
        opacity: 0,
        duration: 1,
      },
      0
    )
    .from(
      "#issue-block",
      {
        x: 100,
        opacity: 0,
        duration: 1.4,
      },
      0.3
    )
    .from(
      "#vertical-line",
      {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.4,
      },
      0.3
    );

  // Timeline for left panel/header animations
  const leftPanelTl = gsap.timeline({
    defaults: { ease: "power2.out", duration: 1.4 },
  });

  leftPanelTl
    .from(
      "#header-home",
      {
        x: -200,
        opacity: 0,
        duration: 1.4,
      },
      0
    )
    .from(
      "#horizon",
      {
        x: -200,
        opacity: 0,
        duration: 1.4,
      },
      0
    )
    .from(
      "#headerp1",
      {
        x: -200,
        opacity: 0,
        duration: 1.4,
      },
      0
    )
    .from(
      "#headerp2",
      {
        x: -200,
        opacity: 0,
        duration: 1.4,
      },
      0
    );
});

// Navbar animation
const navbar = gsap.timeline({
  defaults: { ease: "power2.out", duration: 1.4 },
});

navbar.from(
  "#navbar",
  {
    y: "-100%",
    duration: 1.4,
  },
  0
);

// lineandwarm animation
const lineandwarm = gsap.timeline({
  defaults: { ease: "power2.out", duration: 1.4 },
});

lineandwarm.from(
  "#lineandwarm",
  {
    x: -400,
    duration: 1.4,
    opacity: 0,
  },
  0
);

// purplehead1 animation on scroll into view
gsap.from("#purplehead1", {
  scrollTrigger: {
    trigger: "#purplehead1",
    start: "top 80%", // Trigger when top of element hits 80% of viewport
    toggleActions: "play none none none", // Play once
  },
  x: -400,
  opacity: 0,
  duration: 1.4,
  ease: "power2.out",
});

gsap.from("#purplepara1", {
  scrollTrigger: {
    trigger: "#purplepara1",
    start: "top 80%", // Trigger when top of element hits 80% of viewport
    toggleActions: "play none none none", // Play once
  },
  x: 400,
  opacity: 0,
  duration: 1.4,
  ease: "power2.out",
});

gsap.from("#purplespan1", {
  scrollTrigger: {
    trigger: "#purplespan1",
    start: "top 80%", // Trigger when top of element hits 80% of viewport
    toggleActions: "play none none none", // Play once
  },
  x: 400,
  opacity: 0,
  duration: 1.4,
  ease: "power2.out",
  delay: 0.4,
});

//
gsap.from("#purplehead2", {
  scrollTrigger: {
    trigger: "#purplehead2",
    start: "top 80%", // Trigger when top of element hits 80% of viewport
    toggleActions: "play none none none", // Play once
  },
  x: -400,
  opacity: 0,
  duration: 1.4,
  ease: "power2.out",
});

gsap.from("#purplepara2", {
  scrollTrigger: {
    trigger: "#purplepara2",
    start: "top 80%", // Trigger when top of element hits 80% of viewport
    toggleActions: "play none none none", // Play once
  },
  x: 400,
  opacity: 0,
  duration: 1.4,
  ease: "power2.out",
});

gsap.from("#purplespan2", {
  scrollTrigger: {
    trigger: "#purplespan2",
    start: "top 80%", // Trigger when top of element hits 80% of viewport
    toggleActions: "play none none none", // Play once
  },
  x: 400,
  opacity: 0,
  duration: 1.4,
  ease: "power2.out",
  delay: 0.4,
});

gsap.from("#triangle1", {
  scrollTrigger: {
    trigger: "#triangle1",
    start: "top 80%", // Trigger when top of element hits 80% of viewport
    toggleActions: "play none none none", // Play once
  },
  y: "-100%",
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from("#triangle2", {
  scrollTrigger: {
    trigger: "#triangle2",
    start: "top 80%", // Trigger when top of element hits 80% of viewport
    toggleActions: "play none none none", // Play once
  },
  y: "-100%",
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

const orangemain = gsap.timeline({
  defaults: { ease: "power2.out", duration: 1.4 },
});
orangemain.from("#orangemain", {
  // right: "-100%",
  opacity: 0,
  duration: 1.4,
});

// 8***********************************************
// 8***********************************************
// 8***********************************************
// 8***********************************************
// 8***********************************************

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
          video.play().catch((e) => console.log("Play failed", e));
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: 0.5, // Adjust as needed (0.5 = 50% visible)
    }
  );

  videos.forEach((video) => {
    // Ensure autoplay works by setting required attributes
    video.setAttribute("muted", true);
    video.setAttribute("playsinline", true);

    observer.observe(video);
  });
});

/*document.addEventListener("DOMContentLoaded", function () {
  const iframes = document.querySelectorAll("iframe ");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const iframe = entry.target;
        const player = new Vimeo.Player(iframe);

        if (entry.isIntersecting) {
          player.play().catch((e) => console.log("Play failed", e));
        } else {
          player.pause();
        }
      });
    },
    {
      threshold: 0.5, // 50% visible
    }
  );

  iframes.forEach((iframe) => {
    observer.observe(iframe);
  });
});*/
