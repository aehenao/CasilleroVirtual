"use client";

import { Calculator, Ruler, Weight, Info, DollarSign, CalculatorIcon } from "lucide-react";

export default function CalculatorPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Cotizador Dinámico</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Estima el costo total de envío incluyendo fletes, seguros e impuestos.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border shadow-sm space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Peso (libras)</label>
              <div className="relative">
                <Weight className="absolute left-3 top-3 size-4 text-slate-400" />
                <input type="number" placeholder="0.0" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-hidden text-sm" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Valor USD</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 size-4 text-slate-400" />
                <input type="number" placeholder="0.00" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-hidden text-sm" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Ruler className="size-4" /> Dimensiones (pulgadas)
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <input type="number" placeholder="Largo" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-hidden text-sm text-center" />
              <input type="number" placeholder="Ancho" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-hidden text-sm text-center" />
              <input type="number" placeholder="Alto" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-hidden text-sm text-center" />
            </div>
          </div>

          <div className="pt-6 border-t">
            <button className="w-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold py-4 rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <CalculatorIcon className="size-5" />
              Calcular Tarifa
            </button>
          </div>
        </div>

        <div className="bg-linear-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Resumen Estimado</h3>
              <div className="p-2 bg-white/10 rounded-lg">
                <Info className="size-5" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center text-blue-100">
                <span>Flete Internacional</span>
                <span className="font-mono text-white">$0.00</span>
              </div>
              <div className="flex justify-between items-center text-blue-100">
                <span>Seguro Obligatorio</span>
                <span className="font-mono text-white">$0.00</span>
              </div>
              <div className="flex justify-between items-center text-blue-100">
                <span>Aranceles e Impuestos</span>
                <span className="font-mono text-white">$0.00</span>
              </div>
              <div className="pt-6 border-t border-white/20 flex justify-between items-center">
                <span className="text-lg font-bold">Total Estimado</span>
                <span className="text-3xl font-black font-mono">$0.00</span>
              </div>
            </div>
          </div>

          <p className="mt-12 text-[10px] text-blue-200/60 uppercase tracking-widest leading-relaxed">
            * Los valores mostrados son aproximados y pueden variar según la inspección física en bodega y las regulaciones aduaneras vigentes del país de destino.
          </p>
        </div>
      </div>
    </div>
  );
}
