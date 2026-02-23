import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef, useEffect, useState } from "react"

// Ensure plugins are registered
gsap.registerPlugin(ScrollTrigger);

export default function TextBlockAnimation({
    children,
    animateOnScroll = true,
    delay = 0,
    blockColor = "#000",
    stagger = 0.1,
    duration = 0.6
}: {
    children: React.ReactNode;
    animateOnScroll?: boolean;
    delay?: number;
    blockColor?: string;
    stagger?: number;
    duration?: number;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [lines, setLines] = useState<string[]>([]);

    // Split text into lines manually
    useEffect(() => {
        if (!containerRef.current) return;
        
        const textContent = containerRef.current.textContent || "";
        // Simple text splitting - split by spaces for words
        // For better line breaking, we'll just use the text as-is
        setLines([textContent]);
    }, [children]);

    useGSAP(() => {
        if (!containerRef.current || lines.length === 0) return;

        const lineElements = containerRef.current.querySelectorAll('.block-line');
        const blocks: Element[] = [];

        lineElements.forEach((line) => {
            const block = line.querySelector('.block-revealer');
            if (block) {
                blocks.push(block);
                // Set initial state of line to invisible
                gsap.set(line.querySelector('.line-text'), { opacity: 0 });
            }
        });

        // Create the Master Timeline
        const tl = gsap.timeline({
            defaults: { ease: "expo.inOut" },
            scrollTrigger: animateOnScroll ? {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
            } : undefined,
            delay: delay
        });

        // Build the Animation Sequence
        // Step A: Scale Block 0 -> 1 (Left to Right)
        tl.to(blocks, {
            scaleX: 1,
            duration: duration,
            stagger: stagger,
            transformOrigin: "left center",
        })
        // Step B: Reveal Text (Instant)
        .set(lineElements, {
            opacity: 1,
            stagger: stagger
        }, `<${duration / 2}`)
        // Step C: Scale Block 1 -> 0 (Left to Right)
        .to(blocks, {
            scaleX: 0,
            duration: duration,
            stagger: stagger,
            transformOrigin: "right center"
        }, `<${duration * 0.4}`);

    }, { 
        scope: containerRef, 
        dependencies: [animateOnScroll, delay, blockColor, stagger, duration, lines] 
    });
    
    return (
        <div ref={containerRef} style={{ position: "relative" }}>
            {lines.map((line, index) => (
                <div 
                    key={index}
                    className="block-line"
                    style={{ 
                        position: "relative", 
                        display: "block", 
                        overflow: "hidden" 
                    }}
                >
                    <span className="line-text">{line}</span>
                    <div 
                        className="block-revealer"
                        style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            backgroundColor: blockColor,
                            zIndex: 2,
                            transform: "scaleX(0)",
                            transformOrigin: "left center",
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
