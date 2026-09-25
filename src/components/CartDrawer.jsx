import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, MessageSquare, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  tableNumber,
  onOpenTableModal,
  restaurant,
  currency = "$"
}) => {
  if (!isOpen) return null;

  const [tipPercentage, setTipPercentage] = useState(10);
  const [generalNotes, setGeneralNotes] = useState('');
  const [showTextPreview, setShowTextPreview] = useState(false);

  // Cálculos
  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const tipAmount = (subtotal * tipPercentage) / 100;
  const totalWithTip = subtotal + tipAmount;

  // Generar texto estructurado para WhatsApp
  const generateWhatsAppMessage = () => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let text = `🍽️ *NUEVO PEDIDO - ${restaurant.name.toUpperCase()}*\n`;
    text += `📍 *Mesa:* ${tableNumber || 'No especificada'}\n`;
    text += `⏰ *Hora:* ${timestamp}\n`;
    text += `────────────────────────────\n`;

    cartItems.forEach((item) => {
      text += `• ${item.quantity}x *${item.name}* - ${currency}${(item.unitPrice * item.quantity).toFixed(2)}\n`;
      if (item.selectedSummary && item.selectedSummary.length > 0) {
        item.selectedSummary.forEach((s) => {
          text += `  └ ${s.groupTitle}: ${s.label}${s.extra > 0 ? ` (+${currency}${s.extra.toFixed(2)})` : ''}\n`;
        });
      }
      if (item.specialInstructions) {
        text += `  └ 📝 Nota: "${item.specialInstructions}"\n`;
      }
    });

    text += `────────────────────────────\n`;
    text += `*Subtotal:* ${currency}${subtotal.toFixed(2)}\n`;
    if (tipPercentage > 0) {
      text += `*Propina (${tipPercentage}%):* ${currency}${tipAmount.toFixed(2)}\n`;
    }
    text += `*TOTAL:* ${currency}${totalWithTip.toFixed(2)}\n`;

    if (generalNotes.trim()) {
      text += `\n💬 *Observaciones generales:* ${generalNotes.trim()}\n`;
    }

    text += `\n_Pedido generado desde Menú Digital Móvil_`;
    return text;
  };

  const handleSendOrderWhatsApp = () => {
    if (!tableNumber) {
      alert("Por favor indica el número de tu mesa antes de enviar el pedido.");
      onOpenTableModal();
      return;
    }

    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${restaurant.whatsappPhone}?text=${encoded}`;
    
    // Abrir WhatsApp en nueva pestaña o app nativa
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg max-h-[92vh] bg-white rounded-t-3xl shadow-sheet overflow-hidden flex flex-col z-10 animate-slideUp">
        
        {/* Encabezado del Carrito */}
        <div className="px-5 pt-4 pb-3 border-b border-bistro-100 flex items-center justify-between bg-bistro-50/70">
          <div>
            <h2 className="font-serif text-xl font-bold text-bistro-900">
              Tu Pedido
            </h2>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-bistro-600 font-medium">
                {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'} seleccionados
              </span>
              <span className="text-bistro-300">•</span>
              <button
                onClick={onOpenTableModal}
                className="text-xs font-bold text-culinary-amber hover:underline flex items-center gap-1"
              >
                <span>{tableNumber ? `Mesa #${tableNumber}` : 'Asignar Mesa'}</span>
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-bistro-200/70 hover:bg-bistro-200 text-bistro-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Lista de Platillos en Orden */}
        <div className="flex-1 overflow-y-auto px-5 py-4 divide-y divide-bistro-100">
          {cartItems.length === 0 ? (
            <div className="py-12 text-center text-bistro-500">
              <p className="text-sm font-medium">Aún no has agregado platillos a tu pedido.</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.dishId}-${index}`} className="py-3.5 first:pt-0 last:pb-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-serif text-base font-semibold text-bistro-900">
                        {item.name}
                      </h4>
                      <span className="font-mono font-bold text-sm text-bistro-900 ml-2">
                        {currency}{(item.unitPrice * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    {/* Modificadores seleccionados */}
                    {item.selectedSummary && item.selectedSummary.length > 0 && (
                      <div className="mt-1 space-y-0.5">
                        {item.selectedSummary.map((s, idx) => (
                          <div key={idx} className="text-[11px] text-bistro-600 flex items-center gap-1">
                            <span className="text-bistro-400">└</span>
                            <span className="font-medium text-bistro-700">{s.label}</span>
                            {s.extra > 0 && (
                              <span className="text-bistro-500 font-mono">
                                (+{currency}{s.extra.toFixed(2)})
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Nota de cocina */}
                    {item.specialInstructions && (
                      <div className="mt-1 text-[11px] text-amber-800 bg-amber-50/70 px-2 py-0.5 rounded border border-amber-200/60 inline-block">
                        Nota: "{item.specialInstructions}"
                      </div>
                    )}
                  </div>
                </div>

                {/* Control de Cantidad y Eliminación */}
                <div className="flex items-center justify-between mt-3 pt-2">
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="text-[11px] text-red-600 hover:text-red-700 flex items-center gap-1 font-medium px-2 py-1 rounded hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Eliminar</span>
                  </button>

                  <div className="flex items-center bg-bistro-100 rounded-lg p-0.5 border border-bistro-200">
                    <button
                      onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                      className="w-6 h-6 rounded bg-white text-bistro-800 flex items-center justify-center shadow-xs active:scale-90"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-7 text-center text-xs font-bold text-bistro-900 font-mono">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                      className="w-6 h-6 rounded bg-white text-bistro-800 flex items-center justify-center shadow-xs active:scale-90"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {cartItems.length > 0 && (
            <div className="pt-4 space-y-4">
              {/* Selector de Propina Opcional */}
              <div>
                <label className="block text-xs font-bold text-bistro-700 uppercase tracking-wider mb-2">
                  Añadir Propina para el Servicio
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[0, 10, 15, 20].map((percentage) => (
                    <button
                      key={percentage}
                      onClick={() => setTipPercentage(percentage)}
                      className={`py-2 px-1 rounded-xl text-xs font-bold transition-all ${
                        tipPercentage === percentage
                          ? 'bg-bistro-900 text-bistro-50 shadow-xs'
                          : 'bg-bistro-100 text-bistro-700 hover:bg-bistro-200/70 border border-bistro-200'
                      }`}
                    >
                      {percentage === 0 ? 'Sin propina' : `${percentage}%`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Observaciones generales */}
              <div>
                <label className="block text-xs font-bold text-bistro-700 uppercase tracking-wider mb-1.5">
                  Comentarios Adicionales (Mesero / Cocina)
                </label>
                <input
                  type="text"
                  value={generalNotes}
                  onChange={(e) => setGeneralNotes(e.target.value)}
                  placeholder="Ej. Traer primero las bebidas, cuenta separada..."
                  className="w-full px-3 py-2 bg-bistro-50 border border-bistro-200 rounded-xl text-xs text-bistro-900 placeholder:text-bistro-400 focus:outline-none focus:ring-1 focus:ring-bistro-900"
                />
              </div>

              {/* Toggle de Previsualización del Mensaje */}
              <div className="pt-2">
                <button
                  onClick={() => setShowTextPreview(!showTextPreview)}
                  className="text-xs text-bistro-600 hover:text-bistro-900 flex items-center gap-1.5 font-medium underline underline-offset-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{showTextPreview ? 'Ocultar vista previa WhatsApp' : 'Ver mensaje que llegará a cocina/mesero'}</span>
                </button>

                {showTextPreview && (
                  <pre className="mt-2 p-3 bg-bistro-900 text-bistro-200 rounded-xl text-[11px] font-mono leading-relaxed whitespace-pre-wrap border border-bistro-800 select-all overflow-x-auto">
                    {generateWhatsAppMessage()}
                  </pre>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Totales y Botón de Enviar Pedido */}
        {cartItems.length > 0 && (
          <div className="p-4 bg-bistro-50 border-t border-bistro-200 shadow-lg space-y-3 pb-safe">
            {/* Desglose de Precios */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-bistro-600">
                <span>Subtotal platillos</span>
                <span className="font-mono">{currency}{subtotal.toFixed(2)}</span>
              </div>
              {tipPercentage > 0 && (
                <div className="flex justify-between text-bistro-600">
                  <span>Propina sugerida ({tipPercentage}%)</span>
                  <span className="font-mono">{currency}{tipAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold text-bistro-950 pt-1 border-t border-bistro-200 font-serif">
                <span>Total a Pagar</span>
                <span className="font-mono text-culinary-amber">{currency}{totalWithTip.toFixed(2)}</span>
              </div>
            </div>

            {/* Botón WhatsApp de Envío */}
            <button
              onClick={handleSendOrderWhatsApp}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-float active:scale-[0.98] transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Pedido por WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
