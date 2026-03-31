// ==================== CONFIGURATION ====================
const companyInfo = {
    // Basic information
    businessName: "HaarKliniek 45",
    tagline: "Uw expert in haartransplantatie",
    
    // Opening information
    expectedOpening: "Begin 2026",
    comingSoonMessage: "Coming Soon",
    
    // Contact details
    address: {
        street: "Verdaelstraat 45",
        postalCode: "3450",
        city: "Geetbets",
        country: "België"
    },
    
    phone: "+32 485 593 302",
    phoneRaw: "+32485593302",
    email: "info@haarkliniek45.be",
    website: "https://www.haarkliniek45.be",
    
    // KVK and VAT (optional)
    kvkNumber: "",
    vatNumber: "",
    
    // Social Media
    socialMedia: {
        facebook: "https://www.facebook.com/profile.php?id=100087653920127",
        instagram: "https://www.instagram.com/haarkliniek45/",
        linkedin: "",
        twitter: ""
    },
    
    // WhatsApp
    whatsapp: "32485593302",
    whatsappMessage: "Hallo, ik wil graag meer informatie over HaarKliniek 45",
    
    // Opening hours
    openingHours: ""
};

// ==================== POPULATE COMPANY INFO ====================
function populateCompanyInfo() {
    // Address
    const addressStreet = document.getElementById('address-street');
    const addressCity = document.getElementById('address-city');
    const addressCountry = document.getElementById('address-country');
    
    if (addressStreet) addressStreet.textContent = companyInfo.address.street;
    if (addressCity) addressCity.textContent = `${companyInfo.address.postalCode} ${companyInfo.address.city}`;
    if (addressCountry) addressCountry.textContent = companyInfo.address.country;

    // Phone and Email
    const phoneLink = document.getElementById('phone-link');
    const emailLink = document.getElementById('email-link');
    
    if (phoneLink) {
        phoneLink.textContent = companyInfo.phone;
        phoneLink.href = `tel:${companyInfo.phoneRaw}`;
    }
    
    if (emailLink) {
        emailLink.textContent = companyInfo.email;
        emailLink.href = `mailto:${companyInfo.email}`;
    }

    // KVK and VAT
    const kvk = document.getElementById('kvk');
    const vat = document.getElementById('vat');
    
    if (kvk) {
        if (companyInfo.kvkNumber) {
            kvk.textContent = `KVK: ${companyInfo.kvkNumber}`;
        } else {
            kvk.style.display = 'none';
        }
    }
    
    if (vat) {
        if (companyInfo.vatNumber) {
            vat.textContent = `BTW: ${companyInfo.vatNumber}`;
        } else {
            vat.style.display = 'none';
        }
    }

    // Opening hours
    const openingHours = document.getElementById('opening-hours');
    if (openingHours && companyInfo.openingHours) {
        openingHours.textContent = companyInfo.openingHours;
    } else if (openingHours) {
        openingHours.style.display = 'none';
    }

    // Current year
    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Social Media Links
    const socialLinks = {
        facebook: document.getElementById('facebook-link'),
        instagram: document.getElementById('instagram-link'),
        linkedin: document.getElementById('linkedin-link')
    };

    Object.keys(socialLinks).forEach(platform => {
        const link = socialLinks[platform];
        if (link && companyInfo.socialMedia[platform]) {
            link.href = companyInfo.socialMedia[platform];
            link.style.display = 'flex';
        }
    });

    // WhatsApp Button
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn && companyInfo.whatsapp) {
        const message = encodeURIComponent(companyInfo.whatsappMessage);
        whatsappBtn.href = `https://wa.me/${companyInfo.whatsapp}?text=${message}`;
        whatsappBtn.style.display = 'flex';
    }
}

// ==================== GDPR COOKIE CONSENT ====================
function initCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');
    
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    
    if (!consent) {
        // Show cookie banner after a short delay
        setTimeout(() => {
            cookieConsent.style.display = 'block';
        }, 1000);
    }
    
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.style.display = 'none';
        // Enable Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_MEASUREMENT_ID');
        }
    });
    
    declineBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'declined');
        cookieConsent.style.display = 'none';
    });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Populate company information
    populateCompanyInfo();
    
    // Initialize cookie consent
    initCookieConsent();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Add fade-in effect on scroll for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in class
    document.querySelectorAll('.content-box, .footer-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c🌟 HaarKliniek 45 - Coming Soon 🌟', 'color: #d4af37; font-size: 20px; font-weight: bold;');
console.log('%cOntwikkeld met ❤️ voor professionele haarzorg', 'color: #1a3a32; font-size: 14px;');
