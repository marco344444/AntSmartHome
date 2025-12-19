"use strict";
/**
 * ================================
 * CONTROLADOR HOME
 * ================================
 * Maneja la lógica de las páginas principales
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.videos = exports.benefits = exports.services = exports.packages = exports.getPackagesPage = exports.getHomePage = void 0;
const data_1 = require("../data");
Object.defineProperty(exports, "packages", { enumerable: true, get: function () { return data_1.packages; } });
Object.defineProperty(exports, "services", { enumerable: true, get: function () { return data_1.services; } });
Object.defineProperty(exports, "benefits", { enumerable: true, get: function () { return data_1.benefits; } });
Object.defineProperty(exports, "videos", { enumerable: true, get: function () { return data_1.videos; } });
/**
 * Renderiza la página principal (Home)
 */
const getHomePage = (req, res) => {
    const pageData = {
        title: 'AntSmartHome - Domótica en Bucaramanga | Hogares Inteligentes',
        description: 'Transformamos tu hogar en un espacio inteligente. Instalación profesional de domótica en Bucaramanga, Colombia. Cotiza por WhatsApp.',
        packages: data_1.packages,
        services: data_1.services,
        benefits: data_1.benefits,
        videos: data_1.videos
    };
    res.render('pages/home', pageData);
};
exports.getHomePage = getHomePage;
/**
 * Renderiza la página de paquetes detallados
 */
const getPackagesPage = (req, res) => {
    const pageData = {
        title: 'Paquetes de Domótica - AntSmartHome Bucaramanga',
        description: 'Descubre nuestros paquetes de domótica. Desde soluciones básicas hasta sistemas completos de automatización del hogar.',
        packages: data_1.packages
    };
    res.render('pages/packages', pageData);
};
exports.getPackagesPage = getPackagesPage;
//# sourceMappingURL=home.controller.js.map