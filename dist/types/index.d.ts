/**
 * ================================
 * ANTSMARTHOME - TIPOS E INTERFACES
 * ================================
 * Definiciones de tipos para TypeScript
 */
export interface Package {
    id: string;
    name: string;
    description: string;
    price: string;
    featured: boolean;
    benefits: string[];
    whatsappMessage: string;
}
export interface Service {
    icon: string;
    title: string;
    description: string;
}
export interface Benefit {
    icon: string;
    title: string;
    description: string;
}
export interface Video {
    id: string;
    title: string;
    description: string;
    youtubeId?: string;
    thumbnail?: string;
    type: 'youtube' | 'local' | 'placeholder';
}
export interface CompanyInfo {
    name: string;
    slogan: string;
    city: string;
    country: string;
    email: string;
    phone: string;
}
export interface ViewLocals {
    whatsappNumber: string;
    generateWhatsAppLink: (message: string) => string;
    currentYear: number;
    company: CompanyInfo;
}
export interface HomePageData {
    title: string;
    description: string;
    packages: Package[];
    services: Service[];
    benefits: Benefit[];
    videos: Video[];
}
export interface PackagesPageData {
    title: string;
    description: string;
    packages: Package[];
}
//# sourceMappingURL=index.d.ts.map