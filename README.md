# 🍽️ Aurelio Bistro - Menú Digital Móvil Premium (QR & Pedidos)

Aplicación web mobile-first de menú digital gastronómico con experiencia táctil nativa, selección de variantes, carrito en tiempo real y despacho de pedidos estructurados a WhatsApp.

Diseñado siguiendo las directrices de la **Skill de Antigravity `digital-menu-builder`** ubicada en `.agents/skills/digital-menu-builder/`.

---

## ✨ Características Principales

1. **Mobile-First & Ergonomía del Pulgar (Thumb Zone)**:
   - Barra de categorías sticky con scroll horizontal y búsqueda instantánea.
   - Botón de carrito flotante inferior accesible con una sola mano.
   - Cero modales toscos de escritorio: utiliza **Bottom Sheets** (paneles inferiores deslizables) nativos.

2. **Lectura Inteligente de Mesa vía QR**:
   - Al escanear un código QR con el parámetro `?mesa=4` (o `?table=4`), el sistema bloquea y asigna automáticamente la mesa al pedido.
   - Selector interactivo incorporado para probar y cambiar de mesa con 1 tap.

3. **Personalizador de Platillos con Validación**:
   - Opciones obligatorias (ej. término de cocción de la carne, guarnición incluida).
   - Extras gourmet opcionales con sumatoria de precio dinámica en tiempo real.
   - Campo para instrucciones especiales directas a cocina ("sin sal", "alérgico a los frutos secos").

4. **Despacho Estructurado a WhatsApp**:
   - Cálculo automático de subtotal y propina sugerida opcional (10%, 15%, 20%).
   - Generación de mensaje profesional y formateado listo para enviar al número del restaurante/mesero.
   - Vista previa en vivo del mensaje que recibirá el personal.

5. **Estética Editorial Anti-AI**:
   - Tipografía editorial gastronómica (*Playfair Display* + *Plus Jakarta Sans*).
   - Paleta de color cálida bistro (marfil, carbón vegetal, toques ámbar y oro gastronómico).
   - Micro-interacciones táctiles suaves (`active:scale-95`).

---

## 🚀 Cómo Ejecutar el Proyecto

```bash
# 1. Instalar dependencias (si aún no lo has hecho)
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción (despliegue en Vercel, Netlify o Cloudflare)
npm run build
```

Una vez iniciado, abre en tu navegador:
`http://localhost:3000`

Para probar cómo reacciona al escanear un QR con mesa asignada, entra con el parámetro:
`http://localhost:3000/?mesa=7`

---

## ⚙️ Personalización del Restaurante y Menú

Todos los datos (nombre, WhatsApp, horario, categorías, platillos, alérgenos y opciones) están centralizados en:
📁 `src/data/menuData.js`

Edita este archivo para cambiar los precios, teléfonos o agregar nuevas secciones a tu gusto.
