# 🏠 AntSmartHome - Landing Page

Landing page profesional para **AntSmartHome**, empresa de domótica (hogares inteligentes) en Bucaramanga, Colombia.

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.18-blue)
![EJS](https://img.shields.io/badge/EJS-3.1-yellow)

## 📋 Descripción

Sitio web comercial optimizado para conversión, donde el principal canal de contacto es **WhatsApp**. No utiliza base de datos ni formularios tradicionales.

### Características principales:

- ✅ Diseño moderno y profesional (mobile-first)
- ✅ Optimizado para conversión
- ✅ Enlaces de WhatsApp con mensajes precargados
- ✅ 4 paquetes de domótica con CTAs claros
- ✅ SEO básico implementado
- ✅ Seguridad con Helmet.js
- ✅ Preparado para deploy en Render/Railway

## 🛠️ Stack Tecnológico

- **Runtime:** Node.js (18+)
- **Framework:** Express.js
- **Motor de plantillas:** EJS
- **Estilos:** CSS puro (variables CSS, flexbox, grid)
- **Seguridad:** Helmet.js
- **Arquitectura:** MVC ligera

## 📁 Estructura del Proyecto

```
antsmarthome/
├── src/
│   ├── controllers/
│   │   └── home.controller.js    # Lógica de las páginas
│   ├── routes/
│   │   └── web.routes.js         # Definición de rutas
│   ├── views/
│   │   ├── layouts/
│   │   │   └── main.ejs          # Layout principal
│   │   └── pages/
│   │       ├── home.ejs          # Página principal
│   │       └── packages.ejs      # Página de paquetes
│   └── app.js                    # Aplicación Express
├── public/
│   ├── css/
│   │   └── styles.css            # Estilos principales
│   ├── js/
│   │   └── main.js               # JavaScript del frontend
│   └── images/                   # Imágenes estáticas
├── .env                          # Variables de entorno
├── .env.example                  # Ejemplo de variables
├── .gitignore                    # Archivos ignorados
├── package.json                  # Dependencias
└── README.md                     # Este archivo
```

## 🚀 Instalación

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn

### Pasos

1. **Clonar o copiar el proyecto**

```bash
cd antsmarthome
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar .env con tus valores
# IMPORTANTE: Cambiar el número de WhatsApp
```

4. **Ejecutar en desarrollo**

```bash
npm run dev
```

5. **Abrir en el navegador**

```
http://localhost:3000
```

## ⚙️ Variables de Entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `PORT` | Puerto del servidor | `3000` |
| `NODE_ENV` | Entorno de ejecución | `development` |
| `WHATSAPP_NUMBER` | Número de WhatsApp (con código país) | `573001234567` |
| `BASE_URL` | URL base del sitio | `http://localhost:3000` |

### Configurar WhatsApp

El número debe incluir el código de país sin el signo `+`:

- ✅ `573001234567` (Colombia)
- ❌ `+57 300 123 4567`
- ❌ `3001234567`

## 📦 Paquetes de Domótica

El sitio incluye 4 paquetes predefinidos:

1. **Inicio Inteligente** - Paquete básico para comenzar
2. **Confort y Seguridad** - Comodidad + cámaras
3. **Hogar Inteligente** - Automatización completa
4. **Todo Bajo Control** - Paquete premium (destacado)

Los paquetes se pueden modificar en:
```
src/controllers/home.controller.js
```

## 🚢 Deploy

### Render

1. Crear nuevo Web Service
2. Conectar repositorio
3. Configurar:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Añadir variables de entorno
5. Deploy

### Railway

1. Conectar repositorio
2. Railway detecta Node.js automáticamente
3. Añadir variables de entorno
4. Deploy

### Variables de entorno para producción

```
PORT=3000
NODE_ENV=production
WHATSAPP_NUMBER=57XXXXXXXXXX
BASE_URL=https://tu-dominio.com
```

## 📄 Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing page principal |
| `/paquetes` | Página detallada de paquetes |

## 🎨 Personalización

### Colores

Los colores se pueden modificar en `public/css/styles.css`:

```css
:root {
    --color-primary: #0066FF;      /* Azul principal */
    --color-secondary: #1A1A2E;    /* Azul oscuro */
    --color-white: #FFFFFF;
    --color-black: #0D0D0D;
}
```

### Información de la empresa

Modificar en `src/app.js`:

```javascript
res.locals.company = {
    name: 'AntSmartHome',
    slogan: 'Tu hogar, más inteligente',
    city: 'Bucaramanga',
    country: 'Colombia',
    email: 'info@antsmarthome.com',
    phone: '+57 300 123 4567'
};
```

## 📱 WhatsApp

### Función helper

La función `generateWhatsAppLink()` está disponible en todas las vistas:

```ejs
<a href="<%= generateWhatsAppLink('Tu mensaje aquí') %>">
    Contactar
</a>
```

### Mensaje personalizado por paquete

Cada paquete tiene su propio mensaje en `home.controller.js`:

```javascript
whatsappMessage: '¡Hola! Me interesa el paquete *Inicio Inteligente*...'
```

## 🔒 Seguridad

- **Helmet.js** para headers de seguridad
- **CSP** configurado para recursos externos
- No hay base de datos ni datos sensibles
- No hay autenticación

## 📈 Preparado para Analytics

El archivo `public/js/main.js` incluye una función `trackEvent()` preparada para:

- Google Analytics 4
- Facebook Pixel

Solo necesitas añadir los scripts de tracking en el layout.

## 🤝 Soporte

Para soporte técnico o consultas sobre domótica:

- 📍 Bucaramanga, Colombia
- 📧 info@antsmarthome.com
- 💬 WhatsApp: +57 300 123 4567

---

Desarrollado con ❤️ para **AntSmartHome**
