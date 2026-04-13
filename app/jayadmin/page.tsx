"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    FileText, 
    Mail, 
    Trash2, 
    Plus, 
    Download, 
    Send, 
    CheckCircle2, 
    Printer,
    User,
    ChevronRight,
    Search,
    LayoutDashboard
} from "lucide-react";
import Image from "next/image";
import { StandardQuote } from "@/components/emails/StandardQuote";

export default function JayAdminPortal() {
    const [activeTab, setActiveTab] = useState("billing");
    const [leads, setLeads] = useState<any[]>([]);
    const [selectedLead, setSelectedLead] = useState<any>(null);
    
    // Billing State
    const [billItems, setBillItems] = useState([
        { description: "", qty: "1", rate: "0", total: "0" }
    ]);
    const [isGenerating, setIsGenerating] = useState(false);

    // Email State
    const [templateType, setTemplateType] = useState("quote");
    const [emailStatus, setEmailStatus] = useState<"idle"|"sending"|"sent">("idle");

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const res = await fetch("/api/leads");
                if (res.ok) setLeads(await res.json());
            } catch (err) {
                console.error(err);
            }
        };
        fetchLeads();
    }, []);

    const addItem = () => setBillItems([...billItems, { description: "", qty: "1", rate: "0", total: "0" }]);
    const removeItem = (idx: number) => setBillItems(billItems.filter((_, i) => i !== idx));
    
    const updateItem = (idx: number, field: string, value: string) => {
        const newItems = [...billItems];
        // @ts-ignore
        newItems[idx][field] = value;
        if (field === 'qty' || field === 'rate') {
            newItems[idx].total = (parseFloat(newItems[idx].qty || "0") * parseFloat(newItems[idx].rate || "0")).toString();
        }
        setBillItems(newItems);
    };

    const grandTotal = billItems.reduce((acc, item) => acc + parseFloat(item.total || "0"), 0);

    const handleSendEmail = () => {
        setEmailStatus("sending");
        setTimeout(() => setEmailStatus("sent"), 2000);
        setTimeout(() => setEmailStatus("idle"), 5000);
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] pt-28 pb-20 selection:bg-[var(--color-accent)]/10 font-body">
            <div className="container mx-auto max-w-[1400px] px-6">
                
                {/* Header branding */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-4xl font-black tracking-tighter text-[#0b2545]">JayAdmin Console</h1>
                            <span className="bg-[#0b2545] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Level 9 Restricted</span>
                        </div>
                        <p className="text-gray-500 font-medium">Enterprise Orchestration & Financial Operations Interface</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Navigation */}
                    <div className="lg:col-span-3 space-y-4">
                        {[
                            { id: "billing", label: "Financial Ops", icon: FileText },
                            { id: "comms", label: "Global Communications", icon: Mail },
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl transition-all font-black text-sm tracking-tight ${
                                    activeTab === tab.id 
                                    ? "bg-[#0b2545] text-white shadow-2xl translate-x-2" 
                                    : "bg-white text-gray-400 hover:bg-gray-50 shadow-sm"
                                }`}
                            >
                                <tab.icon className="w-5 h-5" />
                                {tab.label}
                                <ChevronRight className={`ml-auto w-4 h-4 ${activeTab === tab.id ? "opacity-100" : "opacity-0"}`} />
                            </button>
                        ))}
                    </div>

                    {/* Work Area */}
                    <div className="lg:col-span-9">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-gray-100 min-h-[700px]"
                            >
                                {activeTab === "billing" && (
                                    <div className="space-y-10">
                                        <div className="flex justify-between items-end border-b border-gray-100 pb-8">
                                            <div>
                                                <h2 className="text-3xl font-black tracking-tight text-[#0b2545] mb-2">Bill & Invoice Generation</h2>
                                                <p className="text-gray-400 font-medium text-sm uppercase tracking-widest">Draft official commercial documents</p>
                                            </div>
                                            <button 
                                              onClick={() => window.print()} 
                                              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 font-bold text-[#0b2545] hover:bg-gray-200 transition-all"
                                            >
                                                <Printer className="w-4 h-4" /> Print View
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-6">
                                                <div>
                                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Target Procurement Lead</label>
                                                    <select 
                                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none font-bold"
                                                        value={selectedLead?.id || ""}
                                                        onChange={(e) => setSelectedLead(leads.find(l => l.id.toString() === e.target.value))}
                                                    >
                                                        <option value="">Select a lead...</option>
                                                        {leads.map(lead => (
                                                            <option key={lead.id} value={lead.id}>{lead.name} ({lead.requirements.substring(0, 20)}...)</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="flex items-center justify-between">
                                                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Line Items</label>
                                                      <button onClick={addItem} className="text-[var(--color-accent)] hover:underline text-xs font-black">+ ADD ITEM</button>
                                                    </div>
                                                    
                                                    {billItems.map((item, idx) => (
                                                        <div key={idx} className="flex gap-4 items-end animate-in fade-in slide-in-from-right-2">
                                                            <div className="flex-[3]">
                                                                <input 
                                                                    placeholder="Material Description"
                                                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium"
                                                                    value={item.description}
                                                                    onChange={(e) => updateItem(idx, 'description', e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="flex-1">
                                                                <input 
                                                                    placeholder="Qty"
                                                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-center"
                                                                    value={item.qty}
                                                                    onChange={(e) => updateItem(idx, 'qty', e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="flex-1">
                                                                <input 
                                                                    placeholder="Rate"
                                                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-right"
                                                                    value={item.rate}
                                                                    onChange={(e) => updateItem(idx, 'rate', e.target.value)}
                                                                />
                                                            </div>
                                                            <button onClick={() => removeItem(idx)} className="p-3 text-red-400 hover:text-red-500 transition-colors">
                                                              <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="print-area">
                                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Live Document Preview</label>
                                                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-inner min-h-[500px]">
                                                    <StandardQuote 
                                                        clientName={selectedLead?.name || "RECIPIENT_NAME"} 
                                                        items={billItems.map(i => ({ ...i, total: (parseFloat(i.qty || "0") * parseFloat(i.rate || "0")).toString() }))}
                                                        totalAmount={grandTotal.toString()}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "comms" && (
                                    <div className="space-y-10">
                                        <div className="flex justify-between items-end border-b border-gray-100 pb-8">
                                            <div>
                                                <h2 className="text-3xl font-black tracking-tight text-[#0b2545] mb-2">Omnichannel Communications</h2>
                                                <p className="text-gray-400 font-medium text-sm uppercase tracking-widest">Transmit branding across the network</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                                            <div className="md:col-span-4 space-y-6">
                                                <div>
                                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Template Matrix</label>
                                                    <div className="space-y-3">
                                                        {[
                                                            { id: "quote", name: "Commercial Quotation" },
                                                            { id: "welcome", name: "Network Access Invitation" },
                                                            { id: "followup", name: "Lead Engagement Protocol" }
                                                        ].map(t => (
                                                            <button 
                                                                key={t.id}
                                                                onClick={() => setTemplateType(t.id)}
                                                                className={`w-full text-left px-5 py-4 rounded-xl font-bold text-sm transition-all ${
                                                                    templateType === t.id ? "bg-[#0b2545]/5 text-[#0b2545] border-l-4 border-l-[var(--color-accent)]" : "bg-white border border-gray-100 text-gray-500 hover:bg-gray-50"
                                                                }`}
                                                            >
                                                                {t.name}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="p-6 bg-[#0b2545] rounded-3xl text-white">
                                                    <h4 className="font-black text-sm mb-2 flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" /> Distribution Hub
                                                    </h4>
                                                    <p className="text-xs text-white/60 leading-relaxed font-medium">Ready to broadcast to {selectedLead?.name || "selected target"}.</p>
                                                    
                                                    <button 
                                                      disabled={emailStatus !== "idle"}
                                                      onClick={handleSendEmail} 
                                                      className="w-full mt-6 py-3 rounded-xl bg-white text-[#0b2545] font-black text-xs hover:shadow-xl hover:translate-y-[-2px] transition-all disabled:opacity-50"
                                                    >
                                                        {emailStatus === "idle" && <><Send className="w-3 h-3 inline mr-2" /> TRANSMIT DATA</>}
                                                        {emailStatus === "sending" && "TRANSMITTING..."}
                                                        {emailStatus === "sent" && "TRANSMITTED SUCCESSFULLY"}
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="md:col-span-8">
                                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Transmission Preview</label>
                                                <div className="bg-gray-100 rounded-3xl p-8 min-h-[500px] flex items-center justify-center">
                                                    <div className="bg-white rounded-xl shadow-2xl scale-90 origin-top">
                                                        <StandardQuote 
                                                            clientName={selectedLead?.name || "Saurabh Prashant"} 
                                                            items={billItems.map(i => ({ ...i, total: (parseFloat(i.qty || "0") * parseFloat(i.rate || "0")).toString() }))}
                                                            totalAmount={grandTotal.toString()}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @media print {
                    .min-h-screen { background: white !important; padding: 0 !important; }
                    .container { max-width: 100% !important; margin: 0 !important; padding: 0 !important; }
                    .lg\:grid-cols-12, .mb-12, .lg\:col-span-3, .pb-8, .md\:col-span-2, .lg\:col-span-9 > div > div:first-child { display: none !important; }
                    .lg\:col-span-9 { width: 100% !important; margin: 0 !important; border: none !important; box-shadow: none !important; }
                    .print-area { display: block !important; width: 100% !important; }
                    .bg-white { box-shadow: none !important; border: none !important; }
                }
                .shadow-premium {
                    box-shadow: 0 0 50px -12px rgba(0, 0, 0, 0.12);
                }
            `}</style>
        </div>
    );
}
