"use client";

import { Search, Filter, Camera, Maximize, Box, ChevronRight } from "lucide-react";

const packages = [
  { 
    id: "ARK-9901", 
    store: "Amazon", 
    tracking: "1Z999AA101...", 
    status: "Recibido", 
    weight: "2.5 lbs", 
    dims: "12x10x5 in",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: "ARK-9902", 
    store: "eBay", 
    tracking: "9261292700...", 
    status: "En Tránsito", 
    weight: "1.2 lbs", 
    dims: "8x8x4 in",
    img: "https://images.unsplash.com/photo-154919438c-f4c635f199bc?auto=format&fit=crop&q=80&w=400"
  },
];

export default function InventoryPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Inventario en Bodega</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Consulta el estado detallado de tus paquetes recibidos en Miami.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl border shadow-sm">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-3 size-4 text-slate-400" />
          <input type="text" placeholder="Buscar por ID o Tracking..." className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-hidden text-sm" />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none border px-4 py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
            <Filter className="size-4" /> Filtros
          </button>
          <button className="flex-1 md:flex-none bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-4 py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Exportar reporte
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white dark:bg-slate-900 rounded-3xl border overflow-hidden shadow-sm hover:shadow-xl transition-all group scale-100 hover:scale-[1.02]">
            <div className="relative h-48 overflow-hidden">
              <img src={pkg.img} alt="Package" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase shadow-lg ${
                  pkg.status === "Recibido" ? "bg-emerald-500 text-white" : "bg-amber-500 text-white"
                }`}>
                  {pkg.status}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 transition-colors">
                  <Camera className="size-4" />
                </button>
                <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 transition-colors">
                  <Maximize className="size-4" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white leading-none">{pkg.id}</h4>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">{pkg.store}</p>
                </div>
                <Box className="size-5 text-blue-500" />
              </div>
              
              <div className="space-y-3 py-4 border-y border-slate-50 dark:border-slate-800">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Tracking:</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300">{pkg.tracking}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Peso:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{pkg.weight}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Dimensiones:</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{pkg.dims}</span>
                </div>
              </div>

              <button className="w-full mt-6 py-3 border rounded-xl text-sm font-bold flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Ver detalles completos <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
