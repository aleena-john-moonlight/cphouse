import Reveal from '@/components/Reveal';

export default function Terms() {
    return (
        <main className="max-w-4xl mx-auto px-6 pt-40 pb-32">
            <Reveal className="active">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 gradient-heading">Terms of Service.</h1>
                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">1. Network Protocol Acceptance</h2>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Connectivity to C P House infrastructure is a privilege, not a right. By accessing the SSID or physical ethernet nodes, you agree to abide by the system security protocols enforced by the local administration.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">2. Prohibited Interactions</h2>
                        <p className="text-zinc-500 leading-relaxed mb-4">
                            Users are strictly prohibited from:
                        </p>
                        <ul className="list-disc list-inside text-zinc-500 space-y-2 ml-4">
                            <li>Scanning local IP ranges (10.11.11.0/24).</li>
                            <li>Unauthorized access attempts to private home servers (VLAN 20).</li>
                            <li>Running high-throughput automated scraping or mining operations.</li>
                            <li>Interfering with the dynamic SQL metrics monitoring engine.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">3. Security Enforcement</h2>
                        <p className="text-zinc-500 leading-relaxed">
                            Our firewall (SPI) automatically flags and blocks devices exhibiting malicious patterns. Hardware-level bans are permanent and cannot be reversed without physical administrator intervention.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">4. Node Status & Liability</h2>
                        <p className="text-zinc-500 leading-relaxed">
                            Infrastructure is provided "as is" with a target uptime of 99.98%. We are not liable for data loss or hardware damage resulting from network use or surges.
                        </p>
                        <p className="mt-4 text-emerald-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                            <span className="status-dot"></span>
                            All nodes working & Verified: 03/01/2026
                        </p>
                    </section>

                    <section className="pt-8 border-t border-white/5">
                        <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.2em]">
                            Protocol Version: 2.4.0 // Last Updated: 03/01/2026
                        </p>
                    </section>
                </div>
            </Reveal>
        </main>
    );
}
