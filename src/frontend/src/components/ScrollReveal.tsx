import { ReactNode, useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0,
        rootMargin: "-100px",
      }
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
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.25, 0.4, 0.25, 1)",
      }}
    >
      {children}
    </div>
  );
}

// Staggered container for multiple items
interface ScrollRevealStaggerProps {
  children: ReactNode;
  className?: string;
}

export function ScrollRevealStagger({
  children,
  className = "",
}: ScrollRevealStaggerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0,
        rootMargin: "-100px",
      }
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
    <div ref={ref} className={className} data-visible={isVisible}>
      {children}
    </div>
  );
}

interface ScrollRevealStaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function ScrollRevealStaggerItem({
  children,
  className = "",
}: ScrollRevealStaggerItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = ref.current?.closest("[data-visible]");
    if (!parent) return;

    const observer = new MutationObserver(() => {
      const isParentVisible = parent.getAttribute("data-visible") === "true";
      if (isParentVisible) {
        // Calculate stagger delay based on position in parent
        const siblings = Array.from(parent.children);
        const index = siblings.indexOf(ref.current!);
        const delay = index * 150; // 150ms stagger

        setTimeout(() => {
          setIsVisible(true);
        }, delay);
      }
    });

    observer.observe(parent, {
      attributes: true,
      attributeFilter: ["data-visible"],
    });

    // Check initial state
    if (parent.getAttribute("data-visible") === "true") {
      const siblings = Array.from(parent.children);
      const index = siblings.indexOf(ref.current!);
      const delay = index * 150;
      setTimeout(() => {
        setIsVisible(true);
      }, delay);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
        transitionDuration: "0.7s",
        transitionTimingFunction: "cubic-bezier(0.25, 0.4, 0.25, 1)",
      }}
    >
      {children}
    </div>
  );
}
