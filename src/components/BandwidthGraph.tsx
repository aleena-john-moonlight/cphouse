'use client';

import { useEffect, useState } from 'react';

export default function BandwidthGraph() {
    const [points, setPoints] = useState<number[]>(new Array(20).fill(20));

    useEffect(() => {
        const interval = setInterval(() => {
            setPoints((prev) => {
                const next = [...prev.slice(1)];
                // Generate a random height emphasizing high bandwidth (range 10 to 60)
                const val = Math.floor(Math.random() * 40) + 15;
                next.push(val);
                return next;
            });
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-16 flex items-end gap-[2px] mt-6 opacity-40 group-hover:opacity-80 transition-opacity duration-700">
            {points.map((p, i) => (
                <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-emerald-500/50 to-emerald-400 rounded-sm transition-all duration-300 ease-out"
                    style={{ height: `${p}%` }}
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
        </div>
    );
}
