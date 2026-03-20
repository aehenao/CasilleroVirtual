"use client";

import Link from "next/link";
import { Box, Lock, Mail, User, Phone } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-3xl overflow-hidden border">
      <div className="p-8">
        <div className="flex justify-center mb-6">
          <div className="size-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 dark:shadow-none">
            <Box className="size-6 text-white" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">Crea tu cuenta</h2>
        <p className="text-slate-500 dark:text-slate-400 text-center text-sm mb-6">Únete a la logística del futuro hoy mismo</p>

        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 ml-1">Nombre Completo</label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 size-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Juan Pérez"
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-hidden text-sm"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 ml-1">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 size-4 text-slate-400" />
              <input 
                type="email" 
                placeholder="nombre@ejemplo.com"
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-hidden text-sm"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 ml-1">Teléfono</label>
            <div className="relative">
              <Phone className="absolute left-3 top-2.5 size-4 text-slate-400" />
              <input 
                type="tel" 
                placeholder="+57 300 000 0000"
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-hidden text-sm"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 ml-1">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 size-4 text-slate-400" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-hidden text-sm"
              />
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 dark:shadow-none transition-all active:scale-[0.98] mt-4">
            Crear Cuenta
          </button>
        </form>

        <div className="mt-6 pt-6 border-t text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-bold">Inicia Sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
