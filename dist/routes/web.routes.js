"use strict";
/**
 * ================================
 * RUTAS WEB
 * ================================
 * Define todas las rutas públicas de la aplicación
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = require("../controllers/home.controller");
const router = (0, express_1.Router)();
// ================================
// RUTAS PRINCIPALES
// ================================
/**
 * GET /
 * Página principal - Landing page
 */
router.get('/', home_controller_1.getHomePage);
/**
 * GET /paquetes
 * Página de paquetes detallados
 */
router.get('/paquetes', home_controller_1.getPackagesPage);
/**
 * GET /packages (alias en inglés)
 * Redirecciona a /paquetes
 */
router.get('/packages', (req, res) => {
    res.redirect('/paquetes');
});
exports.default = router;
//# sourceMappingURL=web.routes.js.map