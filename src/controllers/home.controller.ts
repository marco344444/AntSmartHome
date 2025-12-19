/**
 * ================================
 * CONTROLADOR HOME
 * ================================
 * Maneja la lógica de las páginas principales
 */

import { Request, Response } from 'express';
import { packages, services, benefits, videos } from '../data';
import { HomePageData, PackagesPageData } from '../types';

/**
 * Renderiza la página principal (Home)
 */
export const getHomePage = (req: Request, res: Response): void => {
    const pageData: HomePageData = {
        title: 'AntSmartHome - Domótica en Bucaramanga | Hogares Inteligentes',
        description: 'Transformamos tu hogar en un espacio inteligente. Instalación profesional de domótica en Bucaramanga, Colombia. Cotiza por WhatsApp.',
        packages,
        services,
        benefits,
        videos
    };

    res.render('pages/home', pageData);
};

/**
 * Renderiza la página de paquetes detallados
 */
export const getPackagesPage = (req: Request, res: Response): void => {
    const pageData: PackagesPageData = {
        title: 'Paquetes de Domótica - AntSmartHome Bucaramanga',
        description: 'Descubre nuestros paquetes de domótica. Desde soluciones básicas hasta sistemas completos de automatización del hogar.',
        packages
    };

    res.render('pages/packages', pageData);
};

// Re-exportar datos para uso en otras partes
export { packages, services, benefits, videos };
