"use client";

import { 
  Users, 
  PackageSearch, 
  AlertOctagon, 
  TrendingUp,
  ArrowRight,
  ClipboardList
} from "lucide-react";
import Link from "next/link";

const adminStats = [
  { 
    title: "Pre-alertas Pendientes", 
    value: "45", 
    icon: PackageSearch, 
    color: "bg-indigo-500", 
    description: "Esperando arribo a bodega" 
  },
  { 
    title: "Tickets Abiertos", 
    value: "12", 
    icon: ClipboardList, 
    color: "bg-amber-500", 
    description: "Reempaques y fotos solicitadas" 
  },
  { 
    title: "Nuevos Clientes", 
    value: "128", 
    icon: Users, 
    color: "bg-emerald-500", 
    description: "Registros este mes (+14%)" 
  },
  { 
    title: "Retenciones Aduana", 
    value: "3", 
    icon: AlertOctagon, 
    color: "bg-rose-500", 
    description: "Requieren gestión manual" 
  },
];

const recentActivity = [
  { id: "ACT-001", user: "Esteban Arkanet", action: "Creó Pre-alerta ARK-9905", time: "Hace 10 min", status: "Pendiente" },
  { id: "ACT-002", user: "María López", action: "Solicitó División Caja #802", time: "Hace 45 min", status: "En Revisión" },
  { id: "ACT-003", user: "Comercial VIP S.A.", action: "Pago exitoso FAC-1002", time: "Hace 2 horas", status: "Completado" },
  { id: "ACT-004", user: "Juan Pérez", action: "Registro de nuevo usuario", time: "Hace 3 horas", status: "Verificación" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Panel de Operaciones</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Visión global de la agencia: clientes, bodega y peticiones.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminStats.map((stat) => (
          <div key={stat.title} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all group">
            <div className="flex items-start justify-between">
              <div className={`${stat.color} p-3 rounded-2xl shadow-lg`}>
                <stat.icon className="size-6 text-white" />
              </div>
              <TrendingUp className="size-4 text-slate-300 dark:text-slate-700 group-hover:text-indigo-400 transition-colors" />
            </div>
            <div className="mt-4">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.title}</p>
              <p className="text-3xl font-black text-slate-900 dark:text-white mt-1">{stat.value}</p>
              <p className="text-[10px] uppercase font-semibold text-slate-400 dark:text-slate-500 mt-2 tracking-widest">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Activity Feed */}
        <div className="xl:col-span-2 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
            <h3 className="font-bold text-slate-900 dark:text-white">Actividad Reciente (Global)</h3>
            <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
              Ver Logs Completos <ArrowRight className="size-3" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[10px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Usuario</th>
                  <th className="px-6 py-4">Acción</th>
                  <th className="px-6 py-4">Tiempo</th>
                  <th className="px-6 py-4">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 border-t border-slate-200 dark:border-slate-800">
                {recentActivity.map((act) => (
                  <tr key={act.id} className="hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{act.user}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{act.action}</td>
                    <td className="px-6 py-4 text-xs font-mono text-slate-400">{act.time}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase border ${
                        act.status === "Pendiente" || act.status === "En Revisión" ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800" :
                        act.status === "Verificación" ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800" :
                        "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800"
                      }`}>
                        {act.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions Panel */}
        <div className="space-y-6">
          <div className="bg-slate-950 dark:bg-slate-100 p-8 rounded-3xl text-white dark:text-slate-900 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <AlertOctagon className="size-32" />
            </div>
            <div className="relative z-10">
              <h3 className="font-bold text-xl mb-2">Atención Requerida</h3>
              <p className="text-slate-400 dark:text-slate-500 text-sm mb-6">Hay 3 paquetes retenidos en aduana esperando documentación del cliente.</p>
              <button className="block w-full text-center py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg">
                Gestionar Retenciones
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col gap-3">
             <h4 className="font-bold text-slate-900 dark:text-white mb-2">Accesos Directos</h4>
             <Link href="/admin/inventory" className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all">
               <span className="text-sm font-semibold">Ingresar Carga (Bodega)</span>
               <ArrowRight className="size-4 text-slate-400" />
             </Link>
             <Link href="/admin/services" className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all">
               <span className="text-sm font-semibold">Procesar Reempaques</span>
               <ArrowRight className="size-4 text-slate-400" />
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
