import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/5 bg-zinc-900/30 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase font-mono mb-1">
                        &copy; {year} C P HOUSE
                    </p>
                    <p className="text-zinc-700 text-[10px] tracking-widest uppercase">
                        Network Infrastructure Management
                    </p>
                </div>
                <div className="flex gap-10 text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em]">
                    <Link href="/privacy" className="hover:text-white transition-colors">/privacy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">/terms</Link>
                </div>
            </div>
        </footer>
    );
}
