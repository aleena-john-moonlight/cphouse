import Reveal from '@/components/Reveal';

export default function Privacy() {
    return (
        <main className="max-w-4xl mx-auto px-6 pt-40 pb-32">
            <Reveal className="active">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 gradient-heading">Privacy Policy.</h1>
                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">1. Scope of Private Infrastructure</h2>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            This policy applies to all digital interactions within the C P House private network infrastructure. By connecting to our nodes, you acknowledge that you are entering a private digital domain managed for the security and efficiency of the residents.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">2. Multi-Node Data Handling</h2>
                        <p className="text-zinc-500 leading-relaxed mb-4">
                            Our gateway nodes (CPH-AP) collect minimal telemetry to maintain uptime and performance. This includes:
                        </p>
                        <ul className="list-disc list-inside text-zinc-500 space-y-2 ml-4">
                            <li>Device Hardware Identifier (MAC Address) for VLAN isolation.</li>
                            <li>Bandwidth utilization metrics to ensure equitable dynamic splitting.</li>
                            <li>Connection timestamps for security audit trails.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">3. Network Isolation & Encryption</h2>
                        <p className="text-zinc-500 leading-relaxed">
                            Guest traffic is strictly isolated via VLAN 21. We do not perform deep packet inspection (DPI) on encrypted traffic. However, metadata is filtered through our hardware-level firewall to protect against DDoS and malicious inbound requests.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">4. Node Verification</h2>
                        <p className="text-zinc-500 leading-relaxed flex items-center gap-2">
                            <span className="status-dot"></span>
                            All nodes are verified and audited. Last infrastructure audit: 03/01/2026.
                        </p>
                    </section>

                    <section className="pt-8 border-t border-white/5">
                        <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
                            Questions regarding infrastructure privacy should be directed to: administrator@cphouse.xyz
                        </p>
                    </section>
                </div>
            </Reveal>
        </main>
    );
}
