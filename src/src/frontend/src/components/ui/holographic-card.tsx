import React, { useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
}

const HolographicCard: React.FC<HolographicCardProps> = ({ children, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    card.style.setProperty('--x', '50%');
    card.style.setProperty('--y', '50%');
    card.style.setProperty('--bg-x', '50%');
    card.style.setProperty('--bg-y', '50%');
  };

  return (
    <div
      className={cn('holographic-card relative', className)}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      <div className="holo-content relative z-10">{children}</div>
      <div
        className="holo-glow pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--bg-x, 50%) var(--bg-y, 50%), rgba(34, 211, 238, 0.3), transparent 50%)`,
        }}
      />
      <div
        className="holo-shine pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--bg-x, 50%) var(--bg-y, 50%), rgba(255, 255, 255, 0.15), transparent 40%)`,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};

export default HolographicCard;
