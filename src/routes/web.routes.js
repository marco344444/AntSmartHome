/**
 * ================================
 * RUTAS WEB
 * ================================
 * Define todas las rutas públicas de la aplicación
 */

const express = require('express');
const router = express.Router();

// Importar controladores
const homeController = require('../controllers/home.controller');

// ================================
// RUTAS PRINCIPALES
// ================================

/**
 * GET /
 * Página principal - Landing page
 */
router.get('/', homeController.getHomePage);

/**
 * GET /paquetes
 * Página de paquetes detallados
 */
router.get('/paquetes', homeController.getPackagesPage);

/**
 * GET /packages (alias en inglés)
 * Redirecciona a /paquetes
 */
router.get('/packages', (req, res) => {
    res.redirect('/paquetes');
});

// Exportar rutas
module.exports = router;
