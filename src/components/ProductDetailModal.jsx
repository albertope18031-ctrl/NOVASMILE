import React, { useState, useEffect, useMemo } from 'react';
import { X, Plus, Minus, Check, AlertCircle, Sparkles } from 'lucide-react';

export const ProductDetailModal = ({ item, isOpen, onClose, onAddToCart, currency = "$" }) => {
  if (!isOpen || !item) return null;

  // Estado para opciones seleccionadas: { [groupId]: optionId (para single) ó [optionId, ...] (para multiple) }
  const [selectedOptions, setSelectedOptions] = useState({});
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [validationError, setValidationError] = useState('');

  // Inicializar selecciones por defecto (primera opción en obligatorios)
  useEffect(() => {
    if (item && item.optionGroups) {
      const initial = {};
      item.optionGroups.forEach(group => {
        if (group.type === 'single' && group.options.length > 0) {
          // Seleccionar por defecto la primera opción
          initial[group.id] = group.options[0].id;
        } else if (group.type === 'multiple') {
          initial[group.id] = [];
        }
      });
      setSelectedOptions(initial);
      setQuantity(1);
      setSpecialInstructions('');
      setValidationError('');
    }
  }, [item]);

  // Manejar selección de opción única (Radio)
  const handleSingleSelect = (groupId, optionId) => {
    setSelectedOptions(prev => ({
      ...prev,
      [groupId]: optionId
    }));
    setValidationError('');
  };

  // Manejar selección múltiple (Checkbox)
  const handleMultipleToggle = (groupId, optionId) => {
    setSelectedOptions(prev => {
      const currentList = prev[groupId] || [];
      const exists = currentList.includes(optionId);
      const updated = exists
        ? currentList.filter(id => id !== optionId)
        : [...currentList, optionId];
      return {
        ...prev,
        [groupId]: updated
      };
    });
  };

  // Calcular precio total dinámico (base + extras) * cantidad
  const { unitPrice, totalPrice, selectedSummary } = useMemo(() => {
    let extraSum = 0;
    const summary = [];

    if (item.optionGroups) {
      item.optionGroups.forEach(group => {
        const val = selectedOptions[group.id];
        if (group.type === 'single' && val) {
          const opt = group.options.find(o => o.id === val);
          if (opt) {
            extraSum += opt.extraPrice || 0;
            summary.push({
              groupTitle: group.title,
              label: opt.label,
              extra: opt.extraPrice || 0
            });
          }
        } else if (group.type === 'multiple' && Array.isArray(val)) {
          val.forEach(optId => {
            const opt = group.options.find(o => o.id === optId);
            if (opt) {
              extraSum += opt.extraPrice || 0;
              summary.push({
                groupTitle: group.title,
                label: opt.label,
                extra: opt.extraPrice || 0
              });
            }
          });
        }
      });
    }

    const calculatedUnitPrice = item.price + extraSum;
    return {
      unitPrice: calculatedUnitPrice,
      totalPrice: calculatedUnitPrice * quantity,
      selectedSummary: summary
    };
  }, [item, selectedOptions, quantity]);

  // Enviar al carrito
  const handleConfirm = () => {
    // Validar requeridos
    if (item.optionGroups) {
      for (const group of item.optionGroups) {
        if (group.required && !selectedOptions[group.id]) {
          setValidationError(`Por favor selecciona una opción para "${group.title}"`);
          return;
        }
      }
    }

    onAddToCart({
      dishId: item.id,
      name: item.name,
      basePrice: item.price,
      unitPrice,
      totalPrice,
      quantity,
      selectedSummary,
      specialInstructions: specialInstructions.trim(),
      image: item.image
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs transition-opacity duration-300">
      {/* Overlay backdrop click para cerrar */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Contenedor Bottom Sheet */}
      <div className="relative w-full max-w-lg max-h-[90vh] bg-white rounded-t-3xl shadow-sheet overflow-hidden flex flex-col z-10 animate-slideUp">
        
        {/* Manilla táctil superior (Drag Handle) */}
        <div className="w-full pt-3 pb-2 flex justify-center bg-white cursor-grab">
          <div className="w-12 h-1.5 bg-bistro-200 rounded-full" />
        </div>

        {/* Botón flotante de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-bistro-900/60 hover:bg-bistro-900 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Contenido scrolleable */}
        <div className="flex-1 overflow-y-auto px-5 pb-6">
          {/* Foto Principal con presentación de platillo */}
          <div className="relative w-full h-52 -mx-5 -mt-3 mb-4 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>

          {/* Título y Descripción */}
          <div className="mb-5">
            {item.badge && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-culinary-amber uppercase tracking-wider bg-culinary-amber/10 px-2.5 py-0.5 rounded-full mb-2">
                <Sparkles className="w-3 h-3" />
                <span>{item.badge}</span>
              </span>
            )}
            <h2 className="font-serif text-2xl font-bold text-bistro-900 leading-snug">
              {item.name}
            </h2>
            <p className="text-sm text-bistro-600 mt-2 font-sans leading-relaxed">
              {item.description}
            </p>

            {/* Alérgenos */}
            {item.allergens && item.allergens.length > 0 && (
              <div className="flex items-center gap-2 mt-3 text-xs text-bistro-500">
                <span className="font-semibold text-bistro-700">Contiene:</span>
                <span>{item.allergens.join(", ")}</span>
              </div>
            )}
          </div>

          {/* Grupos de opciones y modificadores */}
          {item.optionGroups && item.optionGroups.map((group) => (
            <div key={group.id} className="mb-6 pt-4 border-t border-bistro-100">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-bistro-900">
                  {group.title}
                </h4>
                <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                  group.required
                    ? 'bg-bistro-900 text-bistro-50'
                    : 'bg-bistro-100 text-bistro-600'
                }`}>
                  {group.required ? 'Obligatorio' : 'Opcional'}
                </span>
              </div>

              <div className="space-y-2">
                {group.options.map((option) => {
                  const isSingle = group.type === 'single';
                  const isChecked = isSingle
                    ? selectedOptions[group.id] === option.id
                    : (selectedOptions[group.id] || []).includes(option.id);

                  return (
                    <label
                      key={option.id}
                      onClick={() =>
                        isSingle
                          ? handleSingleSelect(group.id, option.id)
                          : handleMultipleToggle(group.id, option.id)
                      }
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all cursor-pointer select-none active:scale-[0.99] ${
                        isChecked
                          ? 'border-bistro-900 bg-bistro-50/70 text-bistro-950 font-semibold'
                          : 'border-bistro-200/80 bg-white text-bistro-700 hover:bg-bistro-50/40'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all ${
                          isChecked
                            ? 'border-bistro-900 bg-bistro-900 text-white'
                            : 'border-bistro-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                        <span>{option.label}</span>
                      </div>

                      {option.extraPrice > 0 && (
                        <span className="text-xs font-semibold text-bistro-600 font-mono">
                          +{currency}{option.extraPrice.toFixed(2)}
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Notas para Cocina */}
          <div className="pt-4 border-t border-bistro-100 mb-4">
            <label className="block text-xs font-bold text-bistro-800 uppercase tracking-wider mb-2">
              Instrucciones Especiales para el Chef
            </label>
            <textarea
              rows={2}
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="Ej. Salsa aparte, alérgico a la nuez, sin cebolla..."
              className="w-full p-3 bg-bistro-50 border border-bistro-200 rounded-xl text-xs text-bistro-900 placeholder:text-bistro-400 focus:outline-none focus:ring-1 focus:ring-bistro-900 resize-none transition-all"
            />
          </div>

          {validationError && (
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs mb-3">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
              <span>{validationError}</span>
            </div>
          )}
        </div>

        {/* Barra Inferior Fija (Thumb Zone de Confirmación) */}
        <div className="p-4 bg-white border-t border-bistro-200/80 shadow-lg flex items-center gap-3 pb-safe">
          {/* Selector de Cantidad */}
          <div className="flex items-center bg-bistro-100 rounded-xl p-1 border border-bistro-200">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-lg bg-white text-bistro-800 flex items-center justify-center shadow-xs active:scale-90 transition-transform"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center text-sm font-bold text-bistro-900 font-mono">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg bg-white text-bistro-800 flex items-center justify-center shadow-xs active:scale-90 transition-transform"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Botón Principal de Añadir */}
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 px-4 rounded-xl bg-bistro-900 hover:bg-bistro-800 text-bistro-50 font-semibold text-xs sm:text-sm flex items-center justify-between shadow-float active:scale-[0.98] transition-all"
          >
            <span>Agregar a la orden</span>
            <span className="font-mono font-bold text-culinary-gold">
              {currency}{totalPrice.toFixed(2)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
