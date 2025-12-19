/**
 * ================================
 * RUTAS WEB
 * ================================
 * Define todas las rutas públicas de la aplicación
 */

import { Router, Request, Response } from 'express';
import { getHomePage, getPackagesPage } from '../controllers/home.controller';

const router = Router();

// ================================
// RUTAS PRINCIPALES
// ================================

/**
 * GET /
 * Página principal - Landing page
 */
router.get('/', getHomePage);

/**
 * GET /paquetes
 * Página de paquetes detallados
 */
router.get('/paquetes', getPackagesPage);

/**
 * GET /packages (alias en inglés)
 * Redirecciona a /paquetes
 */
router.get('/packages', (req: Request, res: Response) => {
    res.redirect('/paquetes');
});

export default router;
