/**
 * ================================
 * ANTSMARTHOME - TIPOS E INTERFACES
 * ================================
 * Definiciones de tipos para TypeScript
 */

// Paquete de domótica
export interface Package {
    id: string;
    name: string;
    description: string;
    price: string;
    featured: boolean;
    benefits: string[];
    whatsappMessage: string;
}

// Servicio ofrecido
export interface Service {
    icon: string;
    title: string;
    description: string;
}

// Beneficio
export interface Benefit {
    icon: string;
    title: string;
    description: string;
}

// Video para la sección multimedia
export interface Video {
    id: string;
    title: string;
    description: string;
    youtubeId?: string;
    thumbnail?: string;
    type: 'youtube' | 'local' | 'placeholder';
}

// Información de la empresa
export interface CompanyInfo {
    name: string;
    slogan: string;
    city: string;
    country: string;
    email: string;
    phone: string;
}

// Variables locales para las vistas
export interface ViewLocals {
    whatsappNumber: string;
    generateWhatsAppLink: (message: string) => string;
    currentYear: number;
    company: CompanyInfo;
}

// Datos para la página home
export interface HomePageData {
    title: string;
    description: string;
    packages: Package[];
    services: Service[];
    benefits: Benefit[];
    videos: Video[];
}

// Datos para la página de paquetes
export interface PackagesPageData {
    title: string;
    description: string;
    packages: Package[];
}
