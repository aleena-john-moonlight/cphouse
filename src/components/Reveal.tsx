'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function Reveal({ children, className, id }: RevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            id={id}
            ref={ref}
            className={cn("reveal", isVisible && "active", className)}
        >
            {children}
        </div>
    );
}
