"use client";

import { User, Mail, Phone, MapPin, Shield, FileCheck, Upload, BadgeCheck } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center gap-6 bg-white dark:bg-slate-900 p-8 rounded-3xl border shadow-sm">
        <div className="size-24 bg-linear-to-tr from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center text-3xl font-bold text-white shadow-xl relative">
          EA
          <div className="absolute -bottom-2 -right-2 p-1.5 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-900 shadow-md">
            <BadgeCheck className="size-4 text-white" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Esteban Arkanet</h1>
          <p className="text-slate-500 dark:text-slate-400">Usuario Premium desde Enero 2024</p>
          <div className="flex gap-2 mt-3">
             <span className="px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[10px] font-bold uppercase rounded-md tracking-wider">Cédula Verificada</span>
             <span className="px-2 py-0.5 bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md tracking-wider">Plan Básico</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border shadow-sm space-y-6">
          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <User className="size-5 text-blue-500" />
            Información Personal
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
              <Mail className="size-4 text-slate-400" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Email</span>
                <span className="text-sm font-medium">esteban@arkanet.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
              <Phone className="size-4 text-slate-400" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Teléfono</span>
                <span className="text-sm font-medium">+57 300 123 4567</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
              <MapPin className="size-4 text-slate-400" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Ciudad</span>
                <span className="text-sm font-medium">Bogotá, Colombia</span>
              </div>
            </div>
          </div>
          <button className="w-full py-3 text-sm font-bold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-xl transition-colors">
            Editar Información
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border shadow-sm space-y-6">
          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Shield className="size-5 text-blue-500" />
            Documentación Regimental
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">Sube copia de tu documento de identidad para agilizar el proceso de nacionalización ante aduana.</p>
          
          <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-blue-400 hover:bg-blue-50/20 transition-all">
            <div className="size-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Upload className="size-5" />
            </div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">Cargar Documento</p>
            <p className="text-xs text-slate-400 mt-1">Formatos PDF, JPG o PNG (máx 5MB)</p>
          </div>

          <div className="flex items-center justify-between p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
            <div className="flex items-center gap-3">
              <FileCheck className="size-5 text-emerald-600" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 leading-none">Documento_Identidad.pdf</span>
                <span className="text-[10px] text-emerald-600/60 mt-1">Verificado OK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
