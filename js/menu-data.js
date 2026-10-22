// Productos y precios ficticios. Los tres primeros se muestran como especialidades.
const menuItems = [
  {
    "id": "latte-cito",
    "nombre": "Latte Cito",
    "descripcion": "Espresso doble y leche sedosa. Nuestro ritual de la casa.",
    "precio": 68,
    "categoria": "Café caliente",
    "imagen": "assets/images/products/cafe-placeholder.svg",
    "disponible": true
  },
  {
    "id": "croissant",
    "nombre": "Croissant de mantequilla",
    "descripcion": "Capas delicadas, mantequilla y un horneado dorado.",
    "precio": 52,
    "categoria": "Panadería",
    "imagen": "assets/images/products/pan-placeholder.svg",
    "disponible": true
  },
  {
    "id": "toast",
    "nombre": "Toast de aguacate",
    "descripcion": "Pan de masa madre, aguacate, semillas y limón.",
    "precio": 115,
    "categoria": "Desayunos",
    "imagen": "assets/images/products/toast-placeholder.svg",
    "disponible": true
  },
  {
    "id": "espresso",
    "nombre": "Espresso doble",
    "descripcion": "Una extracción corta, intensa y aromática.",
    "precio": 42,
    "categoria": "Café caliente",
    "imagen": "assets/images/products/cafe-placeholder.svg",
    "disponible": true
  },
  {
    "id": "flat-white",
    "nombre": "Flat White",
    "descripcion": "Espresso doble con una fina capa de microespuma.",
    "precio": 62,
    "categoria": "Café caliente",
    "imagen": "assets/images/products/cafe-placeholder.svg",
    "disponible": true
  },
  {
    "id": "latte-bruma",
    "nombre": "Latte Bruma",
    "descripcion": "Espresso, leche y un toque suave de vainilla.",
    "precio": 72,
    "categoria": "Café caliente",
    "imagen": "assets/images/products/cafe-placeholder.svg",
    "disponible": true
  },
  {
    "id": "cappuccino",
    "nombre": "Cappuccino",
    "descripcion": "El equilibrio de espresso, leche y espuma.",
    "precio": 62,
    "categoria": "Café caliente",
    "imagen": "assets/images/products/cafe-placeholder.svg",
    "disponible": true
  },
  {
    "id": "cold-brew",
    "nombre": "Cold Brew",
    "descripcion": "Extracción lenta en frío, suave y refrescante.",
    "precio": 65,
    "categoria": "Café frío",
    "imagen": "assets/images/products/frio-placeholder.svg",
    "disponible": true
  },
  {
    "id": "latte-frio",
    "nombre": "Latte frío",
    "descripcion": "Espresso y leche sobre hielo, preparado al momento.",
    "precio": 68,
    "categoria": "Café frío",
    "imagen": "assets/images/products/frio-placeholder.svg",
    "disponible": true
  },
  {
    "id": "espresso-tonic",
    "nombre": "Espresso Tonic",
    "descripcion": "Espresso, agua tónica y un toque de cítricos.",
    "precio": 78,
    "categoria": "Café frío",
    "imagen": "assets/images/products/frio-placeholder.svg",
    "disponible": true
  },
  {
    "id": "croissant-huevo",
    "nombre": "Croissant de huevo",
    "descripcion": "Croissant artesanal, huevo suave y queso.",
    "precio": 108,
    "categoria": "Desayunos",
    "imagen": "assets/images/products/pan-placeholder.svg",
    "disponible": true
  },
  {
    "id": "bowl",
    "nombre": "Bowl de fruta y granola",
    "descripcion": "Fruta de temporada, yogur natural y granola crujiente.",
    "precio": 95,
    "categoria": "Desayunos",
    "imagen": "assets/images/products/toast-placeholder.svg",
    "disponible": true
  },
  {
    "id": "rol-canela",
    "nombre": "Rol de canela",
    "descripcion": "Masa suave, canela y glaseado ligero.",
    "precio": 58,
    "categoria": "Panadería",
    "imagen": "assets/images/products/pan-placeholder.svg",
    "disponible": true
  },
  {
    "id": "pan-chocolate",
    "nombre": "Pan de chocolate",
    "descripcion": "Hojaldre de mantequilla con chocolate oscuro.",
    "precio": 56,
    "categoria": "Panadería",
    "imagen": "assets/images/products/pan-placeholder.svg",
    "disponible": true
  },
  {
    "id": "cheesecake",
    "nombre": "Cheesecake de café",
    "descripcion": "Cremoso, con espresso y base de galleta.",
    "precio": 88,
    "categoria": "Postres",
    "imagen": "assets/images/products/postre-placeholder.svg",
    "disponible": true
  },
  {
    "id": "tarta-limon",
    "nombre": "Tarta de limón",
    "descripcion": "Crema de limón y una delicada base crujiente.",
    "precio": 78,
    "categoria": "Postres",
    "imagen": "assets/images/products/postre-placeholder.svg",
    "disponible": true
  },
  {
    "id": "brownie",
    "nombre": "Brownie de chocolate oscuro",
    "descripcion": "Chocolate intenso, centro suave y nuez.",
    "precio": 65,
    "categoria": "Postres",
    "imagen": "assets/images/products/postre-placeholder.svg",
    "disponible": true
  }
];
