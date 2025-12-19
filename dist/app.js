"use strict";
/**
 * ================================
 * ANTSMARTHOME - Aplicación Principal
 * ================================
 * Landing page profesional para empresa de domótica
 * Bucaramanga, Colombia
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Cargar variables de entorno
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Dependencias
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
// Importar rutas y datos
const web_routes_1 = __importDefault(require("./routes/web.routes"));
const data_1 = require("./data");
// Crear aplicación Express
const app = (0, express_1.default)();
// ================================
// CONFIGURACIÓN DE SEGURIDAD
// ================================
app.use((0, helmet_1.default)({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https:", "blob:"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://www.youtube.com", "https://www.youtube-nocookie.com"],
            frameSrc: ["'self'", "https://www.youtube.com", "https://www.youtube-nocookie.com"],
        },
    },
    crossOriginEmbedderPolicy: false,
}));
// ================================
// CONFIGURACIÓN DE VISTAS (EJS)
// ================================
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
app.use(express_ejs_layouts_1.default);
app.set('layout', 'layouts/main');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);
// ================================
// ARCHIVOS ESTÁTICOS
// ================================
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// ================================
// VARIABLES GLOBALES PARA VISTAS
// ================================
app.use((req, res, next) => {
    // Número de WhatsApp desde variable de entorno
    const whatsappNumber = process.env.WHATSAPP_NUMBER || '573001234567';
    res.locals.whatsappNumber = whatsappNumber;
    // Helper para generar enlaces de WhatsApp
    res.locals.generateWhatsAppLink = (message) => {
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    };
    // Año actual para el footer
    res.locals.currentYear = new Date().getFullYear();
    // Información de la empresa
    const company = {
        name: 'AntSmartHome',
        slogan: 'Tu hogar, más inteligente',
        city: 'Bucaramanga',
        country: 'Colombia',
        email: 'info@antsmarthome.com',
        phone: '+57 300 123 4567'
    };
    res.locals.company = company;
    next();
});
// ================================
// RUTAS
// ================================
app.use('/', web_routes_1.default);
// ================================
// MANEJO DE ERRORES 404
// ================================
app.use((req, res) => {
    res.status(404).render('pages/home', {
        title: 'Página no encontrada - AntSmartHome',
        description: 'La página que buscas no existe',
        packages: data_1.packages,
        services: data_1.services,
        benefits: data_1.benefits,
        videos: data_1.videos,
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
const PORT = parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════╗
    ║                                        ║
    ║   🏠 ANTSMARTHOME - Servidor Activo   ║
    ║                                        ║
    ║   📍 http://localhost:${PORT}             ║
    ║   🌍 Entorno: ${process.env.NODE_ENV || 'development'}           ║
    ║   📝 TypeScript: Activo               ║
    ║                                        ║
    ╚════════════════════════════════════════╝
    `);
});
// Exportar para testing
exports.default = app;
//# sourceMappingURL=app.js.map