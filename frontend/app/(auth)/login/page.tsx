"use client";

import Link from "next/link";
import { Box, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-3xl overflow-hidden border">
      <div className="p-8">
        <div className="flex justify-center mb-8">
          <div className="size-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 dark:shadow-none">
            <Box className="size-7 text-white" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">Bienvenido de nuevo</h2>
        <p className="text-slate-500 dark:text-slate-400 text-center text-sm mb-8">Ingresa tus credenciales para acceder a tu casillero</p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 size-4 text-slate-400" />
              <input 
                type="email" 
                placeholder="nombre@ejemplo.com"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-hidden text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Contraseña</label>
              <Link href="/forgot-password" title="recuperar" className="text-xs text-blue-600 hover:text-blue-700 font-semibold">¿Olvidaste tu contraseña?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 size-4 text-slate-400" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-hidden text-sm"
              />
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 dark:shadow-none transition-all active:scale-[0.98] mt-4">
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            ¿No tienes una cuenta?{" "}
            <Link href="/register" className="text-blue-600 hover:text-blue-700 font-bold">Regístrate gratis</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
