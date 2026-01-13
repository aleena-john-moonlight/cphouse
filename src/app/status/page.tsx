'use client';

import { Database } from 'lucide-react';
import Reveal from '@/components/Reveal';
import MiniGraph from '@/components/MiniGraph';
import BandwidthGraph from '@/components/BandwidthGraph';

export default function Status() {
    const metrics = [
        {
            title: "Connectivity",
            items: [
                { name: "WAN (Fiber)", status: "LINK UP", stream: true },
                { name: "WAN Backup", status: "LINK UP", stream: true },
                { name: "LAN Interface", status: "ACTIVE" },
            ],
            scanline: true
        },
        {
            title: "Virtual Layers",
            items: [
                { name: "Guest Wi-Fi", status: "ACTIVE", stream: true },
                { name: "VLAN - 20", status: "ACTIVE" },
                { name: "VLAN - 21", status: "ACTIVE" },
            ]
        },
        {
            title: "Security & Engine",
            items: [
                { name: "Firewall (SPI)", status: "ACTIVE" },
                { name: "Private VPN", status: "ACTIVE", stream: true },
                { name: "DNS Resolver", status: "ACTIVE" },
            ]
        }
    ];

    return (
        <main className="max-w-5xl mx-auto px-6 pt-40 pb-32">
            <Reveal className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 active">
                <div>
                    <h1 className="text-5xl font-black tracking-tighter mb-2">Network Health.</h1>
                    <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Real-time Node Monitoring Engine</p>
                </div>
                <div className="text-right">
                    <div className="text-emerald-500 font-mono text-sm shadow-[0_0_15px_rgba(16,185,129,0.4)] mb-1 uppercase tracking-tighter font-bold">Node working & Verified: 03/01/2026</div>
                    <div className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">Global Uptime: 99.98% // INFRA SYNCED</div>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {metrics.map((section, idx) => (
                    <Reveal key={idx} className={`resend-card p-6 rounded-2xl relative overflow-hidden group ${section.scanline ? 'scanline-container' : ''}`}>
                        <p className="text-[10px] font-mono text-zinc-500 mb-4 tracking-widest uppercase">{section.title}</p>
                        <div className="space-y-4">
                            {section.items.map((item, i) => (
                                <div key={i} className="flex justify-between items-center group/item">
                                    <span className="text-sm font-medium flex items-center gap-2">
                                        {item.name}
                                        {item.stream && <MiniGraph />}
                                    </span>
                                    <span className="text-emerald-500 text-xs font-mono flex items-center">
                                        <span className="status-dot mr-3 group-hover/item:scale-125 transition-transform"></span>
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {section.scanline && (
                            <div className="mt-6 pt-4 border-t border-white/5 opacity-20 group-hover:opacity-40 transition-opacity">
                                <BandwidthGraph />
                            </div>
                        )}
                    </Reveal>
                ))}

                <Reveal className="md:col-span-2 lg:col-span-3 resend-card p-6 rounded-2xl group flex items-center justify-between overflow-hidden relative">
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                            <Database className="text-emerald-500 w-5 h-5 group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold">Central Database Node</h3>
                            <p className="text-zinc-500 text-[10px] font-mono">NODE: SQL-CP-HOUSE-01</p>
                        </div>
                    </div>

                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 opacity-20">
                        <BandwidthGraph />
                    </div>

                    <div className="text-emerald-500 text-xs font-mono tracking-tighter relative z-10">
                        <span className="status-dot mr-3 animate-pulse"></span>SYSTEM UP & SYNCED
                    </div>
                </Reveal>
            </div>

            <Reveal className="mt-12 bg-zinc-900/50 rounded-3xl p-8 border border-white/5 font-mono text-[11px] text-zinc-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-full pointer-events-none opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                    <BandwidthGraph />
                </div>
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '200ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '400ms' }}></div>
                    <span className="ml-2 uppercase tracking-widest">Live Logs</span>
                </div>
                <div className="space-y-1 relative z-10">
                    <p className="hover:text-zinc-300 transition-colors cursor-default select-none pointer-events-none">&gt; [08:24:41] Pinging Gateway 10.11.11.1 ... Response 1ms</p>
                    <p className="hover:text-zinc-300 transition-colors cursor-default select-none pointer-events-none">&gt; [08:24:42] 1 Gbps WAN stability check ... OK</p>
                    <p className="hover:text-zinc-300 transition-colors cursor-default select-none pointer-events-none">&gt; [08:24:42] VPN Tunnel (Singapore) re-verification ... Verified</p>
                    <p className="hover:text-zinc-300 transition-colors cursor-default select-none pointer-events-none">&gt; [08:24:43] DHCP Lease pool check (VLAN 21) ... Healthy</p>
                    <p className="text-emerald-500/80 group-hover:text-emerald-500 transition-colors">&gt; [08:24:43] All systems check completed. No errors found.</p>
                </div>
            </Reveal>
        </main>
    );
}
