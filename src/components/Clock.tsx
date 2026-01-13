'use client';

import { useState, useEffect } from 'react';

export default function Clock() {
    const [time, setTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            };
            const istTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
            setTime(istTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!time) return <span className="opacity-0">00:00:00 PM</span>;

    return <span>{time}</span>;
}
