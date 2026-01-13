import Link from 'next/link';
import { Info, Gauge, ShieldAlert, UserPlus } from 'lucide-react';
import TypingText from '@/components/TypingText';
import Reveal from '@/components/Reveal';
import BandwidthGraph from '@/components/BandwidthGraph';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <Reveal className="pt-48 pb-20 active">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter mb-10 gradient-heading">
            Welcome To <br />C P House.
          </h1>
          <TypingText />
          <div className="flex flex-wrap gap-4">
            <Link href="#network" className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
              Enter Network
            </Link>
            <Link href="/status" className="px-8 py-4 border border-white/10 rounded-xl hover:bg-white/5 transition-all text-center">
              System Status
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Admin Note Section */}
      <Reveal className="py-12">
        <div className="resend-card p-8 md:p-12 rounded-[2rem] border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <Info className="w-6 h-6 text-emerald-500 mt-1" />
            <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-zinc-500">Administrator Note</h2>
          </div>
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
            Hey there, welcome to <span className="text-white font-bold">CP House Portal</span>. We wish you a good day! To connect to the guest network, kindly scroll down and select the <span className="text-white underline decoration-emerald-500 underline-offset-4">Guest Wifi Access (Enter Gateway)</span> option.
          </p>
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light mt-6">
            The CP House local network is fully isolated with advanced <span className="text-emerald-400">DDoS protection</span> and <span className="text-emerald-400">firewall-level protection</span>. If you plan to use the CP House network for more than 2 days, kindly please use a <span className="italic text-white">static IP</span>. For static IP assignment, contact the home administrator.
          </p>
          <p className="text-lg md:text-xl text-zinc-400 font-mono mt-8">
            Thank you, enjoy the digital world.
          </p>
        </div>
      </Reveal>

      {/* Metrics Section */}
      <Reveal className="py-16 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="resend-card p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <Gauge className="w-12 h-12 text-white/5 group-hover:text-emerald-500/10 transition-colors duration-700" />
            </div>
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-6">// Performance</h3>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-5xl font-black tracking-tighter">1 Gbps</span>
              <span className="text-emerald-500 text-xs font-bold mb-2 uppercase tracking-widest">Fiber</span>
            </div>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
              Unlimited data throughput enabled. <br />
              <span className="text-zinc-300">200 Mbps Backup line active.</span> Failover ready.
            </p>

            <BandwidthGraph />

            <div className="flex gap-4 mt-6">
              <span className="px-3 py-1 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase">Dynamic SPLIT Active</span>
            </div>
          </div>

          <div className="resend-card p-8 rounded-2xl">
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-6">// System Metrics</h3>
            <div className="space-y-3 font-mono text-[10px]">
              {[
                { label: 'Internet', status: 'ACTIVE', color: 'text-emerald-400' },
                { label: 'Private Tunnel', status: 'ENCRYPTED', color: 'text-emerald-400' },
                { label: 'Guest Wifi', status: 'VLAN 21 ACTIVE', color: 'text-zinc-300' },
                { label: 'VPN Gateway', status: 'MULTI-ROUTE', color: 'text-emerald-400' },
                { label: 'Security Wall', status: 'ENFORCED', color: 'text-emerald-400' }
              ].map((metric) => (
                <div key={metric.label} className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500 uppercase">{metric.label}</span>
                  <span className={`font-bold ${metric.color}`}>{metric.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Network Access Section */}
      <Reveal id="network" className="py-32 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="resend-card p-8 rounded-2xl block group opacity-50 cursor-not-allowed">
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5 text-zinc-400" />
              </div>
              <span className="text-red-500 font-mono text-[10px] uppercase tracking-widest">Restricted</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tighter mb-4">Main Home Network</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">Full access to private home servers and smart device control panels.</p>
            <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">Auth Required</div>
          </div>

          <Link href="/connect" className="resend-card p-8 rounded-2xl block group">
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <UserPlus className="w-5 h-5 text-zinc-400" />
              </div>
              <span className="text-blue-500 font-mono text-[10px] uppercase tracking-widest">Open Node</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tighter mb-4">Guest Wifi Access</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">Isolated bandwidth for visitors. Secure internet without local LAN access.</p>
            <div className="text-white text-[10px] font-bold uppercase tracking-widest">Enter Gateway →</div>
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
