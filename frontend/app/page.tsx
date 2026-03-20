"use client";

import { 
  Package, 
  Send, 
  AlertTriangle, 
  Wallet, 
  ArrowRight,
  TrendingUp,
  Clock
} from "lucide-react";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";
import { Chatbot } from "@/components/chatbot";

const stats = [
  { 
    title: "Por Pre-alertar", 
    value: "3", 
    icon: Package, 
    color: "bg-blue-500", 
    description: "Compras registradas sin tracking" 
  },
  { 
    title: "Listos para Enviar", 
    value: "12", 
    icon: Send, 
    color: "bg-emerald-500", 
    description: "Paquetes en bodega principal" 
  },
  { 
    title: "Saldo Pendiente", 
    value: "$145.20", 
    icon: Wallet, 
    color: "bg-amber-500", 
    description: "Facturación pendiente de pago" 
  },
  { 
    title: "Alertas Seguridad", 
    value: "1", 
    icon: AlertTriangle, 
    color: "bg-rose-500", 
    description: "Documentación vencida" 
  },
];

const recentPackages = [
  { id: "ARK-9901", store: "Amazon", status: "En Bodega", date: "Hace 2 horas", weight: "2.5 lbs" },
  { id: "ARK-9902", store: "eBay", status: "En Tránsito", date: "Hace 5 horas", weight: "1.2 lbs" },
  { id: "ARK-9903", store: "Walmart", status: "Entregado", date: "Ayer", weight: "0.8 lbs" },
];

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Navbar />
        <main className="p-4 md:p-6 lg:p-8">
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Panel de Control</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Bienvenido de nuevo, Esteban. Aquí tienes el resumen de tu casillero.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.title} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex items-start justify-between">
                    <div className={`${stat.color} p-3 rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none`}>
                      <stat.icon className="size-6 text-white" />
                    </div>
                    <TrendingUp className="size-4 text-slate-300 group-hover:text-slate-400" />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.title}</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Packages Table */}
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl border overflow-hidden">
                <div className="p-6 border-b flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white">Movimientos Recientes</h3>
                  <Link href="/inventory" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
                    Ver todo <ArrowRight className="size-3" />
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 uppercase">
                      <tr>
                        <th className="px-6 py-4 font-semibold">Paquete ID</th>
                        <th className="px-6 py-4 font-semibold">Tienda</th>
                        <th className="px-6 py-4 font-semibold">Estado</th>
                        <th className="px-6 py-4 font-semibold">Fecha</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-t">
                      {recentPackages.map((pkg) => (
                        <tr key={pkg.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                          <td className="px-6 py-4 font-mono font-medium text-blue-600 dark:text-blue-400">{pkg.id}</td>
                          <td className="px-6 py-4 font-medium">{pkg.store}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                              pkg.status === "En Bodega" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                              pkg.status === "En Tránsito" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                              "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            }`}>
                              {pkg.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-xs">
                            <div className="flex items-center gap-1">
                              <Clock className="size-3" />
                              {pkg.date}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Action Sidebar */}
              <div className="space-y-6">
                <div className="bg-linear-to-br from-blue-600 to-indigo-700 p-6 rounded-3xl text-white shadow-xl shadow-blue-200 dark:shadow-none">
                  <h3 className="font-bold text-lg mb-2">Simular Envío</h3>
                  <p className="text-blue-100 text-xs mb-6 opacity-90">Calcula el costo total de tu carga incluyendo impuestos y aranceles.</p>
                  <Link href="/calculator" className="block w-full text-center py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                    Cotizar Ahora
                  </Link>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                  <div className="size-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400">
                    <Package className="size-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1 tracking-tight">Pre-alerta tu compra</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mb-4">¿Hiciste una compra? Infórmanos para agilizar el proceso.</p>
                  <Link href="/pre-alerts" className="text-sm font-bold text-blue-600 hover:text-blue-700 underline">
                    Registrar Compra
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Chatbot />
      </div>
    </div>
  );
}
