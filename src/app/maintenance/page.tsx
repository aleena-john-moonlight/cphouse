import Reveal from '@/components/Reveal';
import { Hammer, Ban, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Maintenance() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <Reveal className="max-w-2xl w-full text-center relative z-10 active">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-10">
                    <Hammer className="w-10 h-10 text-emerald-500" />
                </div>

                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 gradient-heading">
                    System Maintenance.
                </h1>

                <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-12">
                    Node <span className="text-white font-mono">CP-CORE-01</span> is currently undergoing scheduled optimization.
                    The local residence network remains stable, but the management portal is partially restricted.
                </p>

                <div className="resend-card p-6 rounded-2xl mb-12 text-left border-emerald-500/20 bg-emerald-500/[0.02]">
                    <div className="flex items-center gap-3 mb-4">
                        <Clock className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-500">Estimated Uptime</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-2xl font-bold tracking-tight text-white">45 Minutes Remaining</p>
                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Next Sync: 03/01/2026 @ 22:00 IST</p>
                        </div>
                        <div className="text-right">
                            <span className="px-3 py-1 bg-emerald-500/10 rounded-full text-emerald-500 text-[10px] font-bold">OPTIMIZING</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/" className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
                        Return to Home
                    </Link>
                    <Link href="/status" className="px-8 py-4 border border-white/10 rounded-xl hover:bg-white/5 transition-all text-zinc-400">
                        View Live Status
                    </Link>
                </div>

                <div className="mt-16 flex items-center justify-center gap-2 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                    <Ban className="w-3 h-3" />
                    VLAN 21 Access: Restricted during rewrite
                </div>
            </Reveal>
        </main>
    );
}
