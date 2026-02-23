'use client'
import React, { useState } from 'react';

interface LetterHoverEffectProps {
    text: string;
    className?: string;
}

export default function LetterHoverEffect({ text, className = "" }: LetterHoverEffectProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

    const getLetterStyle = (index: number) => {
        const isHovered = hoveredIndex === index;
        const distance = hoveredIndex >= 0 ? Math.abs(index - hoveredIndex) : 0;

        let scale = 1;
        let translateY = 0;
        let rotateX = 0;
        let brightness = 1;

        if (hoveredIndex >= 0) {
            if (isHovered) {
                scale = 1.4;
                translateY = -20;
                rotateX = -15;
                brightness = 1.3;
            } else if (distance === 1) {
                scale = 1.2;
                translateY = -10;
                rotateX = -8;
                brightness = 1.15;
            } else if (distance === 2) {
                scale = 1.1;
                translateY = -5;
                rotateX = -4;
                brightness = 1.08;
            }
        }

        return {
            transform: `
                perspective(1000px) 
                translateY(${translateY}px) 
                rotateX(${rotateX}deg) 
                scale(${scale})
                translateZ(${isHovered ? 30 : distance <= 2 ? 15 : 0}px)
            `,
            filter: `brightness(${brightness})`,
            textShadow: distance <= 2
                ? '0 4px 12px rgba(255,255,255,0.3), 0 2px 6px rgba(34,211,238,0.2)'
                : '0 2px 4px rgba(255,255,255,0.15)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            zIndex: isHovered ? 10 : distance <= 2 ? 5 : 1,
            marginRight: '0.05em',
        };
    };

    return (
        <div className={`select-none ${className}`}>
            <span className="inline-flex items-center">
                {text.split('').map((letter, index) => (
                    <span
                        key={index}
                        className="inline-block cursor-pointer relative text-white"
                        style={getLetterStyle(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(-1)}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </span>
                ))}
            </span>
        </div>
    );
}
