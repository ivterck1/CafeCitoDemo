# Landing Restaurante Base

Starter reutilizable para restaurantes, cafeterías y negocios gastronómicos. HTML5, CSS3 y JavaScript Vanilla, sin backend ni dependencias de producción.

## Funcionalidades

Menú dinámico, categorías derivadas del catálogo, destacados (primeros tres disponibles), carrito, cantidades, eliminación, subtotal y total, localStorage, formulario, validaciones, mensaje para WhatsApp y panel móvil responsive.

## Estructura del proyecto

- index.html: estructura semántica y textos comunes.
- js/config.js: configuración del negocio, contacto, hero, moneda y WhatsApp.
- js/menu-data.js: productos y categorías.
- css/theme.css: identidad visual, fuentes, radios, sombras y fondos hero.
- css/styles.css: layout, componentes y responsive compartidos.
- js/app.js: motor funcional reutilizable.
- assets/images/brand/: logos y favicon.
- assets/images/hero/: portada y variantes móviles.
- assets/images/products/: imágenes de productos.
- docs/: inventario de migración y resultados de pruebas.
- archive/source-project.zip: respaldo original, excluido de Git; no publicar.

## Crear un nuevo proyecto

Copia esta plantilla o configúrala como GitHub Template Repository y utiliza Use this template. Crea un repositorio independiente por cliente. Personaliza configuración, datos, tema e imágenes sin duplicar lógica funcional.

1. En config.js cambia business, hero y contact. Los campos vacíos no se muestran; redes sociales requieren URL HTTPS completa.
2. Define order.currency y order.locale. Asigna order.storageKey único por cliente para aislar carritos en un mismo origen. No se recuperan carritos del proyecto anterior. Al recargar se toman los precios actuales del catálogo.
3. En menu-data.js conserva el modelo id, nombre, descripcion, precio, categoria, imagen, disponible. Usa ID únicos y estables, precios numéricos no negativos y categorías con su nombre visible. Las categorías se generan automáticamente; Temporada demuestra una categoría sin disponibilidad.
4. Personaliza theme.css: colores principales y secundarios, fondos, tipografías, radios y efectos. Las variables detail-color controlan transparencias y overlays del layout. Comprueba contraste después de cambiar la paleta.
5. Coloca logos en brand/, portada en hero/ y fotos en products/. Actualiza config.images y la ruta imagen de cada producto. El fondo visible del hero usa --hero-image y --hero-image-mobile en theme.css. Cambia favicon en index.html. Los SVG incluidos son placeholders editables.

## Configurar WhatsApp

En config.js establece whatsapp.number con código de país y número aceptado por WhatsApp: solo dígitos, sin +, espacios ni guiones. Activa whatsapp.enabled cuando tengas un número real. La demo está desactivada.

El flujo valida carrito, nombre, entrega y dirección para domicilio; abre un mensaje preparado y el cliente confirma el envío en WhatsApp. El total incluye solo productos, sin cálculo de envío ni impuestos adicionales.

## Cómo probar

Ejecuta python -m http.server 8000 --bind 127.0.0.1 y abre http://127.0.0.1:8000. Comprueba 1440, 390 y 375 px: categorías, agregar, +/-, eliminar, subtotal, total, recarga, formulario, WhatsApp, panel y navegación. Revisa consola, recursos y scroll horizontal. Consulta docs/test-results.json para el resultado automatizado.

## Cómo publicar

Publica únicamente index.html, css/, js/ y assets/ en un hosting estático como GitHub Pages. No requiere build. Excluye archive/, documentación y pruebas del despliegue. Configura productos reales, contacto, WhatsApp y metadatos HTML antes de publicar; los rastreadores pueden no ejecutar JavaScript. Agrega una URL absoluta og:image cuando exista un dominio. Comprueba rutas, HTTPS y un pedido real desde teléfono.

## Antes de iniciar Git

Consulta docs/migration.md. El archivo ZIP conserva material comercial anterior: guarda una copia externa y retíralo de la plantilla al aprobar la migración. Está ignorado por Git, pero un hosting que publique toda la carpeta podría exponerlo. No se ha inicializado Git.
