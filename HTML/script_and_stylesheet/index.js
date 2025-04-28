
function showProjects(category) {
    document.getElementById("project-title").innerHTML = category.toUpperCase();

    // Hide all project sections
    document.getElementById("html_css-projects").style.display = "none";
    document.getElementById("javascript-projects").style.display = "none";
    document.getElementById("bootstrap-projects").style.display = "none";
    document.getElementById("react-projects").style.display = "none";

    // Show the selected category
    if (category === "html_css") {
        document.getElementById("html_css-projects").style.display = "flex";
    } else if (category === "javascript") {
        document.getElementById("javascript-projects").style.display = "flex";
    } else if (category === "bootstrap") {
        document.getElementById("bootstrap-projects").style.display = "flex";
    } else if (category === "react") {
        document.getElementById("react-projects").style.display = "flex";
    }
}

// Animation
// Animation fo home section

gsap.from("h2", {
    opacity: 0,
    x: -100,
    duration: 1,
    delay: 0.5
})

gsap.from("h1", {
    opacity: 0,
    x: -100,
    duration: 2,
    delay: 1
})

gsap.from(".lap-typing", {
    opacity: 0,
    x: -100,
    duration: 1,
    delay: 1.5
})

gsap.from(".lap-img-one", {
    opacity: 0,
    x: 350,
    duration: 2,
    delay: 0.5
})

gsap.from(".about-heading, .lap-about-container", {
    opacity: 0,
    opacity:0,
    y: 300,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".lap-about",
        scroller: "body"
    }
})

gsap.from(".project-heading, .lap-project-container", {
    opacity: 0,
    opacity:0,
    y: 300,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".lap-project",
        scroller: "body"
    }
})

// Reset the navbar and ScrollTrigger when the page reloads or revisited
window.addEventListener('load', () => {
    gsap.set(".lap-fis-navbar", { opacity: 1, x: 0, y: 0, pointerEvents: "auto" });
    ScrollTrigger.refresh(); // This ensures ScrollTrigger recalculates all triggers
});

gsap.to(".lap-fis-navbar", {
    scrollTrigger: {
        trigger: ".home",
        scroller: "body",
        start: "top 0%",
        end: "top -10%",
        toggleActions: "play none none reverse",
        scrub: 2,

        onEnter: () => {
            gsap.set(".lap-fis-navbar", { opacity: 1, x: 0, y: 0, pointerEvents: "auto" });
        },

        onLeaveBack: () => {
            gsap.to(".lap-fis-navbar", {
                opacity: 0,
                x: -60,
                y: -150,
                pointerEvents: "none",
            });
        }
    },
    opacity: 0,
    x: -60,
    y: -150,
    pointerEvents: "none",
});


if (window.innerWidth >= 1024) {
    gsap.fromTo(".lap-second-navbar",
      {
        opacity: 0,
        zIndex: 0,
        cursor: "default",
        pointerEvents: "none",
      },
      {
        scrollTrigger: {
          trigger: ".home",
          scroller: "body",
          start: "top 0%",
          end: "top -10%",
          toggleActions: "play none none reverse",
          scrub: 2
        },
        opacity: 1,
        duration: 1,
        zIndex: 1000,
        pointerEvents: "auto"
      }
    );
  }
    
// Slide Bar (navigation bar for mobile and tablet)

function mob_slidingNavbar() {
    const mob_slidebar = document.getElementById("mob_slidebar");
    mob_slidebar.classList.toggle("active");
  }

  function closeNavbarOnScroll() {
    document.getElementById("mob_slidebar").classList.remove("active");
  }

  window.onscroll = closeNavbarOnScroll;
