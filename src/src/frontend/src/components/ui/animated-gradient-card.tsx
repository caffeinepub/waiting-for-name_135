"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glowIntensity?: "low" | "medium" | "high";
  variant?: "default" | "accent" | "premium";
}

const AnimatedGradientCard = React.forwardRef<HTMLDivElement, AnimatedGradientCardProps>(
  ({ children, className, hoverEffect = true, glowIntensity = "medium", variant = "default", ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl backdrop-blur-md group transition-all duration-500",
          "animate-fade-in-up",
          className
        )}
        onMouseEnter={() => hoverEffect && setIsHovered(true)}
        onMouseLeave={() => hoverEffect && setIsHovered(false)}
        style={{
          boxShadow: isHovered 
            ? glowIntensity === "high" 
              ? "0 8px 35px rgba(34,211,238,0.15), 0 0 60px rgba(96,165,250,0.08)"
              : glowIntensity === "medium"
              ? "0 4px 25px rgba(34,211,238,0.1), 0 0 50px rgba(248,250,252,0.04)"
              : "0 4px 20px rgba(34,211,238,0.05), 0 0 40px rgba(248,250,252,0.02)"
            : "0 4px 20px rgba(34,211,238,0.05), 0 0 40px rgba(248,250,252,0.02)",
        }}
        {...props}
      >
        {/* Animated gradient background */}
        <div
          className={cn(
            "absolute inset-0 opacity-100 animate-gradient-shift",
            variant === "accent" && "bg-gradient-accent-card",
            variant === "premium" && "bg-gradient-premium-card",
            variant === "default" && "bg-gradient-default-card"
          )}
        />

        {/* Animated border gradient */}
        <div
          className={cn(
            "absolute inset-0 rounded-xl p-[1px] animate-gradient-border",
            variant === "accent" && "bg-gradient-border-accent",
            variant === "premium" && "bg-gradient-border-premium",
            variant === "default" && "bg-gradient-border-default"
          )}
        >
          <div className="h-full w-full rounded-xl bg-background/95" />
        </div>

        {/* Shimmer effect on hover */}
        {hoverEffect && (
          <div
            className={cn(
              "absolute inset-0 pointer-events-none transition-opacity duration-500",
              isHovered ? "opacity-100 animate-shimmer" : "opacity-0"
            )}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(248,250,252,0.1), rgba(34,211,238,0.15), rgba(248,250,252,0.1), transparent)",
              backgroundSize: "200% 100%",
            }}
          />
        )}

        {/* Subtle dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(248,250,252,1) 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>

        {/* Glow orbs (decorative) */}
        <div 
          className={cn(
            "absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl pointer-events-none transition-opacity duration-700",
            "bg-gradient-radial from-cyan-500/10 via-blue-500/5 to-transparent",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
        <div 
          className={cn(
            "absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl pointer-events-none transition-opacity duration-700",
            "bg-gradient-radial from-blue-500/10 via-cyan-500/5 to-transparent",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
    );
  }
);

AnimatedGradientCard.displayName = "AnimatedGradientCard";

export { AnimatedGradientCard };
