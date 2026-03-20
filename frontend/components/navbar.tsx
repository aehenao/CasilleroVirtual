"use client";

import { Bell, Search, Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 md:px-8">
      <div className="flex items-center md:hidden">
        <button className="p-2 text-slate-600 dark:text-slate-400">
          <Menu className="size-6" />
        </button>
      </div>
      
      <div className="hidden md:flex flex-1 max-w-md items-center relative">
        <Search className="absolute left-3 size-4 text-slate-400" />
        <input 
          type="text" 
          placeholder="Buscar paquetes, guías..." 
          className="w-full pl-10 pr-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 border-none rounded-full focus:ring-2 focus:ring-blue-500 transition-all outline-hidden"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <Bell className="size-5" />
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-900 dark:text-white line-height-tight">Esteban Arkanet</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest">ID: 450912</p>
          </div>
          <div className="size-10 bg-linear-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
            EA
          </div>
        </div>
      </div>
    </header>
  );
}
