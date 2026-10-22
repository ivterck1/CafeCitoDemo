# Landing Restaurante Base

Starter reutilizable para landings gastronómicas con menú, carrito y pedidos por WhatsApp.

- HTML5, CSS3 y JavaScript Vanilla; no introducir frameworks sin aprobación.
- Sin backend ni base de datos en esta versión.
- Preservar separación config / data / theme / engine.
- No hardcodear identidad del cliente dentro de app.js.
- Todos los nuevos clientes deben poder personalizarse sin duplicar lógica funcional.
- Mantener responsive, pensar mobile-first y mantener accesibilidad básica.
- No romper carrito ni WhatsApp; validar datos antes de preparar pedidos.
- Mantener HTML semántico, botones cómodos y código claro sin duplicación.
- Explicar cambios y verificar el flujo afectado.
- No implementar cambios grandes fuera del alcance aprobado sin aprobación.

## Versionado y caché

- Usar `?v=1.0.0` como versión inicial en las cinco referencias CSS/JS de index.html.
- Al publicar cambios CSS/JS que deban invalidar caché, incrementar `?v=` en las cinco referencias principales de index.html. Mantener una misma versión de publicación para esos recursos, sin editar app.js para versionarlo.
- Favicon, logo, hero y productos también usan `?v=`. Al reemplazar un asset conservando su nombre, incrementar su versión en index.html, config.js, menu-data.js y/o theme.css donde corresponda, y la del CSS/JS que lo referencia.
- Mantener rutas relativas compatibles con el subdirectorio de GitHub Pages. Verificar recursos sin 404, consola y funcionamiento del carrito.
- No añadir service workers, frameworks ni mecanismos que desactiven completamente la caché.
