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

## Imágenes pendientes

Todos los SVG son propios y locales. Las ilustraciones están identificadas como placeholders.

- `assets/images/brand/placeholder.svg`: propuesta tipográfica provisional; sustituir por marca definitiva si se dispone de ella. También se usa como favicon.
- `assets/images/hero/placeholder.svg`: sustituir por fotografía vertical de mesa con café, pan y luz natural (referencia 640 × 760).
- `assets/images/products/cafe-placeholder.svg`: fotografía de café caliente.
- `assets/images/products/frio-placeholder.svg`: fotografía de café frío.
- `assets/images/products/pan-placeholder.svg`: fotografía de panadería.
- `assets/images/products/toast-placeholder.svg`: fotografía de desayunos.
- `assets/images/products/postre-placeholder.svg`: fotografía de postres.
- `assets/images/products/placeholder.svg`: respaldo genérico.

Para fotografías individuales, añadir archivos dentro de products/ y actualizar `imagen` en cada producto. Para el hero actualizar config.images.hero. No se descargaron fotos externas.

## Límites de la plantilla detectados

Los destacados dependen del orden del catálogo, no de un campo configurable; por eso las categorías se muestran según su primera aparición: Café caliente, Panadería, Desayunos, Café frío, Postres. No se cambió el motor para alterar ese comportamiento.

Algunos textos estructurales (CTA, beneficios, historia y footer) se personalizan en index.html; config.js no dispone de campos propios para todos ellos. La identidad CSS tiene reglas de tema además de variables porque los componentes base fijan mayúsculas, pesos, colores y sombras.

El panel móvil conserva el manejo de foco y Escape existente, pero no tiene un confinamiento completo del foco. El total solo incluye productos: no calcula envío ni impuestos adicionales. El catálogo es local y no valida inventario real.

WhatsApp permanece desactivado, con el número ficticio original. No hay dirección, redes, horarios comerciales ni establecimiento real. Las opciones de entrega son solo una demostración del formulario.

## Publicación

Servir únicamente index.html, css/, js/ y assets/ en hosting estático. No requiere build. Esta versión es demostrativa y no acepta pedidos reales.
