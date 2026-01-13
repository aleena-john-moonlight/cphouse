'use client';

import { useEffect, useState } from 'react';

export default function MiniGraph() {
    const [points, setPoints] = useState<number[]>(new Array(15).fill(10));

    useEffect(() => {
        const interval = setInterval(() => {
            setPoints((prev) => {
                const next = [...prev.slice(1)];
                const val = Math.floor(Math.random() * 60) + 20;
                next.push(val);
                return next;
            });
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-end gap-[1px] h-4 w-12 pb-1">
            {points.map((p, i) => (
                <div
                    key={i}
                    className="flex-1 bg-emerald-500/40 rounded-[0.5px]"
                    style={{ height: `${p}%` }}
                />
            ))}
        </div>
    );
}
