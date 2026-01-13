'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Clock from './Clock';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: '/home', href: '/' },
        { name: '/connect', href: '/connect' },
        { name: '/status', href: '/status' },
        { name: '/diagram', href: '/diagram' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
            <nav className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-bold">CP</div>
                    <span className="font-bold tracking-tighter text-xl uppercase">
                        {pathname === '/connect' ? 'Guest Node' : pathname === '/status' ? 'System Status' : 'C P HOUSE'}
                    </span>
                </Link>

                <div className="hidden lg:flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-zinc-400">
                    <span className="text-emerald-500 mr-2">IST</span>
                    <Clock />
                </div>

                <div className="hidden sm:flex items-center space-x-8 text-[12px] font-medium tracking-tighter text-zinc-400">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "hover:text-white transition-colors",
                                pathname === link.href && "text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/maintenance" className="bg-white/10 text-white px-4 py-1.5 rounded-full hover:bg-white/20 transition-all font-bold">
                        /maintenance
                    </Link>
                </div>

                <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            <div className={cn(
                "sm:hidden bg-black border-b border-white/5 px-6 space-y-4 overflow-hidden transition-all duration-400",
                isOpen ? "max-h-[300px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
            )}>
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="block text-zinc-400 py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </header>
    );
}
