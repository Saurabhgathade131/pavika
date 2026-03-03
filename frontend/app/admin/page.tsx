"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    Upload,
    Image as ImageIcon,
    LayoutDashboard,
    Settings,
    LogOut,
    Search,
    Bell,
    Activity,
    Globe,
    ShieldCheck,
    Cpu,
    Zap,
    Users,
    MoreVertical,
    Plus
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

// --- System Pulse Component ---
function SystemPulse() {
    return (
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10">
            <motion.span
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            />
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">System Live</span>
        </div>
    );
}

// --- Network Chart (Simulated) ---
function NetworkChart() {
    return (
        <div className="w-full h-32 flex items-end gap-1 px-2">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 20 }}
                    animate={{ height: [20, 60, 30, 80, 40, 20] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                    }}
                    className="flex-1 bg-gradient-to-t from-indigo-500/20 to-indigo-500/40 rounded-t-sm"
                />
            ))}
        </div>
    );
}

// --- Spotlight Card helper ---
function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={`spotlight-card bento-card ${className}`}
            style={{
                ["--mouse-x" as any]: `${position.x}px`,
                ["--mouse-y" as any]: `${position.y}px`,
            }}
        >
            {children}
        </div>
    );
}

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [authVerified, setAuthVerified] = useState(false);
    const [clients, setClients] = useState<any[]>([]);
    const [loadingClients, setLoadingClients] = useState(false);
    const [isAddingClient, setIsAddingClient] = useState(false);

    // Form state
    const [newClient, setNewClient] = useState({
        business_name: "", contact_name: "", contact_email: "", contact_phone: "", service_tier: "Standard"
    });
    const router = useRouter();

    const fetchClients = async () => {
        setLoadingClients(true);
        try {
            const token = localStorage.getItem("admin_token");
            const res = await fetch("http://127.0.0.1:8000/api/clients/", {
                headers: { "Authorization": `Bearer ${token}` }
            });
            if (res.ok) setClients(await res.json());
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingClients(false);
        }
    };

    const handleCreateClient = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("admin_token");
            const res = await fetch("http://127.0.0.1:8000/api/clients/", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify(newClient)
            });
            if (res.ok) {
                setIsAddingClient(false);
                setNewClient({ business_name: "", contact_name: "", contact_email: "", contact_phone: "", service_tier: "Standard" });
                fetchClients();
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        // Enforce RBAC
        const token = localStorage.getItem("admin_token");
        if (!token) {
            router.push("/admin/login");
        } else {
            setAuthVerified(true);
            fetchClients();
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("admin_token");
        router.push("/admin/login");
    };

    if (!authVerified) {
        return <div className="min-h-screen bg-zinc-50 flex items-center justify-center">Verifying credentials...</div>;
    }

    return (
        <div className="min-h-screen bg-zinc-50/50 pt-28 pb-20 selection:bg-indigo-500/10">
            <div className="container mx-auto max-w-[1400px] px-6">

                {/* Top Nav Interface */}
                <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h1 className="text-3xl font-black tracking-tighter text-zinc-950">Architecture Control</h1>
                            <SystemPulse />
                        </div>
                        <p className="text-zinc-500 font-medium">Network ID: <span className="text-zinc-900 font-bold">PDN-X9-GLOBAL</span></p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-indigo-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Command search..."
                                className="bg-white border border-zinc-200 rounded-2xl pl-11 pr-6 py-3 text-sm w-64 shadow-sm focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all outline-none font-medium"
                            />
                        </div>
                        <button className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-indigo-600 hover:shadow-lg hover:border-indigo-100 transition-all shadow-sm relative group">
                            <Bell className="w-5 h-5 transition-transform group-hover:rotate-12" />
                            <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-white"></span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

                    {/* Navigation Rail */}
                    <div className="lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="bento-card bg-white p-4 space-y-8 sticky top-32 shadow-premium"
                        >
                            <nav className="space-y-2">
                                {[
                                    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
                                    { id: 'clients', label: 'Client Management', icon: Users },
                                    { id: 'media', label: 'Asset Library', icon: ImageIcon, count: 4 },
                                    { id: 'settings', label: 'Protocol Config', icon: Settings },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold text-sm tracking-tight group ${activeTab === tab.id
                                            ? 'bg-zinc-950 text-white shadow-xl translate-x-1'
                                            : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
                                            }`}
                                    >
                                        <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-indigo-400' : 'text-zinc-400 group-hover:text-zinc-600'} transition-colors`} />
                                        {tab.label}
                                        {tab.count && (
                                            <span className={`ml-auto px-2 py-0.5 rounded-lg text-[10px] font-bold ${activeTab === tab.id ? 'bg-white/10 text-white border border-white/20' : 'bg-zinc-100 text-zinc-500'} transition-colors`}>
                                                {tab.count}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </nav>

                            <div className="p-6 bg-zinc-50 rounded-[2rem] border border-zinc-100">
                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Core Health</p>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-bold text-zinc-600">CPU LOAD</span>
                                        <span className="text-xs font-mono text-zinc-900">14.2%</span>
                                    </div>
                                    <div className="w-full h-1 bg-zinc-200 rounded-full overflow-hidden">
                                        <motion.div animate={{ width: "14%" }} className="h-full bg-indigo-500" />
                                    </div>
                                    <div className="flex justify-between items-center text-emerald-600">
                                        <span className="text-xs font-bold">LATENCY</span>
                                        <span className="text-xs font-mono">24ms</span>
                                    </div>
                                </div>
                            </div>

                            <button onClick={handleLogout} className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-red-600 hover:bg-red-50 transition-all font-bold text-sm border border-transparent hover:border-red-100">
                                <LogOut className="w-4 h-4" /> Terminate Session
                            </button>
                        </motion.div>
                    </div>

                    {/* Operational Space */}
                    <div className="lg:col-span-9">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="bento-card p-0 bg-white border-zinc-100 min-h-[750px] shadow-premium overflow-hidden"
                            >
                                {activeTab === "dashboard" && (
                                    <div className="p-10 md:p-14">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-14">
                                            <div>
                                                <h2 className="text-4xl font-black tracking-tighter text-zinc-950 mb-2">Network Pulse</h2>
                                                <p className="text-zinc-500 font-medium">Real-time telemetrics from all active distribution nodes.</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-zinc-200 font-bold text-sm hover:shadow-md transition-all">
                                                    <MoreVertical className="w-4 h-4" /> Reports
                                                </button>
                                                <button className="btn-premium !py-3 !px-8 text-sm">
                                                    Initialize Node
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                                            {[
                                                { label: "Active Nodes", value: "142", icon: Globe, color: "text-indigo-500", bg: "bg-indigo-50" },
                                                { label: "Security Layer", value: "Verified", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-50" },
                                                { label: "Throughput", value: "4.2 TB/s", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
                                            ].map((stat, i) => (
                                                <div key={i} className="p-8 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 group transition-all hover:shadow-lg">
                                                    <div className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                                                        <stat.icon className={`w-7 h-7 ${stat.color}`} />
                                                    </div>
                                                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">{stat.label}</p>
                                                    <p className="text-3xl font-black text-zinc-950 tracking-tighter">{stat.value}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <SpotlightCard className="p-10 bg-zinc-950 text-white min-h-[300px] border-none">
                                            <div className="flex items-center justify-between mb-10">
                                                <h3 className="text-xl font-black tracking-tighter flex items-center gap-3">
                                                    <Activity className="w-5 h-5 text-indigo-400" /> Network Latency (Real-time)
                                                </h3>
                                                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Averaging 24ms</span>
                                            </div>
                                            <NetworkChart />
                                        </SpotlightCard>

                                        <div className="mt-14">
                                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8 ml-2">Operational Log</h3>
                                            <div className="space-y-4">
                                                {[
                                                    { time: "14:22:01", msg: "Node RAJ-01 established peer connection", status: "success" },
                                                    { time: "14:21:44", msg: "Encrypted handshake with Nexus Core complete", status: "success" },
                                                    { time: "14:20:12", msg: "Predictive routing update: optimizing Sector 7", status: "info" },
                                                ].map((log, i) => (
                                                    <div key={i} className="flex items-center gap-6 p-5 rounded-2xl bg-zinc-50/50 border border-zinc-100 hover:bg-white hover:shadow-md transition-all group">
                                                        <span className="text-xs font-mono font-bold text-zinc-400">{log.time}</span>
                                                        <p className="text-sm font-bold text-zinc-900 flex-grow">{log.msg}</p>
                                                        <div className={`w-2 h-2 rounded-full ${log.status === 'success' ? 'bg-emerald-500' : 'bg-indigo-500'} group-hover:scale-125 transition-transform`} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "clients" && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 p-10 md:p-14">
                                        <div className="flex items-center justify-between mb-8 border-b border-zinc-100 pb-10">
                                            <div>
                                                <h2 className="text-3xl font-black tracking-tight text-zinc-900 mb-2">Registered Businesses</h2>
                                                <p className="text-sm font-medium text-zinc-500">Manage network accounts and tier access.</p>
                                            </div>
                                            {!isAddingClient && (
                                                <button onClick={() => setIsAddingClient(true)} className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-sm">
                                                    <Plus className="w-5 h-5" /> Onboard Client
                                                </button>
                                            )}
                                        </div>

                                        {isAddingClient ? (
                                            <div className="glass-panel p-8 rounded-3xl border border-zinc-200/50">
                                                <div className="flex justify-between items-center mb-6">
                                                    <h3 className="text-xl font-bold text-zinc-900">New Client Onboarding</h3>
                                                    <button onClick={() => setIsAddingClient(false)} className="text-zinc-400 hover:text-zinc-600">Cancel</button>
                                                </div>
                                                <form onSubmit={handleCreateClient} className="space-y-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-sm font-bold text-zinc-700 mb-1">Business Name</label>
                                                            <input required type="text" value={newClient.business_name} onChange={e => setNewClient({ ...newClient, business_name: e.target.value })} className="w-full p-3 rounded-xl border border-zinc-200" />
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-bold text-zinc-700 mb-1">Service Tier</label>
                                                            <select value={newClient.service_tier} onChange={e => setNewClient({ ...newClient, service_tier: e.target.value })} className="w-full p-3 rounded-xl border border-zinc-200 bg-white">
                                                                <option>Standard</option>
                                                                <option>Enterprise</option>
                                                                <option>Elite</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-bold text-zinc-700 mb-1">Contact Name</label>
                                                            <input required type="text" value={newClient.contact_name} onChange={e => setNewClient({ ...newClient, contact_name: e.target.value })} className="w-full p-3 rounded-xl border border-zinc-200" />
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-bold text-zinc-700 mb-1">Contact Email</label>
                                                            <input required type="email" value={newClient.contact_email} onChange={e => setNewClient({ ...newClient, contact_email: e.target.value })} className="w-full p-3 rounded-xl border border-zinc-200" />
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="w-full bg-zinc-900 text-white rounded-xl py-3 font-bold hover:bg-zinc-800 transition-colors mt-4">Create Account</button>
                                                </form>
                                            </div>
                                        ) : (
                                            <div className="glass-panel p-8 rounded-3xl border border-zinc-200/50">
                                                {loadingClients ? (
                                                    <div className="text-center py-12 text-zinc-500">Loading network clients...</div>
                                                ) : clients.length === 0 ? (
                                                    <div className="text-center py-12">
                                                        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                            <Users className="w-8 h-8 text-indigo-500" />
                                                        </div>
                                                        <h3 className="text-lg font-bold text-zinc-900 mb-2">No clients found</h3>
                                                        <p className="text-sm text-zinc-500">Add your first business client to the network.</p>
                                                    </div>
                                                ) : (
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-left border-collapse">
                                                            <thead>
                                                                <tr className="border-b border-zinc-100">
                                                                    <th className="py-4 px-4 font-bold text-zinc-900">Business</th>
                                                                    <th className="py-4 px-4 font-bold text-zinc-900">Contact</th>
                                                                    <th className="py-4 px-4 font-bold text-zinc-900 text-center">Tier</th>
                                                                    <th className="py-4 px-4 font-bold text-zinc-900 text-center">Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {clients.map(client => (
                                                                    <tr key={client.id} className="border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                                                                        <td className="py-4 px-4">
                                                                            <div className="font-bold text-zinc-900">{client.business_name}</div>
                                                                            <div className="text-xs text-zinc-500 font-mono mt-0.5">ID: {client.id}</div>
                                                                        </td>
                                                                        <td className="py-4 px-4">
                                                                            <div className="text-sm text-zinc-700 font-medium">{client.contact_name}</div>
                                                                            <div className="text-xs text-zinc-500">{client.contact_email}</div>
                                                                        </td>
                                                                        <td className="py-4 px-4 text-center">
                                                                            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold">{client.service_tier}</span>
                                                                        </td>
                                                                        <td className="py-4 px-4 text-center">
                                                                            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold">{client.status}</span>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === "media" && (
                                    <div className="p-10 md:p-14">
                                        <div className="flex justify-between items-end border-b border-zinc-100 pb-10">
                                            <div>
                                                <h2 className="text-4xl font-black tracking-tighter text-zinc-950 mb-2">Asset Library</h2>
                                                <p className="text-zinc-500 font-medium">Manage architectural nodes and branding resources.</p>
                                            </div>
                                            <button className="btn-premium !py-3 !px-8 text-sm group">
                                                <Plus className="w-4 h-4 mr-2 transition-transform group-hover:rotate-90" /> New Deployment
                                            </button>
                                        </div>

                                        <div className="mt-12 space-y-12">
                                            <SpotlightCard className="h-64 border-2 border-dashed border-zinc-200 bg-zinc-50/50 flex flex-col items-center justify-center group hover:bg-indigo-50/30 transition-all cursor-pointer">
                                                <div className="w-20 h-20 rounded-[2rem] bg-white shadow-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6">
                                                    <Upload className="w-8 h-8 text-indigo-500" />
                                                </div>
                                                <p className="text-xl font-black tracking-tighter text-zinc-950">Initialize Direct Upload</p>
                                                <p className="text-zinc-400 font-bold text-sm mt-1 uppercase tracking-widest text-[10px]">Vectors / Matrices / Scalars</p>
                                            </SpotlightCard>

                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                                {[1, 2, 3, 4].map((i) => (
                                                    <motion.div
                                                        key={i}
                                                        whileHover={{ y: -8 }}
                                                        className="aspect-square rounded-[2.5rem] bg-zinc-50 border border-zinc-100 relative group overflow-hidden shadow-sm"
                                                    >
                                                        <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent opacity-50" />
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <ImageIcon className="w-12 h-12 text-zinc-200 group-hover:scale-110 transition-transform" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-zinc-950/90 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-md p-6 flex flex-col justify-between">
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">IMG_NODE_0{i}</span>
                                                                <MoreVertical className="w-4 h-4 text-zinc-500" />
                                                            </div>
                                                            <div>
                                                                <button className="w-full py-3 rounded-xl bg-white text-zinc-950 text-xs font-black shadow-lg mb-3">Inspect Payload</button>
                                                                <button className="w-full text-[10px] font-bold text-red-400 uppercase tracking-widest hover:text-red-300">Decommission</button>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "settings" && (
                                    <div className="p-10 md:p-14 flex flex-col items-center justify-center min-h-[600px] text-center">
                                        <div className="w-32 h-32 rounded-[3rem] bg-zinc-50 flex items-center justify-center mb-10 shadow-inner border border-zinc-100 relative group">
                                            <div className="absolute inset-0 rounded-[3rem] bg-indigo-500/10 scale-150 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <Cpu className="w-14 h-14 text-zinc-300 group-hover:text-indigo-400 transition-colors relative z-10" />
                                        </div>
                                        <h2 className="text-4xl font-black tracking-tighter text-zinc-950 mb-4">Core Settings</h2>
                                        <p className="text-zinc-500 text-xl font-medium max-w-sm mx-auto leading-relaxed">
                                            Access restricted to Level-9 Architects. Secure your console before entry.
                                        </p>
                                        <div className="mt-12 flex gap-4">
                                            <button className="px-8 py-4 rounded-2xl bg-zinc-950 text-white font-bold text-sm shadow-xl hover:translate-y-[-2px] transition-all">Verify Credentials</button>
                                            <button className="px-8 py-4 rounded-2xl bg-white border border-zinc-200 text-zinc-950 font-bold text-sm hover:bg-zinc-50 transition-all">Emergency Lockout</button>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    );
}
