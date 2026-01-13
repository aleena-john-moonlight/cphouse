'use client';

import { useEffect, useState } from 'react';

export default function WifiPing() {
    const [ripples, setRipples] = useState<number[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRipples((prev) => [...prev, Date.now()].slice(-3));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {ripples.map((id) => (
                <div
                    key={id}
                    className="absolute border border-emerald-500/30 rounded-full animate-ping-slow"
                    style={{ width: '100px', height: '100px' }}
                />
            ))}
            <style jsx>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(4); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) forwards;
        }
      `}</style>
        </div>
    );
}
