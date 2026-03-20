"use client";

import { FileText, Download, CreditCard, Wallet, Smartphone, Landmark, CheckCircle2 } from "lucide-react";

const invoices = [
  { id: "FAC-1002", date: "15 Mar 2024", amount: "$45.20", status: "Pendiente" },
  { id: "FAC-0998", date: "02 Mar 2024", amount: "$120.00", status: "Pagado" },
  { id: "FAC-0850", date: "15 Feb 2024", amount: "$32.50", status: "Pagado" },
];

export default function BillingPaymentsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Finanzas y Pagos</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Gestiona tus facturas y realiza pagos de forma segura.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border overflow-hidden shadow-sm">
            <div className="p-6 border-b flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="size-5 text-blue-500" />
                Historial de Facturación
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">
                  <tr>
                    <th className="px-6 py-4">Factura ID</th>
                    <th className="px-6 py-4">Fecha</th>
                    <th className="px-6 py-4">Monto</th>
                    <th className="px-6 py-4">Estado</th>
                    <th className="px-6 py-4 text-center">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-t">
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 font-mono font-medium text-blue-600 dark:text-blue-400">{inv.id}</td>
                      <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{inv.date}</td>
                      <td className="px-6 py-4 font-bold text-slate-900 dark:text-white font-mono">{inv.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                          inv.status === "Pendiente" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                        }`}>
                          {inv.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 transition-colors">
                          <Download className="size-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Métodos de Pago</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 rounded-2xl border hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="size-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-blue-600 transition-colors">
                    <CreditCard className="size-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tarjeta Crédito/Débito</span>
                </div>
                <CheckCircle2 className="size-5 text-slate-200 group-hover:text-blue-500 transition-colors" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded-2xl border hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="size-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-blue-600 transition-colors">
                    <Smartphone className="size-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Billeteras Digitales</span>
                </div>
                <CheckCircle2 className="size-5 text-slate-200 group-hover:text-blue-500 transition-colors" />
              </button>

              <button className="w-full flex items-center justify-between p-4 rounded-2xl border hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="size-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-blue-600 transition-colors">
                    <Landmark className="size-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Transferencia Bancaria</span>
                </div>
                <CheckCircle2 className="size-5 text-slate-200 group-hover:text-blue-500 transition-colors" />
              </button>
            </div>
            
            <button className="w-full mt-8 bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition-all active:scale-[0.98] shadow-lg shadow-blue-200 dark:shadow-none uppercase tracking-widest text-xs">
              Pagar Pendiente ($45.20)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
