import React, { useState } from 'react';
import { X, QrCode, Check } from 'lucide-react';

export const TableSelectorModal = ({ isOpen, onClose, currentTable, onSelectTable }) => {
  if (!isOpen) return null;

  const [customTable, setCustomTable] = useState('');
  const quickTables = ['1', '2', '3', '4', '5', '6', '7', '8', 'Barra 1', 'Terraza 1'];

  const handleSelect = (table) => {
    onSelectTable(table);
    onClose();
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (customTable.trim()) {
      handleSelect(customTable.trim());
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden z-10 p-5 animate-scaleUp">
        <div className="flex items-center justify-between pb-3 border-b border-bistro-100">
          <div className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-culinary-amber" />
            <h3 className="font-serif text-lg font-bold text-bistro-900">
              Ubicación de Mesa
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-bistro-100 hover:bg-bistro-200 text-bistro-600 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-bistro-600 mt-2.5 mb-4">
          Al escanear el QR físico de tu mesa, este valor se asigna automáticamente. Puedes cambiarlo para probar:
        </p>

        {/* Mesas rápidas */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {quickTables.map((table) => {
            const isSelected = currentTable === table;
            return (
              <button
                key={table}
                onClick={() => handleSelect(table)}
                className={`py-2 px-1 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                  isSelected
                    ? 'bg-bistro-900 text-bistro-50 shadow-xs'
                    : 'bg-bistro-50 hover:bg-bistro-100 text-bistro-800 border border-bistro-200'
                }`}
              >
                {table.startsWith('Mesa') || table.startsWith('Barra') || table.startsWith('Terraza') ? table : `Mesa ${table}`}
              </button>
            );
          })}
        </div>

        {/* Ingreso manual */}
        <form onSubmit={handleCustomSubmit} className="flex gap-2 pt-2 border-t border-bistro-100">
          <input
            type="text"
            placeholder="Otra mesa o zona..."
            value={customTable}
            onChange={(e) => setCustomTable(e.target.value)}
            className="flex-1 px-3 py-2 bg-bistro-50 border border-bistro-200 rounded-xl text-xs text-bistro-900 focus:outline-none focus:ring-1 focus:ring-bistro-900"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-bistro-900 text-white rounded-xl text-xs font-bold active:scale-95 transition-all"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};
