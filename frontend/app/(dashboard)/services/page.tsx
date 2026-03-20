"use client";

import { Ticket, Scissors, Box, Camera, History, ChevronRight, Plus } from "lucide-react";

const serviceTypes = [
  { id: "repack", title: "Reempaque", icon: Box, desc: "Consolida varios paquetes en una sola caja para ahorrar en envío." },
  { id: "split", title: "División", icon: Scissors, desc: "Divide un paquete grande en varios envíos más pequeños." },
  { id: "photo", title: "Fotos Extra", icon: Camera, desc: "Solicita fotografías adicionales del contenido detallado." },
];

export default function ServicesPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Peticiones Especiales</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Solicita servicios de valor agregado para optimizar tu carga.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center gap-2">
          <Plus className="size-5" />
          Nueva Solicitud
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {serviceTypes.map((service) => (
          <div key={service.id} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border shadow-sm hover:shadow-xl transition-all cursor-pointer group border-b-4 border-b-transparent hover:border-b-blue-500">
            <div className="size-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
              <service.icon className="size-6" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border overflow-hidden">
        <div className="p-6 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <History className="size-5 text-slate-400" />
            <h3 className="font-bold text-slate-900 dark:text-white">Historial de Tickets</h3>
          </div>
        </div>
        <div className="p-12 text-center">
          <div className="size-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Ticket className="size-10 text-slate-300" />
          </div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">No tienes tickets activos</h4>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto text-sm">Todas tus solicitudes especiales han sido procesadas. Haz clic en el botón superior para crear una nueva.</p>
        </div>
      </div>
    </div>
  );
}
