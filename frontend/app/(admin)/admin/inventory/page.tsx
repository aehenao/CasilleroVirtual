"use client";

import { Search, Filter, Box, ScanLine, ArrowRightLeft, Camera } from "lucide-react";

const warehouseItems = [
  { id: "ARK-9901", user: "Esteban Arkanet", tracking: "1Z999AA101...", location: "Estante A-12", weight: "2.5 lbs", status: "Procesado", date: "Hace 2 horas" },
  { id: "ARK-9902", user: "Carlos Ruiz", tracking: "TBA19283746", location: "Zona Recepción", weight: "1.2 lbs", status: "Pendiente Revisión", date: "Hace 5 horas" },
  { id: "ARK-9900", user: "María López", tracking: "9261292700...", location: "Zona Despacho", weight: "8.4 lbs", status: "Listo para Envío", date: "Ayer" },
];

export default function AdminInventoryPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Inventario (Bodega Global)</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Control de todos los paquetes físicos en las instalaciones.</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center gap-2 text-sm">
             <ScanLine className="size-4" /> Ingreso de Carga (Escaner)
           </button>
        </div>
      </div>

      {/* Warehouse Status Snippets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30 p-4 rounded-2xl flex items-center gap-4">
            <div className="size-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
               <Box className="size-6" />
            </div>
            <div>
               <p className="text-2xl font-black text-blue-900 dark:text-blue-100">1,245</p>
               <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Total Paquetes</p>
            </div>
         </div>
         <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 p-4 rounded-2xl flex items-center gap-4">
            <div className="size-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400">
               <Camera className="size-6" />
            </div>
            <div>
               <p className="text-2xl font-black text-amber-900 dark:text-amber-100">42</p>
               <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">Sin Procesar</p>
            </div>
         </div>
         <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-900/30 p-4 rounded-2xl flex items-center gap-4">
            <div className="size-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
               <ArrowRightLeft className="size-6" />
            </div>
            <div>
               <p className="text-2xl font-black text-emerald-900 dark:text-emerald-100">315</p>
               <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">Listos (Despacho)</p>
            </div>
         </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-3 size-4 text-slate-400" />
            <input type="text" placeholder="Buscar estante, tracking, ID..." className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-hidden text-sm shadow-xs" />
          </div>
          <button className="w-full md:w-auto border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors bg-white dark:bg-slate-900 shadow-xs">
            <Filter className="size-4" /> Opciones de Filtro
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase bg-slate-50/80 dark:bg-slate-950">
              <tr>
                <th className="px-6 py-4">ID Paquete</th>
                <th className="px-6 py-4">Cliente</th>
                <th className="px-6 py-4">Ubicación Bodega</th>
                <th className="px-6 py-4">Peso</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4 text-center">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 border-t border-slate-200 dark:border-slate-800">
              {warehouseItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-indigo-600 dark:text-indigo-400">{item.id}</div>
                    <div className="text-xs font-mono text-slate-500 mt-1">{item.tracking}</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                    {item.user}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {item.location}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">
                    {item.weight}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase border ${
                      item.status === "Pendiente Revisión" ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800" :
                      item.status === "Listo para Envío" ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800" :
                      "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                       <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 hover:underline">
                          Procesar
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
