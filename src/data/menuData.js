export const restaurantData = {
  name: "AURELIO",
  subtitle: "Bistro & Cava Urbana",
  currency: "$",
  whatsappPhone: "5215512345678", // Número para recepción de pedidos
  schedule: "Mar - Dom: 13:00 - 23:00",
  wifiName: "Aurelio_Clientes",
  wifiPass: "bistro2026",
  address: "Av. Campos Elíseos 182, Polanco",
  currencyCode: "USD"
};

export const categories = [
  { id: "entradas", name: "Entradas & Tapas", icon: "UtensilsCrossed" },
  { id: "cortes", name: "Cortes a la Leña", icon: "Flame" },
  { id: "burgers", name: "Burgers Gourmet", icon: "Sandwich" },
  { id: "postres", name: "Postres de Autor", icon: "Cake" },
  { id: "bebidas", name: "Mixología & Cava", icon: "Wine" }
];

export const menuItems = [
  {
    id: "e1",
    categoryId: "entradas",
    name: "Carpaccio de Res Trufado",
    price: 16.50,
    description: "Láminas finas de lomo de res madurado, lascas de parmesano Reggiano 24 meses, alcaparras fritas, brotes frescos y reducción de aceite de trufa blanca.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    badge: "Recomendación del Chef",
    allergens: ["Lácteos"],
    available: true,
    optionGroups: [
      {
        id: "pan",
        title: "Acompañamiento de pan",
        required: true,
        type: "single",
        options: [
          { id: "focaccia", label: "Focaccia de romero al horno", extraPrice: 0 },
          { id: "crostini", label: "Crostinis crujientes con ajo", extraPrice: 0 }
        ]
      },
      {
        id: "extras",
        title: "Extras gourmet",
        required: false,
        type: "multiple",
        options: [
          { id: "extra-trufa", label: "Lluvia extra de trufa negra fresca", extraPrice: 4.50 },
          { id: "extra-parmesano", label: "Doble porción de Parmesano Reggiano", extraPrice: 2.00 }
        ]
      }
    ]
  },
  {
    id: "e2",
    categoryId: "entradas",
    name: "Burrata Pugliese Ahumada",
    price: 15.00,
    description: "Burrata cremosa de Puglia, tomates cherry confitados al tomillo, higos caramelizados, pesto de pistacho siciliano y crocante de focaccia.",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
    badge: "Vegetariano",
    allergens: ["Lácteos", "Frutos secos"],
    available: true,
    optionGroups: [
      {
        id: "adicion",
        title: "Añadir proteína",
        required: false,
        type: "single",
        options: [
          { id: "sin-proteina", label: "Sin proteína adicional", extraPrice: 0 },
          { id: "prosciutto", label: "Láminas de Prosciutto di Parma D.O.P. (60g)", extraPrice: 4.00 }
        ]
      }
    ]
  },
  {
    id: "c1",
    categoryId: "cortes",
    name: "Ojo de Bife Angus Reserva (380g)",
    price: 34.00,
    description: "Corte marmoleado con 35 días de maduración en seco, sellado a la brasa de quebracho blanco, servido con sal maldón escamada y mantequilla de hierbas provenzales.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    badge: "Corte Estrella",
    allergens: [],
    available: true,
    optionGroups: [
      {
        id: "termino",
        title: "Término de la carne (Obligatorio)",
        required: true,
        type: "single",
        options: [
          { id: "rojo", label: "Rojo Inglés (Sellado por fuera, centro rojo tibio)", extraPrice: 0 },
          { id: "medio", label: "Término Medio (Punto recomendado por el chef)", extraPrice: 0 },
          { id: "tres-cuartos", label: "Tres Cuartos (Rosado suave en el centro)", extraPrice: 0 },
          { id: "bien-cocido", label: "Bien Cocido", extraPrice: 0 }
        ]
      },
      {
        id: "guarnicion",
        title: "Guarnición incluida (Selecciona 1)",
        required: true,
        type: "single",
        options: [
          { id: "pure-trufa", label: "Puré de papa rústico infusionado con trufa", extraPrice: 0 },
          { id: "papas-romero", label: "Papas gajo crujientes al romero y sal marina", extraPrice: 0 },
          { id: "esparragos", label: "Espárragos verdes a la parrilla con limón amarillo", extraPrice: 1.50 }
        ]
      },
      {
        id: "salsas",
        title: "Salsas de la casa",
        required: false,
        type: "multiple",
        options: [
          { id: "chimi-humo", label: "Chimichurri ahumado de la casa", extraPrice: 1.00 },
          { id: "pimienta-verde", label: "Salsa demiglace de pimienta verde al coñac", extraPrice: 2.00 }
        ]
      }
    ]
  },
  {
    id: "c2",
    categoryId: "cortes",
    name: "Picaña Black Angus (400g)",
    price: 29.50,
    description: "Tapa de cuadril con corona de grasa crocante caramelizada a la brasa, servida en tabla de olivo con farofa tostada y chimichurri artesanal.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    allergens: [],
    available: true,
    optionGroups: [
      {
        id: "termino",
        title: "Término de cocción",
        required: true,
        type: "single",
        options: [
          { id: "medio", label: "Término Medio (Jugoso y tierno)", extraPrice: 0 },
          { id: "tres-cuartos", label: "Tres Cuartos", extraPrice: 0 },
          { id: "bien-cocido", label: "Bien Cocido", extraPrice: 0 }
        ]
      },
      {
        id: "guarnicion",
        title: "Guarnición",
        required: true,
        type: "single",
        options: [
          { id: "papas-bistro", label: "Papas rústicas a la francesa", extraPrice: 0 },
          { id: "ensalada-verde", label: "Mix de hojas orgánicas y vinagreta dijon", extraPrice: 0 }
        ]
      }
    ]
  },
  {
    id: "b1",
    categoryId: "burgers",
    name: "The Aurelio Signature Burger",
    price: 18.00,
    description: "200g de blend Wagyu/Angus, queso brie derretido, cebollas estofadas al vino tinto, panceta ahumada crujiente, mayonesa trufada en brioche sellado con mantequilla.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    badge: "Más Vendida",
    allergens: ["Gluten", "Lácteos"],
    available: true,
    optionGroups: [
      {
        id: "termino",
        title: "Cocción de la carne",
        required: true,
        type: "single",
        options: [
          { id: "jugosa", label: "Término Medio / Jugosa (Sugerencia)", extraPrice: 0 },
          { id: "cocida", label: "Bien Cocida", extraPrice: 0 }
        ]
      },
      {
        id: "extras",
        title: "Agregados para tu burger",
        required: false,
        type: "multiple",
        options: [
          { id: "doble-tocino", label: "Extra tocino crujiente caramelizado", extraPrice: 2.00 },
          { id: "huevo-trufa", label: "Huevo campero frito con aceite de trufa", extraPrice: 2.50 },
          { id: "doble-patty", label: "Doble carne Wagyu (200g extra)", extraPrice: 6.00 }
        ]
      }
    ]
  },
  {
    id: "p1",
    categoryId: "postres",
    name: "Volcán de Chocolate Amargo 70%",
    price: 11.00,
    description: "Bizcocho tibio de cacao ecuatoriano con corazón líquido fundente, acompañado de helado artesanal de vainilla de Papantla y crumble de avellanas.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    badge: "El Favorito",
    allergens: ["Gluten", "Lácteos", "Frutos secos"],
    available: true,
    optionGroups: [
      {
        id: "helado",
        title: "Sabor de helado",
        required: true,
        type: "single",
        options: [
          { id: "vainilla", label: "Vainilla Bourbon de Papantla", extraPrice: 0 },
          { id: "pistacho", label: "Pistacho tostado de Sicilia", extraPrice: 1.50 }
        ]
      }
    ]
  },
  {
    id: "beb1",
    categoryId: "bebidas",
    name: "Smoked Mezcalita de la Pasión",
    price: 13.50,
    description: "Mezcal espadín artesanal infusionado con chile habanero suave, pulpa fresca de maracuyá, licor de naranja, jugo de lima y escarcha de sal de gusano y jamaica.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    badge: "Coctel Insignia",
    allergens: [],
    available: true,
    optionGroups: [
      {
        id: "escarcha",
        title: "Estilo de escarcha",
        required: true,
        type: "single",
        options: [
          { id: "sal-gusano", label: "Sal artesanal de gusano y jamaica", extraPrice: 0 },
          { id: "sal-negra", label: "Sal volcánica negra y romero", extraPrice: 0 },
          { id: "sin-escarcha", label: "Borde limpio (Sin escarcha)", extraPrice: 0 }
        ]
      }
    ]
  },
  {
    id: "beb2",
    categoryId: "bebidas",
    name: "Limonada Silvestre de Frutos Rojos",
    price: 6.50,
    description: "Infusión fría de frutos del bosque, limón amarillo prensado al momento, hierbabuena fresca y toque de agua con gas ligera. (Bebida sin alcohol)",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    badge: "Sin Alcohol",
    allergens: [],
    available: true,
    optionGroups: [
      {
        id: "endulzante",
        title: "Nivel de endulzante",
        required: true,
        type: "single",
        options: [
          { id: "normal", label: "Dulzor natural equilibrado", extraPrice: 0 },
          { id: "miel-agave", label: "Endulzado con miel de agave orgánica", extraPrice: 0.50 },
          { id: "sin-azucar", label: "Completamente sin endulzar", extraPrice: 0 }
        ]
      }
    ]
  }
];
