"use client";

import { Search, Filter, CheckCircle, XCircle, Clock, PackageSearch } from "lucide-react";

const pendingAlerts = [
  { id: "PRE-8092", user: "Esteban Arkanet", tracking: "1Z999AA1012345678", store: "Amazon", value: "$450.00", date: "Hoy, 10:30 AM", status: "Esperando Arribo" },
  { id: "PRE-8091", user: "María López", tracking: "92612927004655", store: "Apple", value: "$1,200.00", date: "Ayer", status: "Esperando Arribo" },
  { id: "PRE-8090", user: "Juan Pérez", tracking: "TBA123456789", store: "Amazon", value: "$45.50", date: "12 Mar 2024", status: "Retrasado" },
];

export default function AdminPreAlertsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Gestión de Pre-alertas</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Supervisa las compras registradas por los clientes que aún no llegan a bodega.</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center gap-2 text-sm">
             <CheckCircle className="size-4" /> Marcar Llegada Masiva
           </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-3 size-4 text-slate-400" />
            <input type="text" placeholder="Buscar por Tracking, Usuario o ID..." className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-hidden text-sm shadow-xs" />
          </div>
          <button className="w-full md:w-auto border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors bg-white dark:bg-slate-900 shadow-xs">
            <Filter className="size-4" /> Filtros Avanzados
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase bg-slate-50/80 dark:bg-slate-950">
              <tr>
                <th className="px-6 py-4">ID / Cliente</th>
                <th className="px-6 py-4">Tracking / Tienda</th>
                <th className="px-6 py-4">Valor Declarado</th>
                <th className="px-6 py-4">Fecha Registro</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 border-t border-slate-200 dark:border-slate-800">
              {pendingAlerts.map((alert) => (
                <tr key={alert.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900 dark:text-white">{alert.id}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{alert.user}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-mono text-indigo-600 dark:text-indigo-400 font-medium">{alert.tracking}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{alert.store}</div>
                  </td>
                  <td className="px-6 py-4 font-bold font-mono text-slate-700 dark:text-slate-300">
                    {alert.value}
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="size-3" /> {alert.date}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase border ${
                      alert.status === "Esperando Arribo" ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800" :
                      "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-800"
                    }`}>
                      {alert.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                       <button className="p-2 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-colors" title="Marcar como Recibido">
                          <PackageSearch className="size-4" />
                       </button>
                       <button className="p-2 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors" title="Cancelar Pre-alerta">
                          <XCircle className="size-4" />
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
