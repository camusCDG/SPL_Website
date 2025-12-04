/* =============================================
   STUDIO FOR PUBLIC LIGHTING
   Main JavaScript - Version 2
   ============================================= */

// Project Data
const projectData = {
    en: [
        {
            name: "Schramberg Burgenbeleuchtung",
            types: ["Monument Lighting", "Master Planning"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Braunlage",
            types: ["Urban Lighting"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            name: "Floschenstadion",
            types: ["Sports Lighting"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
        },
        {
            name: "Pfarrkirche Ehestetten Heritage Restoration",
            types: ["Monument Lighting", "Heritage Restoration"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
        },
        {
            name: "NAK Calw-Stammheim",
            types: ["Interior Lighting"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
        },
        {
            name: "NAK Schorndorf",
            types: ["Interior Lighting"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            name: "Förderschule Gaukönigshofen",
            types: ["Educational Facility Lighting"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt."
        },
        {
            name: "Fußballfelder Sinzheim",
            types: ["Sports Lighting"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui."
        }
    ],
    de: [
        {
            name: "Schramberg Burgenbeleuchtung",
            types: ["Denkmalbeleuchtung", "Masterplanung"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Braunlage",
            types: ["Stadtbeleuchtung"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            name: "Floschenstadion",
            types: ["Sportstättenbeleuchtung"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
        },
        {
            name: "Denkmalschutz-Sanierung Pfarrkirche Ehestetten",
            types: ["Denkmalbeleuchtung", "Denkmalschutz-Sanierung"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
        },
        {
            name: "NAK Calw-Stammheim",
            types: ["Innenbeleuchtung"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
        },
        {
            name: "NAK Schorndorf",
            types: ["Innenbeleuchtung"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            name: "Förderschule Gaukönigshofen",
            types: ["Bildungseinrichtung Beleuchtung"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt."
        },
        {
            name: "Fußballfelder Sinzheim",
            types: ["Sportstättenbeleuchtung"],
            description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            description2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui."
        }
    ]
};

// Current state
let currentLang = 'en';
let currentSlide = 0;
let currentCarouselSlide = 0;
let slideInterval = null;

// DOM Elements
const mainContainer = document.getElementById('mainContainer');
const langToggle = document.getElementById('langToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
const navLogo = document.getElementById('navLogo');
const sectionDots = document.querySelectorAll('.section-dot');
const accordionHeaders = document.querySelectorAll('.accordion-header');
const projectCards = document.querySelectorAll('.project-card');
const projectModal = document.getElementById('projectModal');
const servicesSlideshow = document.getElementById('servicesSlideshow');

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
    setupLanguageToggle();
    setupMobileMenu();
    setupNavigation();
    setupSectionObserver();
    setupAccordion();
    setupSlideshow();
    setupProjectModal();
    setupScrollBehavior();
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('sfpl-lang');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage();
    }
}

// Language Toggle
function setupLanguageToggle() {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'de' : 'en';
        localStorage.setItem('sfpl-lang', currentLang);
        updateLanguage();
    });
}

function updateLanguage() {
    langToggle.textContent = currentLang === 'en' ? 'DE' : 'EN';
    
    // Update all translatable elements
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) {
            el.textContent = text;
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
}

// Mobile Menu
function setupMobileMenu() {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// Navigation
function setupNavigation() {
    // Nav links smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Section dots
    sectionDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const targetId = dot.dataset.section;
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Section Observer for active states
function setupSectionObserver() {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        root: null,
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                updateActiveSection(sectionId);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

function updateActiveSection(sectionId) {
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkSection = link.dataset.section;
        link.classList.toggle('active', linkSection === sectionId);
    });

    // Update section dots
    sectionDots.forEach(dot => {
        dot.classList.toggle('active', dot.dataset.section === sectionId);
    });

    // Hide/show nav logo on hero section
    if (sectionId === 'hero') {
        navLogo.classList.add('hidden');
    } else {
        navLogo.classList.remove('hidden');
    }

    // Update footer color based on section background
    // Footer is now static at bottom, so this is no longer needed
    // but keeping for potential future use
}

// Scroll behavior - different for mobile/tablet vs desktop
function setupScrollBehavior() {
    const nav = document.getElementById('nav');

    // Initial check
    updateActiveSection('hero');
    navLogo.classList.add('hidden');

    // Track scroll position for direction detection
    let lastScrollTop = 0;
    let ticking = false;

    // Check if mobile/tablet (under 992px)
    const isMobileOrTablet = () => window.innerWidth < 992;

    const handleScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                // Check if at top (hero section) - hide everything
                if (scrollTop < 100) {
                    navLogo.classList.add('hidden');
                    nav.classList.remove('nav-visible');
                } else {
                    navLogo.classList.remove('hidden');

                    if (isMobileOrTablet()) {
                        // Mobile/Tablet: show nav only on scroll up
                        if (scrollTop < lastScrollTop) {
                            // Scrolling up
                            nav.classList.add('nav-visible');
                        } else {
                            // Scrolling down
                            nav.classList.remove('nav-visible');
                        }
                    } else {
                        // Desktop: show nav on any scroll
                        nav.classList.add('nav-visible');
                    }
                }

                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Handle resize to recheck mobile/desktop state
    window.addEventListener('resize', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop >= 100 && !isMobileOrTablet()) {
            nav.classList.add('nav-visible');
        }
    });

    // Also check mainContainer for desktop scroll snap
    if (mainContainer) {
        mainContainer.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = mainContainer.scrollTop;

                    if (scrollTop < 100) {
                        navLogo.classList.add('hidden');
                        nav.classList.remove('nav-visible');
                    } else {
                        navLogo.classList.remove('hidden');

                        if (isMobileOrTablet()) {
                            if (scrollTop < lastScrollTop) {
                                nav.classList.add('nav-visible');
                            } else {
                                nav.classList.remove('nav-visible');
                            }
                        } else {
                            nav.classList.add('nav-visible');
                        }
                    }

                    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
}

// Accordion
function setupAccordion() {
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// Slideshow
function setupSlideshow() {
    if (!servicesSlideshow) return;
    
    const slides = servicesSlideshow.querySelectorAll('.slide');
    const dots = servicesSlideshow.querySelectorAll('.slide-dot');
    const prevBtn = servicesSlideshow.querySelector('.slide-prev');
    const nextBtn = servicesSlideshow.querySelector('.slide-next');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }
    
    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }
    
    function prevSlide() {
        showSlide((currentSlide - 1 + slides.length) % slides.length);
    }
    
    // Auto-advance
    slideInterval = setInterval(nextSlide, 4000);
    
    // Navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            prevSlide();
            slideInterval = setInterval(nextSlide, 4000);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(nextSlide, 4000);
        });
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            slideInterval = setInterval(nextSlide, 4000);
        });
    });
}

// Project Modal
function setupProjectModal() {
    const modal = projectModal;
    if (!modal) return;
    
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    const modalClose = modal.querySelector('.modal-close');
    const modalCloseBtn = modal.querySelector('.modal-close-btn');
    const carouselSlides = document.getElementById('carouselSlides');
    const carouselDots = document.getElementById('carouselDots');
    const carouselPrev = modal.querySelector('.carousel-prev');
    const carouselNext = modal.querySelector('.carousel-next');
    
    // Open modal
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectIndex = parseInt(card.dataset.project);
            openProjectModal(projectIndex);
        });
    });
    
    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Carousel navigation
    if (carouselPrev) {
        carouselPrev.addEventListener('click', () => {
            currentCarouselSlide = (currentCarouselSlide - 1 + 5) % 5;
            updateCarousel();
        });
    }
    
    if (carouselNext) {
        carouselNext.addEventListener('click', () => {
            currentCarouselSlide = (currentCarouselSlide + 1) % 5;
            updateCarousel();
        });
    }
    
    function openProjectModal(index) {
        const project = projectData[currentLang][index];
        
        // Update content
        document.getElementById('modalTitle').textContent = project.name;
        document.getElementById('modalType').textContent = project.types.join(', ');
        
        // Update description (two columns)
        const descContainer = document.getElementById('modalDescription');
        descContainer.innerHTML = `
            <p>${project.description1}</p>
            <p>${project.description2}</p>
        `;
        
        // Generate carousel slides
        carouselSlides.innerHTML = '';
        carouselDots.innerHTML = '';
        
        for (let i = 0; i < 5; i++) {
            // Slide
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `
                <div class="carousel-placeholder">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span>Project Image ${i + 1}</span>
                    <span class="placeholder-size">1200 x 800px</span>
                </div>
            `;
            carouselSlides.appendChild(slide);
            
            // Dot
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Image ${i + 1}`);
            dot.addEventListener('click', () => {
                currentCarouselSlide = i;
                updateCarousel();
            });
            carouselDots.appendChild(dot);
        }
        
        currentCarouselSlide = 0;
        updateCarousel();
        
        // Show modal
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    
    function updateCarousel() {
        if (carouselSlides) {
            carouselSlides.style.transform = `translateX(-${currentCarouselSlide * 100}%)`;
        }
        
        document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentCarouselSlide);
        });
    }
}
