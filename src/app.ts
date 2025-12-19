/**
 * ================================
 * ANTSMARTHOME - Aplicación Principal
 * ================================
 * Landing page profesional para empresa de domótica
 * Bucaramanga, Colombia
 */

// Cargar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// Dependencias
import express, { Application, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';

// Importar rutas y datos
import webRoutes from './routes/web.routes';
import { packages, services, benefits, videos } from './data';
import { CompanyInfo } from './types';

// Crear aplicación Express
const app: Application = express();

// ================================
// CONFIGURACIÓN DE SEGURIDAD
// ================================
app.use(helmet({
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
app.use((req: Request, res: Response, next: NextFunction) => {
    // Número de WhatsApp desde variable de entorno
    const whatsappNumber: string = process.env.WHATSAPP_NUMBER || '573001234567';
    res.locals.whatsappNumber = whatsappNumber;
    
    // Helper para generar enlaces de WhatsApp
    res.locals.generateWhatsAppLink = (message: string): string => {
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    };
    
    // Año actual para el footer
    res.locals.currentYear = new Date().getFullYear();
    
    // Información de la empresa
    const company: CompanyInfo = {
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
app.use('/', webRoutes);

// ================================
// MANEJO DE ERRORES 404
// ================================
app.use((req: Request, res: Response) => {
    res.status(404).render('pages/home', {
        title: 'Página no encontrada - AntSmartHome',
        description: 'La página que buscas no existe',
        packages,
        services,
        benefits,
        videos,
        error: true
    });
});

// ================================
// MANEJO DE ERRORES GENERALES
// ================================
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Error:', err.stack);
    res.status(500).send('Algo salió mal. Por favor, intenta de nuevo.');
});

// ================================
// INICIAR SERVIDOR
// ================================
const PORT: number = parseInt(process.env.PORT || '3000', 10);

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
export default app;
