# 🌐 IB�RICA DE REVESTIMIENTOS - Sitio Web Profesional

Sitio web completamente responsivo y funcional para IB�RICA DE REVESTIMIENTOS - Soluciones profesionales de impermeabilización.

## 📋 Contenido del Proyecto

```
impermeabilizacionesmb/
├── index.html              # Página de inicio
├── servicios.html          # Servicios (Piscinas, Azoteas, Depósitos)
├── trabajos.html           # Galería de trabajos realizados
├── nosotros.html           # Información de la empresa
├── contacto.html           # Formulario de contacto (integrado con Netlify)
├── privacidad.html         # Política de Privacidad
├── aviso-legal.html        # Aviso Legal
├── gracias.html            # Página de confirmación
├── css/
│   └── styles.css          # Estilos responsivos (CSS3)
├── js/
│   └── script.js           # Interactividad (Menú, Cookies, Validación)
├── img/                    # Carpeta para imágenes
├── netlify.toml            # Configuración de Netlify
└── README.md               # Este archivo
```

## ✨ Características

✅ **Diseño Responsivo** - Funciona perfectamente en mobile, tablet y desktop
✅ **Formulario Funcional** - Integrado con Netlify Forms para recibir mensajes
✅ **Banner de Cookies** - Cumple con RGPD/LOPDGDD
✅ **SEO Optimizado** - Meta tags y estructura semántica
✅ **Menú Mobile** - Hamburguesa con navigation smooth
✅ **Validación de Formulario** - JavaScript puro sin dependencias
✅ **Velocidad Optimizada** - CSS y JS nativos, cargas rápidas
✅ **Seguridad** - Headers de seguridad configurados

## 🚀 Cómo Desplegar en Netlify

### Opción 1: Vía GitHub (Recomendado - Despliegue Automático)

1. **Crea un repositorio en GitHub**
   - Ve a [github.com/new](https://github.com/new)
   - Nombre: `impermeabilizacionesmb`
   - Descripción: "Sitio web de impermeabilización"
   - Selecciona "Public"

2. **Sube los archivos a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Primera actualización del sitio web"
   git remote add origin https://github.com/tuusuario/impermeabilizacionesmb.git
   git push -u origin main
   ```

3. **Conecta GitHub con Netlify**
   - Ve a [netlify.com](https://netlify.com) y crea una cuenta (gratis)
   - Click en "Add new site" → "Import an existing project"
   - Selecciona GitHub y autoriza
   - Elige tu repositorio `impermeabilizacionesmb`
   - Publish directory: `.` (punto)
   - Click "Deploy"

### Opción 2: Drag & Drop (Más Rápido - Sin GitHub)

1. Crea una carpeta `impermeabilizacionesmb` en tu PC con todos los archivos
2. Ve a [netlify.com/drop](https://netlify.com/drop)
3. Arrastra la carpeta completa al área de drop
4. ¡Listo! Tu sitio estará en línea en segundos

### Opción 3: CLI de Netlify

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=.
```

## 🔧 Configuración de Nombres de Dominio

Después de desplegar:

1. **Dominio Gratuito de Netlify** (ej: `impermeabilizacionesmb.netlify.app`)
   - Ya lo tienes automáticamente

2. **Dominio Personalizado** (ej: `impermeabilizacionesmb.com`)
   - En Netlify Dashboard → Site settings → Domain management
   - Click "Add domain"
   - Sigue las instrucciones para configurar DNS

## 📧 Configurar Recepción de Formularios

El formulario de contacto usa **Netlify Forms**. Para recibir los mensajes:

1. Ve a tu sitio en Netlify Dashboard
2. Click en "Forms"
3. Verás los mensajes llegando en tiempo real
4. (Opcional) Configura notificaciones por email:
   - Click en "Settings" de la forma
   - Agregar "Email notification"
   - Ingresa tu email

## 📱 Contacto de la Empresa

- 📞 **Teléfono**: +34 601 506 850
- 📧 **Email**: contacto@ibericaderevestimientos.com
- 💬 **WhatsApp**: Disponible en el sitio

## 🔒 Seguridad y Privacidad

- ✅ Política de Privacidad actualizada
- ✅ Aviso Legal completo
- ✅ Banner de cookies RGPD
- ✅ Headers de seguridad en Netlify
- ✅ HTTPS automático (certificado SSL gratis)

## 🎨 Personalización

### Cambiar Colores
Edita `css/styles.css`:
- Color azul: `#0066cc` → tu color
- Color naranja: `#ff6b35` → tu color

### Cambiar Logo/Nombre
Busca en los archivos `.html`:
- `💧 IB�RICA DE REVESTIMIENTOS` → tu nombre

### Agregar Imágenes
- Sube imágenes a la carpeta `/img`
- Referencia en HTML: `<img src="img/foto.jpg" alt="Descripción">`

## 💡 Próximas Mejoras (Opcional)

- Agregar imágenes de proyectos en `trabajos.html`
- Integrar Google Analytics
- Agregar más testimonios
- Crear blog de noticias
- Agregar chat en vivo (Zendesk, Intercom)

## 📞 Soporte

Si tienes problemas con:
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Código HTML/CSS/JS**: Revisa los comentarios en los archivos
- **Dominio**: Contacta al proveedor de dominio

## 📄 Licencia

Proyecto privado para IB�RICA DE REVESTIMIENTOS

---

**¡Tu sitio web está listo para ir en vivo! 🎉**


