# Café Cito Demo

Concepto ficticio de cafetería de especialidad y panadería artesanal, creado desde LandingRestauranteBase. HTML, CSS y JavaScript Vanilla; sin backend, frameworks ni recursos externos.

## Personalización

- `js/config.js`: identidad, hero, MXN/es-MX, contacto ficticio y clave propia de localStorage.
- `js/menu-data.js`: 17 productos con precios ficticios entre $42 y $115. Los tres primeros disponibles son las especialidades.
- `css/theme.css`: paleta crema, café, terracota y salvia; serif Georgia y sans Segoe UI locales. Se carga después del CSS común para aplicar la identidad.
- `css/styles.css`: composición reutilizable del hero, tarjetas, categorías y responsive.
- `js/app.js`: motor original intacto.

## Ejecutar y verificar

Desde esta carpeta: `python -m http.server 8017 --bind 127.0.0.1` y abrir http://127.0.0.1:8017.

Con Playwright y Chrome disponibles: `node tests/smoke.cjs`. Si Playwright no está en la resolución de módulos, indicar su ruta mediante PLAYWRIGHT_MODULE o NODE_PATH. No es una dependencia de producción.

Pruebas a 1440, 390 y 375 px: todas las categorías y botones de producto, cantidades, eliminación, subtotal/total, recarga de localStorage, formulario y validaciones, domicilio/recoger, navegación y panel móvil. WhatsApp se intercepta en el navegador: no se envía ningún mensaje. Evidencia en `docs/test-results.json` y `docs/verification/`.

## Assets definitivos

Logo transparente: `assets/images/brand/logo-cafe-cito.png`, optimizado sin pérdida y sin cambiar píxeles. Se utiliza en header, historia, footer y favicon.

Hero: `assets/images/hero/hero-cafe-cito.webp` (1672 × 941, 284 KB). Conserva la composición existente con encuadre a la derecha mediante object-position.

Productos: `cafe-caliente.webp`, `cafe-frio.webp`, `desayunos.webp`, `panaderia.webp` y `postres.webp` dentro de `assets/images/products/`, con resolución 1254 × 1254 y pesos de 166–197 KB. Cada categoría comparte su fotografía, incluidos destacados y miniaturas del carrito.

Los PNG de fotografías se conservan como originales. Los SVG anteriores permanecen como respaldo sin referencias visuales activas. No se descargaron imágenes externas. Detalles de compresión en `docs/asset-optimization.json`.

Para fotografías individuales, añadir archivos dentro de products/ y actualizar `imagen` en cada producto. Para el hero actualizar config.images.hero y la referencia de respaldo en theme.css.

## Límites de la plantilla detectados

Los destacados dependen del orden del catálogo, no de un campo configurable; por eso las categorías se muestran según su primera aparición: Café caliente, Panadería, Desayunos, Café frío, Postres. No se cambió el motor para alterar ese comportamiento.

Algunos textos estructurales (CTA, beneficios, historia y footer) se personalizan en index.html; config.js no dispone de campos propios para todos ellos. La identidad CSS tiene reglas de tema además de variables porque los componentes base fijan mayúsculas, pesos, colores y sombras.

El panel móvil conserva el manejo de foco y Escape existente, pero no tiene un confinamiento completo del foco. El total solo incluye productos: no calcula envío ni impuestos adicionales. El catálogo es local y no valida inventario real.

WhatsApp utiliza la configuración actual de js/config.js; las pruebas interceptan todas las aperturas externas desde el inicio, incluso cuando está habilitado. No hay dirección, redes, horarios comerciales ni establecimiento real. Las opciones de entrega son solo una demostración del formulario.

## Publicación

Servir únicamente index.html, css/, js/ y assets/ en hosting estático. No requiere build. Esta versión es demostrativa y no acepta pedidos reales.

## Versionado y caché

Versión inicial de recursos: `1.0.0`. Las referencias locales principales de CSS y JavaScript en index.html incluyen `?v=1.0.0`, por ejemplo `css/styles.css?v=1.0.0`.

Cuando se publique una actualización de CSS/JS que deba invalidar caché, incrementar el parámetro `?v=` en las cinco referencias de index.html (styles.css, theme.css, config.js, menu-data.js y app.js), por ejemplo a `?v=1.0.1`. No es necesario modificar el motor app.js para actualizar su URL.

El favicon, logo, hero y fotos de productos también llevan versión en sus referencias de index.html, js/config.js, js/menu-data.js y css/theme.css. Si se sustituye una imagen manteniendo el nombre, incrementar su `?v=` en todos los lugares donde se referencia y versionar también el CSS/JS que contiene esa URL.

Conservar rutas relativas para GitHub Pages, incluido el subdirectorio del repositorio. El parámetro cambia la URL solicitada sin desactivar la caché: los recursos de una misma versión pueden seguir almacenándose normalmente. No se utiliza service worker. Publicar siempre index.html junto con los recursos actualizados.
