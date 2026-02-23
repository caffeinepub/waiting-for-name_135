"use client";

import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HighlightCardProps {
  children: ReactNode;
  className?: string;
}

const HighlightCard: FC<HighlightCardProps> = ({ children, className }) => {
  return (
    <div className={cn("group cursor-pointer transition-all duration-500 hover:scale-[1.02] will-change-transform", className)}>
      <div className="relative overflow-hidden rounded-xl">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          {/* Pulsing glow circle - bottom left */}
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-cyan-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 animate-pulse"></div>
          
          {/* Small ping circles */}
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white/5 blur-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
          <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-white/5 blur-lg opacity-0 group-hover:opacity-100 animate-ping"></div>
          
          {/* Shimmer sweep effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>

        {/* Animated ping border overlay */}
        <div className="absolute inset-0 rounded-xl border-2 border-white/20 opacity-0 group-hover:opacity-100 animate-ping pointer-events-none"></div>
        <div className="absolute inset-0 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>

        {/* Corner accent animations */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* Card content - relative positioning to stay above effects */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Animated dots indicator at bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-20">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>

        {/* Gradient border effect */}
        <div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
};

export { HighlightCard };
