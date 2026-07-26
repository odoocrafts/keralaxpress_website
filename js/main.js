document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

    function toggleMenu() {
        mobileNav.classList.toggle('open');
        document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    mobileNavItems.forEach(item => {
        item.addEventListener('click', toggleMenu);
    });

    // Tracking Form Submission
    const trackingForm = document.getElementById('tracking-form');
    const trackingInput = document.getElementById('tracking-input');

    if (trackingForm) {
        trackingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const trackingNumber = trackingInput.value.trim();
            
            if (trackingNumber) {
                // The prompt specified: incorporate tracking links https://keralaxpress.com/track to track deliveries
                // We'll redirect them there. If it accepts a query param like ?id=123, we can append it.
                // Assuming it's a generic page or accepts a tracking number. 
                window.location.href = `https://keralaxpress.com/track?id=${encodeURIComponent(trackingNumber)}`;
            }
        });
    }

    // Scroll Reveals
    const revealElements = document.querySelectorAll('.feature-card, .cta-container, .tracking-widget');
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            
            // Add a simple fade-in up animation
            entry.target.style.animation = "fadeUp 0.6s ease forwards";
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        revealObserver.observe(el);
    });
});

// Adding the keyframes dynamically for the reveal effect
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
