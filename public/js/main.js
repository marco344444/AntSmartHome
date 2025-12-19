/**
 * ================================
 * ANTSMARTHOME - JAVASCRIPT PRINCIPAL
 * ================================
 * Interacciones y funcionalidades del frontend
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ================================
    // ELEMENTOS DEL DOM
    // ================================
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');
    const themeToggle = document.getElementById('theme-toggle');

    // ================================
    // MODO OSCURO / CLARO
    // ================================
    
    /**
     * Inicializar tema desde localStorage o preferencia del sistema
     */
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            // Detectar preferencia del sistema
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        }
    }
    
    /**
     * Alternar entre modo claro y oscuro
     */
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
    
    // Inicializar tema
    initTheme();
    
    // Event listener para el botón de tema
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // ================================
    // MENÚ MÓVIL
    // ================================
    
    /**
     * Abrir menú móvil
     */
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    /**
     * Cerrar menú móvil
     */
    if (navClose) {
        navClose.addEventListener('click', function() {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    /**
     * Cerrar menú al hacer clic en un enlace
     */
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    /**
     * Cerrar menú al hacer clic fuera
     */
    document.addEventListener('click', function(event) {
        if (navMenu.classList.contains('active')) {
            if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // ================================
    // HEADER SCROLL EFFECT
    // ================================
    
    /**
     * Añadir sombra al header cuando se hace scroll
     */
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    }

    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll(); // Check initial state

    // ================================
    // SMOOTH SCROLL PARA ANCHORS
    // ================================
    
    /**
     * Smooth scroll mejorado para enlaces internos
     */
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo procesar si es un anchor válido
            if (href === '#' || href === '') return;
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ================================
    // ANIMACIÓN DE ELEMENTOS AL SCROLL
    // ================================
    
    /**
     * Intersection Observer para animaciones
     */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos que deben animarse
    document.querySelectorAll('.service-card, .package-card, .benefit-card, .package-detail').forEach(function(el) {
        el.classList.add('animate-element');
        animateOnScroll.observe(el);
    });

    // ================================
    // ACTIVE NAV LINK ON SCROLL
    // ================================
    
    /**
     * Resaltar el enlace de navegación activo según la sección visible
     */
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.scrollY;
        const headerHeight = header.offsetHeight;

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(sectionId)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // ================================
    // CONTADOR ANIMADO (OPCIONAL)
    // ================================
    
    /**
     * Animar números cuando son visibles
     */
    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        }
        
        updateCounter();
    }

    // Observer para contadores
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                if (!isNaN(target)) {
                    animateCounter(entry.target, target, 1500);
                }
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.about__stat-number').forEach(function(counter) {
        counterObserver.observe(counter);
    });

    // ================================
    // WHATSAPP FLOATING BUTTON
    // ================================
    
    /**
     * Mostrar/ocultar texto del botón flotante según scroll
     */
    const whatsappFloat = document.querySelector('.whatsapp-float');
    
    if (whatsappFloat) {
        let lastScrollY = 0;
        
        window.addEventListener('scroll', function() {
            const currentScrollY = window.scrollY;
            
            // Ocultar el texto al hacer scroll hacia abajo
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                whatsappFloat.classList.add('minimized');
            } else {
                whatsappFloat.classList.remove('minimized');
            }
            
            lastScrollY = currentScrollY;
        });
    }

    // ================================
    // TRACKING DE EVENTOS (PREPARADO)
    // ================================
    
    /**
     * Función para trackear eventos de conversión
     * Preparada para Google Analytics, Facebook Pixel, etc.
     */
    function trackEvent(eventName, eventData) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventData);
        }
        
        // Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', eventName, eventData);
        }
        
        // Console log para desarrollo
        console.log('Event tracked:', eventName, eventData);
    }

    /**
     * Trackear clics en botones de WhatsApp
     */
    document.querySelectorAll('a[href*="wa.me"]').forEach(function(link) {
        link.addEventListener('click', function() {
            // Extraer información del enlace
            const packageCard = this.closest('.package-card') || this.closest('.package-detail');
            let packageName = 'General';
            
            if (packageCard) {
                const nameElement = packageCard.querySelector('.package-card__name, .package-detail__name');
                if (nameElement) {
                    packageName = nameElement.textContent;
                }
            }
            
            trackEvent('whatsapp_click', {
                'event_category': 'conversion',
                'event_label': packageName,
                'package_name': packageName
            });
        });
    });

    // ================================
    // LAZY LOADING DE IMÁGENES (PREPARADO)
    // ================================
    
    /**
     * Lazy loading nativo con fallback
     */
    if ('loading' in HTMLImageElement.prototype) {
        // El navegador soporta lazy loading nativo
        document.querySelectorAll('img[data-src]').forEach(function(img) {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback con Intersection Observer
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(function(img) {
            imageObserver.observe(img);
        });
    }

    // ================================
    // MENSAJE DE CONSOLA
    // ================================
    console.log(`
    ╔════════════════════════════════════════╗
    ║                                        ║
    ║   🏠 ANTSMARTHOME                      ║
    ║   Domótica en Bucaramanga              ║
    ║                                        ║
    ║   Desarrollado con ❤️                  ║
    ║                                        ║
    ╚════════════════════════════════════════╝
    `);

});

// ================================
// CSS ADICIONAL PARA ANIMACIONES
// ================================
// Añadir estilos de animación dinámicamente
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .animate-element {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-element.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .whatsapp-float.minimized .whatsapp-float__text {
        display: none !important;
    }
    
    .nav__link.active {
        color: var(--color-primary);
    }
    
    .nav__link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(animationStyles);
