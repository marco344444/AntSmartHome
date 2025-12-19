/**
 * ================================
 * CONTROLADOR HOME
 * ================================
 * Maneja la lógica de las páginas principales
 */

// Datos de los paquetes de domótica
const packages = [
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

// Datos de los servicios
const services = [
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

// Datos de beneficios
const benefits = [
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

/**
 * Renderiza la página principal (Home)
 */
const getHomePage = (req, res) => {
    res.render('pages/home', {
        title: 'AntSmartHome - Domótica en Bucaramanga | Hogares Inteligentes',
        description: 'Transformamos tu hogar en un espacio inteligente. Instalación profesional de domótica en Bucaramanga, Colombia. Cotiza por WhatsApp.',
        packages: packages,
        services: services,
        benefits: benefits
    });
};

/**
 * Renderiza la página de paquetes detallados
 */
const getPackagesPage = (req, res) => {
    res.render('pages/packages', {
        title: 'Paquetes de Domótica - AntSmartHome Bucaramanga',
        description: 'Descubre nuestros paquetes de domótica. Desde soluciones básicas hasta sistemas completos de automatización del hogar.',
        packages: packages
    });
};

// Exportar controladores
module.exports = {
    getHomePage,
    getPackagesPage,
    packages,
    services,
    benefits
};
