'use client';

import Link from 'next/link';
import { Wifi, ScanQrCode, Zap, ShieldCheck, Globe } from 'lucide-react';
import Reveal from '@/components/Reveal';
import BandwidthGraph from '@/components/BandwidthGraph';
import WifiPing from '@/components/WifiPing';
import AnimatedWifi from '@/components/AnimatedWifi';

export default function Connect() {
    return (
        <main className="max-w-6xl mx-auto px-6 pt-40 pb-32">
            <Reveal className="text-center mb-16 active">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-8">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Node CPH-AP Status: Online
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Guest Network.</h1>
            </Reveal>

            <Reveal className="max-w-2xl mx-auto mb-24">
                <div className="connection-instruction-card p-10 md:p-16 rounded-[2.5rem] text-center relative overflow-hidden bg-white/[0.02] border border-white/10 backdrop-blur-2xl group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                        <AnimatedWifi className="w-32 h-32" />
                    </div>

                    {/* Signal Ripples */}
                    <WifiPing />

                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-500">
                            <ScanQrCode className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">How to Connect</h2>
                        <p className="text-zinc-400 leading-relaxed mb-8">
                            Please scan the <span className="text-white font-bold underline decoration-emerald-500">QR Code</span> located next to the physical Access Point (AP) in the residence.
                        </p>
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                            If QR is unavailable, please ask the household for the access password.
                        </p>
                    </div>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Reveal className="resend-card p-8 rounded-3xl group">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-emerald-500/30 transition-colors">
                        <Zap className="text-emerald-500 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Dynamic Speed</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        Percentage-based bandwidth splitting ensures stable entertainment and zero-latency browsing for all guests.
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <BandwidthGraph />
                    </div>
                </Reveal>

                <Reveal className="resend-card p-8 rounded-3xl group">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-emerald-500/30 transition-colors">
                        <ShieldCheck className="text-emerald-500 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Isolated Node</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        Full VLAN isolation (10.11.11/24) with hardware-level firewall protection for maximum digital safety.
                    </p>
                    <div className="h-16 flex items-center justify-center opacity-20">
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-pulse"></div>
                    </div>
                </Reveal>

                <Reveal className="resend-card p-8 rounded-3xl group overflow-hidden">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-emerald-500/30 transition-colors">
                        <Globe className="text-emerald-500 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Global Routing</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        Automatic private tunneling via Mumbai, Bangalore, or Singapore exit nodes for optimal global performance.
                    </p>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="flex-1 h-1 bg-emerald-500/20 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 animate-loading-bar" style={{ animationDelay: `${i * 200}ms` }}></div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>

            <Reveal className="mt-24">
                <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-red-500/[0.01] group-hover:bg-red-500/[0.03] transition-colors"></div>
                    <div className="relative z-10">
                        <h4 className="text-red-500 font-bold mb-1 uppercase text-xs tracking-widest">Security Enforcement Active</h4>
                        <p className="text-zinc-500 text-sm italic">Device behavior is monitored. Unauthorized network scanning leads to immediate hardware ban.</p>
                    </div>
                    <Link href="/terms" className="relative z-10 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                        Read Protocol <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </Reveal>

            <style jsx>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-loading-bar {
          width: 100%;
          animation: loading-bar 1.5s infinite;
        }
      `}</style>
        </main>
    );
}
