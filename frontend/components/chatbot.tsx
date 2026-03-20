"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[450px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="p-4 bg-blue-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="size-5" />
              </div>
              <div>
                <p className="font-semibold leading-none">Asistente Virtual</p>
                <p className="text-[10px] text-blue-100 mt-1 uppercase tracking-widest">Soporte Inteligente</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-md">
              <X className="size-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950/50">
            <div className="max-w-[85%] bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm shadow-xs border">
              ¡Hola! Soy tu asistente de **Arkanet**. 👋 ¿En qué puedo ayudarte hoy con tus paquetes?
            </div>
          </div>

          <div className="p-3 border-t bg-white dark:bg-slate-900 flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Escribe tu duda aquí..." 
              className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-0 outline-hidden"
            />
            <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Send className="size-4" />
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "size-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-105 active:scale-95 duration-300",
          isOpen ? "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rotated-180" : "bg-blue-600 text-white"
        )}
      >
        {isOpen ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
    </div>
  );
}
