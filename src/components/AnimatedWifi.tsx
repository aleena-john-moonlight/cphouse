'use client';

import { Wifi } from 'lucide-react';

export default function AnimatedWifi({ className }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <Wifi className="w-full h-full text-white" />

            {/* Wave 1 */}
            <div className="absolute inset-x-0 top-[15%] h-[20%] border-t-2 border-emerald-500/80 rounded-[50%] animate-wifi-wave-1 opacity-0"></div>
            {/* Wave 2 */}
            <div className="absolute inset-x-0 top-[35%] h-[20%] border-t-2 border-emerald-500/80 rounded-[50%] animate-wifi-wave-2 opacity-0"></div>
            {/* Wave 3 */}
            <div className="absolute inset-x-0 top-[55%] h-[20%] border-t-2 border-emerald-500/80 rounded-[50%] animate-wifi-wave-3 opacity-0"></div>

            <style jsx>{`
        @keyframes wifi-wave {
          0% { opacity: 0; transform: translateY(2px); }
          50% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-2px); }
        }
        .animate-wifi-wave-1 { animation: wifi-wave 2s infinite 0s; }
        .animate-wifi-wave-2 { animation: wifi-wave 2s infinite 0.4s; }
        .animate-wifi-wave-3 { animation: wifi-wave 2s infinite 0.8s; }
      `}</style>
        </div>
    );
}
