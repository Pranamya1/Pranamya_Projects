//
function showProjects(category) {
    document.getElementById("project-title").innerHTML = category.toUpperCase();

    document.getElementById("html_css-projects").style.display = "none";
    document.getElementById("javascript-projects").style.display = "none";
    document.getElementById("bootstrap-projects").style.display = "none";
    document.getElementById("react-projects").style.display = "none";

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

gsap.from(".nav-item", {
    opacity: 0,
    y: -20,
    duration: 1,
    stagger: 0.2
})

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

gsap.from(".img-two", {
    opacity: 0,
    x: -100,
    duration: 2,
    scrollTrigger: {
        trigger: ".img-two",
        scroller: "body",
        toggleActions: "play reverse play reverse",
        scrub: true,
        end: "top 30%"
    }
})

gsap.from([".html", ".css", ".js", ".react"], {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "left center",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 30%",
        end: "top 10%",
        toggleActions: "play reverse play reverse",
        scrub: 2,
    }
});

gsap.from([".show-project", ".project-navitem-container"], {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".project",
        scroller: "body",
        start: "top 30%",
        end: "top 10%",
        toggleActions: "play reverse play reverse",
        scrub: 2,
    }
})

gsap.from(".contact-info-card", {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".contact",
        scroller: "body",
        start: "top 70%",
        end: "top 10%",
        toggleActions: "play reverse play reverse",
        scrub: 2,
    }
})

gsap.from(".icons", {
    opacity: 0,
    duration: 5
})

gsap.to(".lap-fis-navbar", {
    scrollTrigger: {
        trigger: ".home",
        scroller: "body",
        start: "top 0%",
        end: "top -10%",
        toggleActions: "play none none reverse",
        scrub: 2,
    },
    opacity: 0,
    duration: .5,
    x: -60,
    y: -150,
    PointerEvent: "none",
})

if (window.innerWidth >= 1024) { // You can use 768 if you want tablets included
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