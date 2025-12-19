"use strict";
/**
 * ================================
 * ANTSMARTHOME - DATOS DE LA APLICACIÓN
 * ================================
 * Datos centralizados para paquetes, servicios y beneficios
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.videos = exports.benefits = exports.services = exports.packages = void 0;
// ================================
// PAQUETES DE DOMÓTICA
// ================================
exports.packages = [
    {
        id: 'inicio-inteligente',
        name: 'Inicio Inteligente',
        description: 'Perfecto para comenzar tu experiencia en domótica',
        price: 'Desde $890.000',
        featured: false,
        benefits: [
            '1 Asistente de voz (Alexa Echo Dot o Google Home Mini)',
            '2 Bombillas inteligentes WiFi',
            '1 Enchufe inteligente WiFi',
            'Configuración e instalación incluida',
            'Capacitación de uso básico',
            'Soporte técnico por 3 meses'
        ],
        whatsappMessage: '¡Hola! Me interesa el paquete *Inicio Inteligente* de AntSmartHome. Quisiera recibir más información y una cotización personalizada. ¡Gracias!'
    },
    {
        id: 'confort-seguridad',
        name: 'Confort y Seguridad',
        description: 'Comodidad y protección para tu familia',
        price: 'Desde $1.890.000',
        featured: false,
        benefits: [
            '1 Asistente de voz con pantalla (Echo Show 5 o Nest Hub)',
            '4 Bombillas inteligentes WiFi',
            '2 Enchufes inteligentes WiFi',
            '1 Cámara de seguridad interior WiFi',
            '1 Sensor de movimiento inteligente',
            'Configuración e instalación incluida',
            'Soporte técnico por 6 meses'
        ],
        whatsappMessage: '¡Hola! Me interesa el paquete *Confort y Seguridad* de AntSmartHome. Quisiera recibir más información y una cotización personalizada. ¡Gracias!'
    },
    {
        id: 'hogar-inteligente',
        name: 'Hogar Inteligente',
        description: 'Automatización completa para tu hogar',
        price: 'Desde $3.290.000',
        featured: false,
        benefits: [
            '1 Hub central de automatización',
            '1 Asistente de voz con pantalla',
            '6 Bombillas inteligentes WiFi',
            '4 Enchufes inteligentes WiFi',
            '2 Cámaras de seguridad (interior y exterior)',
            '1 Cerradura inteligente',
            '2 Sensores de puertas/ventanas',
            'Automatizaciones personalizadas',
            'Soporte técnico por 12 meses'
        ],
        whatsappMessage: '¡Hola! Me interesa el paquete *Hogar Inteligente* de AntSmartHome. Quisiera recibir más información y una cotización personalizada. ¡Gracias!'
    },
    {
        id: 'todo-bajo-control',
        name: 'Todo Bajo Control',
        description: 'La experiencia domótica más completa',
        price: 'Desde $5.990.000',
        featured: true,
        benefits: [
            '1 Hub central profesional',
            '2 Asistentes de voz con pantalla',
            '10 Bombillas inteligentes WiFi',
            '6 Enchufes inteligentes WiFi',
            '4 Cámaras de seguridad HD',
            '1 Videoportero inteligente',
            '2 Cerraduras inteligentes',
            '4 Sensores de puertas/ventanas',
            '2 Sensores de movimiento',
            '1 Termostato inteligente',
            'Sistema de alarma integrado',
            'Automatizaciones avanzadas ilimitadas',
            'Soporte técnico prioritario por 24 meses'
        ],
        whatsappMessage: '¡Hola! Me interesa el paquete *Todo Bajo Control* de AntSmartHome. Es el paquete más completo y quisiera recibir toda la información disponible y una cotización personalizada. ¡Gracias!'
    }
];
// ================================
// SERVICIOS
// ================================
exports.services = [
    {
        icon: '🏠',
        title: 'Automatización del Hogar',
        description: 'Control total de luces, enchufes, cortinas y electrodomésticos desde tu celular o con comandos de voz.'
    },
    {
        icon: '🔒',
        title: 'Seguridad Inteligente',
        description: 'Cámaras, sensores, cerraduras inteligentes y alarmas que protegen tu hogar 24/7.'
    },
    {
        icon: '💡',
        title: 'Iluminación Smart',
        description: 'Bombillas y sistemas de iluminación que se adaptan a tu rutina y ahorran energía automáticamente.'
    },
    {
        icon: '🌡️',
        title: 'Climatización',
        description: 'Control de aire acondicionado y calefacción con termostatos inteligentes y programables.'
    },
    {
        icon: '🎙️',
        title: 'Control por Voz',
        description: 'Integración con Alexa, Google Assistant y Siri para controlar todo con tu voz.'
    },
    {
        icon: '📱',
        title: 'App Unificada',
        description: 'Una sola aplicación para controlar todos los dispositivos de tu hogar desde cualquier lugar.'
    }
];
// ================================
// BENEFICIOS
// ================================
exports.benefits = [
    {
        icon: '⚡',
        title: 'Ahorro Energético',
        description: 'Reduce hasta un 30% en tu factura de energía con automatizaciones inteligentes.'
    },
    {
        icon: '🛡️',
        title: 'Mayor Seguridad',
        description: 'Monitorea y protege tu hogar en tiempo real desde cualquier lugar del mundo.'
    },
    {
        icon: '😌',
        title: 'Comodidad Total',
        description: 'Controla todo con tu voz o desde tu celular, sin moverte del sofá.'
    },
    {
        icon: '📍',
        title: 'Soporte Local',
        description: 'Atención personalizada en Bucaramanga. Estamos cerca cuando nos necesitas.'
    },
    {
        icon: '🔧',
        title: 'Instalación Profesional',
        description: 'Técnicos certificados que configuran todo para que funcione perfectamente.'
    },
    {
        icon: '💰',
        title: 'Valorización',
        description: 'Un hogar inteligente aumenta el valor de tu propiedad en el mercado.'
    }
];
// ================================
// VIDEOS (Placeholders para tu contenido)
// ================================
exports.videos = [
    {
        id: 'video-1',
        title: '¿Quiénes Somos?',
        description: 'Conoce al equipo detrás de AntSmartHome y nuestra pasión por la domótica.',
        type: 'placeholder',
        thumbnail: '/images/video-placeholder-1.jpg'
    },
    {
        id: 'video-2',
        title: '¿Qué Hacemos?',
        description: 'Descubre cómo transformamos hogares comunes en espacios inteligentes.',
        type: 'placeholder',
        thumbnail: '/images/video-placeholder-2.jpg'
    },
    {
        id: 'video-3',
        title: 'Casos de Éxito',
        description: 'Mira cómo nuestros clientes disfrutan de sus hogares automatizados.',
        type: 'placeholder',
        thumbnail: '/images/video-placeholder-3.jpg'
    }
];
//# sourceMappingURL=index.js.map