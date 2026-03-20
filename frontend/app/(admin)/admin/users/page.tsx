"use client";

import { Search, Filter, Mail, Phone, MapPin, MoreVertical, BadgeCheck, AlertTriangle } from "lucide-react";

const users = [
  { id: "USR-450912", name: "Esteban Arkanet", email: "esteban@arkanet.com", phone: "+57 300 123 4567", joinDate: "15 Ene 2024", verified: true, plan: "Básico" },
  { id: "USR-450913", name: "María López", email: "maria.lopez@ejemplo.com", phone: "+57 315 987 6543", joinDate: "02 Mar 2024", verified: true, plan: "Premium" },
  { id: "USR-450914", name: "Juan Pérez", email: "juan.perez@correo.com", phone: "+57 320 555 1111", joinDate: "Hace 3 horas", verified: false, plan: "Básico" },
];

export default function AdminUsersPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Directorio de Clientes</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Administra las cuentas de usuario, verificación de documentos y planes.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-3 size-4 text-slate-400" />
            <input type="text" placeholder="Buscar por nombre, email o ID de cliente..." className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-hidden text-sm shadow-xs" />
          </div>
          <button className="w-full md:w-auto border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors bg-white dark:bg-slate-900 shadow-xs">
            <Filter className="size-4" /> Filtros
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase bg-slate-50/80 dark:bg-slate-950">
              <tr>
                <th className="px-6 py-4">Cliente / ID</th>
                <th className="px-6 py-4">Contacto</th>
                <th className="px-6 py-4">Registro</th>
                <th className="px-6 py-4">Verificación KYC</th>
                <th className="px-6 py-4 text-center">Plan</th>
                <th className="px-6 py-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 border-t border-slate-200 dark:border-slate-800">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full flex items-center justify-center font-bold text-lg">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">{user.name}</div>
                        <div className="text-[10px] font-mono font-semibold text-slate-500 mt-0.5">{user.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <Mail className="size-3 text-slate-400" /> {user.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <Phone className="size-3 text-slate-400" /> {user.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {user.joinDate}
                  </td>
                  <td className="px-6 py-4">
                    {user.verified ? (
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                        <BadgeCheck className="size-5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Aprobado</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-rose-500 dark:text-rose-400">
                        <AlertTriangle className="size-5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Falta Doc</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase border ${
                      user.plan === "Premium" ? "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800" :
                      "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700"
                    }`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center">
                       <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                          <MoreVertical className="size-5" />
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
