document.addEventListener('DOMContentLoaded', () => {
    // Select all the accordion buttons
    const summaries = document.querySelectorAll('.receipt-summary');

    summaries.forEach(summary => {
        summary.addEventListener('click', () => {
            // Check the current state of the clicked item
            const isExpanded = summary.getAttribute('aria-expanded') === 'true';
            const targetId = summary.getAttribute('aria-controls');
            const targetDetail = document.getElementById(targetId);

            // Toggle the clicked item
            if (isExpanded) {
                // Close it
                summary.setAttribute('aria-expanded', 'false');
                targetDetail.setAttribute('aria-hidden', 'true');
                targetDetail.classList.remove('is-open');
            } else {
                // Open it
                summary.setAttribute('aria-expanded', 'true');
                targetDetail.setAttribute('aria-hidden', 'false');
                targetDetail.classList.add('is-open');
            }

            /* ==========================================================
               BLOCK TO CLOSE OTHER SECTIONS 
               WHEN A NEW ONE IS OPENED
               ========================================================== */

            summaries.forEach(otherSummary => {
                if (otherSummary !== summary) {
                    otherSummary.setAttribute('aria-expanded', 'false');
                    const otherId = otherSummary.getAttribute('aria-controls');
                    const otherDetail = document.getElementById(otherId);

                    if (otherDetail) {
                        otherDetail.setAttribute('aria-hidden', 'true');
                        otherDetail.classList.remove('is-open');
                    }
                }
            });

        });
    });
});

/* ==========================================================
   INTRO SCREEN + SECTION STAGGER REVEAL
   (combined so the stagger always starts at the right moment,
   whether the intro plays out naturally or is skipped)
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.querySelector('.receipt-intro');
    const siteReveal = document.querySelector('.site-reveal');
    const animatedElements = document.querySelectorAll('.receipt-item, .receipt-footer');

    let sectionsRevealed = false;

    // Runs the staggered section reveal — safe to call more than once,
    // it only actually does anything the first time
    function revealSections() {
        if (sectionsRevealed) return;
        sectionsRevealed = true;

        animatedElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('is-visible');
            }, 150 * index); // 150ms delay between each subsequent element
        });
    }

    // Case 1: user does nothing, intro plays out naturally.
    // Fire the stagger when the site-drop-in animation finishes.
    if (siteReveal) {
        siteReveal.addEventListener('animationend', (e) => {
            if (e.animationName === 'siteDropIn') {
                revealSections();
            }
        });
    }

    // Case 2: user clicks to skip the intro.
    // Reveal the site instantly AND kick off the stagger immediately.
    if (introScreen) {
        introScreen.addEventListener('click', () => {
            introScreen.style.display = 'none';
            if (siteReveal) {
                siteReveal.style.animation = 'none'; // Overrides the delay so it appears immediately
                siteReveal.style.transform = 'translateY(0)';
            }
            revealSections();
        });
    }
});

/* ==========================================================
   PRINTER-DOT MOUSE TRAIL
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    let lastTime = 0;
    const throttleInterval = 50; // Controls how frequently dots are dropped (in milliseconds)

    document.addEventListener('mousemove', (e) => {
        const currentTime = Date.now();

        // Only drop a dot if enough time has passed since the last one
        if (currentTime - lastTime > throttleInterval) {
            lastTime = currentTime;

            const dot = document.createElement('div');
            dot.classList.add('printer-dot');

            // Position the dot at the current mouse coordinates
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;

            document.body.appendChild(dot);

            // Remove the element from the DOM after the animation finishes
            setTimeout(() => {
                dot.remove();
            }, 600);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('is-visible');
            } else {
                backToTopButton.classList.remove('is-visible');
            }
        });

        // Scroll smoothly back to top on click/tap
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});