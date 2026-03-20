"use client";

import { CheckCircle2, MessageSquareText, Search, Filter, Box, Scissors, Camera, AlertCircle } from "lucide-react";

const tickets = [
  { id: "TK-2041", user: "Esteban Arkanet", type: "Reempaque", typeIcon: Box, desc: "Consolidar ARK-9901 y ARK-9902", status: "Nuevo", priority: "Alta", date: "Hace 1 hora" },
  { id: "TK-2040", user: "María López", type: "Fotos Extra", typeIcon: Camera, desc: "Fotos de zapatos talla 38", status: "En Proceso", priority: "Media", date: "Hace 4 horas" },
  { id: "TK-2038", user: "Carlos Ruiz", type: "División", typeIcon: Scissors, desc: "Separar electrónicos de ropa", status: "Completado", priority: "Baja", date: "Ayer" },
];

export default function AdminServicesPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Peticiones y Tickets</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Gestiona solicitudes de reempaque, división y servicios de valor agregado.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Ticket List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex gap-4 items-center bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
             <div className="relative w-full">
               <Search className="absolute left-3 top-2.5 size-4 text-slate-400" />
               <input type="text" placeholder="Buscar ticket ID o cliente..." className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-950 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-hidden text-sm" />
             </div>
             <button className="border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0">
               <Filter className="size-4" /> Categorías
             </button>
          </div>

          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-6 group hover:border-indigo-300 dark:hover:border-indigo-700">
                <div className="flex items-start gap-4">
                  <div className={`size-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    ticket.type === "Reempaque" ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" :
                    ticket.type === "División" ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" :
                    "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                  }`}>
                    <ticket.typeIcon className="size-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900 dark:text-white">{ticket.id}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${
                        ticket.priority === "Alta" ? "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:border-rose-800" :
                        ticket.priority === "Media" ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800" :
                        "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700"
                      }`}>
                        Prioridad {ticket.priority}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">{ticket.desc}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Cliente: <span className="font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 hover:underline">{ticket.user}</span> • {ticket.date}</p>
                  </div>
                </div>
                
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-0 border-slate-100 dark:border-slate-800">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    ticket.status === "Nuevo" ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400" :
                    ticket.status === "En Proceso" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400" :
                    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"
                  }`}>
                    {ticket.status}
                  </span>
                  <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 hidden group-hover:block transition-all mt-2">
                    Procesar ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Ticket processing panel placeholder */}
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 p-8 flex flex-col items-center justify-center text-center h-[500px]">
           <div className="size-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400 shadow-sm">
             <MessageSquareText className="size-8" />
           </div>
           <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Ningún ticket seleccionado</h3>
           <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">Selecciona un ticket de la lista para ver los detalles, enviar mensajes al cliente de confirmación o marcar la tarea como resuelta.</p>
        </div>

      </div>
    </div>
  );
}
