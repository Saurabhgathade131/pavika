"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, Loader2 } from "lucide-react";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // Using application/x-www-form-urlencoded as required by OAuth2PasswordRequestForm
            const params = new URLSearchParams();
            params.append("username", email);
            params.append("password", password);

            const res = await fetch("http://127.0.0.1:8000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: params,
            });

            if (res.ok) {
                const data = await res.json();
                // simple secure storage for MVP (consider HTTP-only cookies for true production)
                localStorage.setItem("admin_token", data.access_token);
                router.push("/admin");
            } else {
                const data = await res.json();
                setError(data.detail || "Invalid credentials");
            }
        } catch (err) {
            setError("Could not connect to the server. Is the backend running?");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 selection:bg-indigo-500/10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="relative w-48 h-12">
                        <Image src="/pavika-logo.jpg" alt="Pavika Logo" fill className="object-contain" priority />
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-black tracking-tight text-zinc-900">
                    System Control Access
                </h2>
                <p className="mt-2 text-center text-sm text-zinc-600 font-medium">
                    Restricted area for authorized personnel only
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="glass-panel py-8 px-4 shadow sm:rounded-2xl sm:px-10 border border-zinc-200/50">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        {error && (
                            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100 flex items-center gap-2">
                                <Lock className="w-4 h-4" /> {error}
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-bold text-zinc-900 mb-2">
                                Administrator ID
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium"
                                placeholder="admin@pavika.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-zinc-900 mb-2">
                                Passcode
                            </label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Authenticate"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
