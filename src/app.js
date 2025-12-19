/**
 * ================================
 * ANTSMARTHOME - Aplicación Principal
 * ================================
 * Landing page profesional para empresa de domótica
 * Bucaramanga, Colombia
 */

// Cargar variables de entorno
require('dotenv').config();

// Dependencias
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

// Importar rutas
const webRoutes = require('./routes/web.routes');

// Crear aplicación Express
const app = express();

// ================================
// CONFIGURACIÓN DE SEGURIDAD
// ================================
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https:"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
        },
    },
    crossOriginEmbedderPolicy: false,
}));

// ================================
// CONFIGURACIÓN DE VISTAS (EJS)
// ================================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

// ================================
// ARCHIVOS ESTÁTICOS
// ================================
app.use(express.static(path.join(__dirname, '../public')));

// ================================
// VARIABLES GLOBALES PARA VISTAS
// ================================
app.use((req, res, next) => {
    // Número de WhatsApp desde variable de entorno
    res.locals.whatsappNumber = process.env.WHATSAPP_NUMBER || '573001234567';
    
    // Helper para generar enlaces de WhatsApp
    res.locals.generateWhatsAppLink = (message) => {
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${res.locals.whatsappNumber}?text=${encodedMessage}`;
    };
    
    // Año actual para el footer
    res.locals.currentYear = new Date().getFullYear();
    
    // Información de la empresa
    res.locals.company = {
        name: 'AntSmartHome',
        slogan: 'Tu hogar, más inteligente',
        city: 'Bucaramanga',
        country: 'Colombia',
        email: 'info@antsmarthome.com',
        phone: '+57 300 123 4567'
    };
    
    next();
});

// ================================
// RUTAS
// ================================
app.use('/', webRoutes);

// ================================
// MANEJO DE ERRORES 404
// ================================
app.use((req, res) => {
    // Importar datos para el error 404
    const { packages, services, benefits } = require('./controllers/home.controller');
    res.status(404).render('pages/home', {
        title: 'Página no encontrada - AntSmartHome',
        description: 'La página que buscas no existe',
        packages: packages,
        services: services,
        benefits: benefits,
        error: true
    });
});

// ================================
// MANEJO DE ERRORES GENERALES
// ================================
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).send('Algo salió mal. Por favor, intenta de nuevo.');
});

// ================================
// INICIAR SERVIDOR
// ================================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════╗
    ║                                        ║
    ║   🏠 ANTSMARTHOME - Servidor Activo   ║
    ║                                        ║
    ║   📍 http://localhost:${PORT}            ║
    ║   🌍 Entorno: ${process.env.NODE_ENV || 'development'}        ║
    ║                                        ║
    ╚════════════════════════════════════════╝
    `);
});

// Exportar para testing
module.exports = app;
