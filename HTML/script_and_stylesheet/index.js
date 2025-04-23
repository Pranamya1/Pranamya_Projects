
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

document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animations for Home Section
    gsap.from("h2", {
        opacity: 0,
        x: -100,
        duration: 1,
        delay: 0.5,
        overwrite: true
    });

    gsap.from("h1", {
        opacity: 0,
        x: -100,
        duration: 2,
        delay: 1,
        overwrite: true
    });

    gsap.from(".lap-typing", {
        opacity: 0,
        x: -100,
        duration: 1,
        delay: 1.5,
        overwrite: true
    });

    gsap.from(".lap-img-one", {
        opacity: 0,
        x: 350,
        duration: 2,
        delay: 0.5,
        overwrite: true
    });

    // ScrollTrigger Animations
    ScrollTrigger.create({
        trigger: ".lap-about",
        start: "top 80%",
        onEnter: () => {
            gsap.from(".about-heading, .lap-about-container", {
                opacity: 0,
                y: 300,
                duration: 1.5
            });
        }
    });

    ScrollTrigger.create({
        trigger: ".lap-project",
        start: "top 80%",
        onEnter: () => {
            gsap.from(".project-heading, .lap-project-container", {
                opacity: 0,
                y: 300,
                duration: 1.5
            });
        }
    });

    // Reset Navbar and Refresh ScrollTrigger on Load
    window.addEventListener('load', () => {
        gsap.set(".lap-fis-navbar", { opacity: 1, x: 0, y: 0, pointerEvents: "auto" });
        ScrollTrigger.refresh();
    });

    // Handle Page Caching (Back/Forward Buttons)
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) { // If the page is loaded from cache
            ScrollTrigger.refresh();
        }
    });

    // GSAP Animation for Navbar
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
        pointerEvents: "none"
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

    // slide bar
    const mob_slide_button = document.querySelector(".mob-slide-button");
    if (mob_slide_button) {
        mob_slide_button.addEventListener("click", mob_slidingNavbar);
    }

    window.onscroll = closeNavbarOnScroll;

    function mob_slidingNavbar() {
        console.log("Toggle clicked");
        const mob_slidebar = document.getElementById("mob_slidebar");
        mob_slidebar.classList.toggle("active");
      
        if (mob_slidebar.classList.contains("active")) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = ""; 
        }
    }

    function closeNavbarOnScroll() {
        const mob_slidebar = document.getElementById("mob_slidebar");
        if (mob_slidebar.classList.contains("active")) {
            mob_slidebar.classList.remove("active");
            document.body.style.overflow = ""; 
        }
    }
});
