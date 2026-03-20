"use client";

import { PackagePlus, Info, ShoppingCart, Truck, DollarSign } from "lucide-react";

export default function PreAlertsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Pre-alertas</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Notifica tus compras anticipadamente para un procesamiento más rápido.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center gap-2">
          <PackagePlus className="size-5" />
          Nueva Pre-alerta
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border p-8">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Info className="size-5 text-blue-500" />
              Detalles de la Compra
            </h3>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tienda de Origen</label>
                <div className="relative">
                  <ShoppingCart className="absolute left-3 top-3 size-4 text-slate-400" />
                  <input type="text" placeholder="Ej: Amazon, eBay, Apple" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-hidden text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Número de Seguimiento (Tracking)</label>
                <div className="relative">
                  <Truck className="absolute left-3 top-3 size-4 text-slate-400" />
                  <input type="text" placeholder="Ej: 1Z999AA1012345678" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-hidden text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Valor de la Mercancía (USD)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 size-4 text-slate-400" />
                  <input type="number" placeholder="0.00" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-hidden text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Categoría</label>
                <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-hidden text-sm appearance-none cursor-pointer">
                  <option>Seleccionar categoría...</option>
                  <option>Electrónica</option>
                  <option>Ropa y Calzado</option>
                  <option>Hogar</option>
                  <option>Otros</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Descripción del Contenido</label>
                <textarea rows={3} placeholder="¿Qué contiene tu paquete?" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-hidden text-sm"></textarea>
              </div>

              <div className="md:col-span-2 pt-4 border-t flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-xl shadow-lg transition-all active:scale-[0.98]">
                  Guardar Pre-alerta
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl dark:border">
            <h4 className="font-bold text-lg mb-4">¿Por qué pre-alertar?</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-300">
                <div className="size-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                <span>Identificación inmediata de tu carga al llegar a nuestra bodega.</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <div className="size-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                <span>Procesamiento de fotos y medidas en tiempo récord.</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <div className="size-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                <span>Evita retrasos por falta de información de valor o contenido.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
