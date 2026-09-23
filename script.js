document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       SMOOTH SCROLL
    ======================================== */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });
    });


    /* ========================================
       SCROLL REVEAL
    ======================================== */

    const revealElements = document.querySelectorAll(
        ".section-label, .about-content, .atmosphere-card, .menu-card, .visit-content, .cta"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* ========================================
       HERO IMAGE PARALLAX
    ======================================== */

    const heroImage = document.querySelector(".hero-image img");

    if (heroImage) {

        let ticking = false;

        window.addEventListener("scroll", () => {

            if (ticking) {
                return;
            }

            window.requestAnimationFrame(() => {

                const scrollY = window.scrollY;

                if (scrollY < window.innerHeight) {

                    heroImage.style.transform =
                        `translateY(${scrollY * 0.045}px) scale(1.015)`;

                }

                ticking = false;

            });

            ticking = true;

        });

    }


    /* ========================================
       IMAGE HOVER
    ======================================== */

    const imageCards = document.querySelectorAll(
        ".atmosphere-card, .menu-card, .about-image, .hero-image"
    );

    imageCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("is-hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("is-hovered");
        });

    });


    /* ========================================
       MENU CARDS
    ======================================== */

    const menuCards = document.querySelectorAll(".menu-card");

    menuCards.forEach((card) => {

        card.addEventListener("click", () => {

            card.classList.add("clicked");

            setTimeout(() => {
                card.classList.remove("clicked");
            }, 300);

        });

    });


    /* ========================================
       FOOTER YEAR
    ======================================== */

    const footerYear = document.querySelector(
        ".footer-bottom span:last-child"
    );

    if (footerYear) {

        footerYear.textContent =
            `© ${new Date().getFullYear()} MON`;

    }


    /* ========================================
       MOBILE MENU
    ======================================== */

    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");

    if (header && nav && window.innerWidth <= 650) {

        nav.classList.add("mobile-hidden");

    }


    /* ========================================
       PAGE LOADED
    ======================================== */

    document.body.classList.add("loaded");

});