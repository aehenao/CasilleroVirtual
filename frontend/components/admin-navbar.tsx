"use client";

import { Bell, Search, Menu, Zap } from "lucide-react";

export function AdminNavbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 md:px-8 shadow-xs">
      <div className="flex items-center md:hidden">
        <button className="p-2 text-slate-600 dark:text-slate-400">
          <Menu className="size-6" />
        </button>
      </div>
      
      <div className="hidden md:flex flex-1 max-w-lg items-center relative">
        <Search className="absolute left-3 size-4 text-slate-400" />
        <input 
          type="text" 
          placeholder="Buscar tracking universal, email de cliente, factura..." 
          className="w-full pl-10 pr-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all outline-hidden"
        />
        <div className="absolute right-2 px-2 py-0.5 bg-white dark:bg-slate-700 rounded text-[10px] font-bold text-slate-400 border shadow-xs flex items-center gap-1">
          <Zap className="size-3 text-amber-500 fill-amber-500" /> Cmd+K
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <Bell className="size-5" />
          <span className="absolute top-2 right-2 size-2 bg-indigo-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l dark:border-slate-700">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">Admin System</p>
            <p className="text-[10px] text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-bold">Gerencia</p>
          </div>
          <div className="size-10 bg-slate-900 dark:bg-slate-100 rounded-full flex items-center justify-center text-white dark:text-slate-900 font-bold shadow-md border-2 border-indigo-500/30">
            AD
          </div>
        </div>
      </div>
    </header>
  );
}
