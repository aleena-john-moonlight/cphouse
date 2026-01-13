import Reveal from '@/components/Reveal';
import { Globe, Router, SwitchCamera, Wifi, HardDrive, ShieldCheck, Database, Server, ArrowRight } from 'lucide-react';

const Node = ({ icon: Icon, title, subtitle, status = "Online", active = true }: any) => (
    <div className={`resend-card p-5 rounded-2xl flex items-center gap-4 border-white/5 ${!active ? 'opacity-50' : ''}`}>
        <div className={`p-3 rounded-xl ${active ? 'bg-emerald-500/10 text-emerald-500' : 'bg-white/5 text-zinc-500'}`}>
            <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
            <h4 className="text-sm font-bold text-white leading-tight">{title}</h4>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">{subtitle}</p>
        </div>
        {active && (
            <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></span>
                <span className="text-[8px] font-mono text-emerald-500/80 uppercase font-bold">Live</span>
            </div>
        )}
    </div>
);

const Connection = ({ vertical = false, label = "" }: { vertical?: boolean, label?: string }) => (
    <div className={`flex items-center justify-center ${vertical ? 'flex-col h-12' : 'w-12 h-px'}`}>
        {vertical ? (
            <>
                <div className="w-px h-full bg-gradient-to-b from-white/20 via-emerald-500/40 to-white/20"></div>
                {label && <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-tighter absolute rotate-90 translate-x-4">{label}</span>}
            </>
        ) : (
            <>
                <div className="h-px w-full bg-gradient-to-r from-white/20 via-emerald-500/40 to-white/20"></div>
                {label && <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-tighter absolute -translate-y-3">{label}</span>}
            </>
        )}
    </div>
);

export default function Diagram() {
    return (
        <main className="max-w-6xl mx-auto px-6 pt-40 pb-32">
            <Reveal className="mb-16 active text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 gradient-heading">
                    Network Topology.
                </h1>
                <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Infrastructure Visualization // CP-HOUSE-CORE</p>
            </Reveal>

            <div className="relative">
                {/* WAN Layer */}
                <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-4">
                        <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-6 px-2">// External Interface 01</h3>
                        <Node icon={Globe} title="BSNL Fiber" subtitle="WAN-1 // PPPoE" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-6 px-2">// External Interface 02</h3>
                        <Node icon={Globe} title="JIO Fiber" subtitle="WAN-2 // Static" />
                    </div>
                </Reveal>

                <div className="hidden md:flex justify-around mb-12">
                    <Connection vertical label="Gbit/s" />
                    <Connection vertical label="Gbit/s" />
                </div>

                {/* Core Gateway */}
                <Reveal className="max-w-md mx-auto mb-16">
                    <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-6 text-center">// Load Balancer & Gateway</h3>
                    <div className="resend-card p-8 rounded-[2rem] border-emerald-500/20 bg-emerald-500/[0.02] text-center border-2">
                        <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                            <Router className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tighter text-white">Omada ER605</h3>
                        <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mt-2">Core Multi-WAN Router</p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                                <p className="text-[8px] text-zinc-500 uppercase block mb-1">CPU Load</p>
                                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-[24%]"></div>
                                </div>
                            </div>
                            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                                <p className="text-[8px] text-zinc-500 uppercase block mb-1">Uptime</p>
                                <p className="text-[10px] font-bold text-white">14d 08h</p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Distribution Layer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
                    <div className="space-y-8 flex flex-col items-center">
                        <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest w-full text-center">// Storage & Surveillance</h3>
                        <div className="w-full space-y-4">
                            <Node icon={HardDrive} title="Home NVR" subtitle="IP Cameras // CCTV" />
                            <Node icon={Database} title="Resident NAS" subtitle="RAID-5 // Private Cloud" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="hidden md:block mb-8">
                            <Connection vertical label="Trunk" />
                        </div>
                        <div className="w-full">
                            <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-6 text-center">// Switching Fabric</h3>
                            <Node icon={SwitchCamera} title="TP-Link Managed" subtitle="TL-SG108PE // POE+" />
                        </div>
                        <div className="hidden md:block mt-8">
                            <Connection vertical label="VLAN Tagged" />
                        </div>
                    </div>

                    <div className="space-y-8 flex flex-col items-center">
                        <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest w-full text-center">// Compute Node</h3>
                        <div className="w-full">
                            <Node icon={Server} title="Core Server" subtitle="Proxmox // Virtualized" />
                        </div>
                    </div>
                </div>

                {/* Access Layer */}
                <Reveal className="border-t border-white/5 pt-16">
                    <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-8 text-center">// Mesh Wireless Access Points</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Node icon={Wifi} title="AP-01 [Grd Floor]" subtitle="Omada EAP610" />
                        <Node icon={Wifi} title="AP-02 [1st Floor]" subtitle="Omada EAP610" />
                        <Node icon={Wifi} title="AP-03 [Outdoor]" subtitle="Omada EAP225" />
                    </div>
                </Reveal>
            </div>

            <Reveal className="mt-20 p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <ShieldCheck className="w-10 h-10 text-emerald-500" />
                    <div>
                        <h4 className="text-white font-bold tracking-tight">SDN Verification Complete</h4>
                        <p className="text-zinc-500 text-xs">Self-Healing network enabled. Verified on 03/01/2026</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] text-zinc-400 font-mono">MTU: 1500</span>
                    <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] text-zinc-400 font-mono">Duo-WAN: Active</span>
                </div>
            </Reveal>
        </main>
    );
}
