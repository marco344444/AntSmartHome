/**
 * ================================
 * CONTROLADOR HOME
 * ================================
 * Maneja la lógica de las páginas principales
 */
import { Request, Response } from 'express';
import { packages, services, benefits, videos } from '../data';
/**
 * Renderiza la página principal (Home)
 */
export declare const getHomePage: (req: Request, res: Response) => void;
/**
 * Renderiza la página de paquetes detallados
 */
export declare const getPackagesPage: (req: Request, res: Response) => void;
export { packages, services, benefits, videos };
//# sourceMappingURL=home.controller.d.ts.map