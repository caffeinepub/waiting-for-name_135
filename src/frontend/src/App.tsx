import { useState, FormEvent } from "react";
import { ParticleCanvas } from "./components/ParticleCanvas";
import { useSubmitReview } from "./hooks/useQueries";
import { ExamTarget } from "./backend.d";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedText } from "@/components/ui/animated-shiny-text";
import TextBlockAnimation from "@/components/ui/text-block-animation";
import { HighlightCard } from "@/components/ui/highlight-card";
import { HoverTextGlow } from "@/components/ui/hover-text-glow";
import { DrawLineText } from "@/components/ui/draw-line-text";
import LetterHoverEffect from "@/components/ui/scale-letter";
import { SocialLinks } from "@/components/ui/social-links";
import { BGPattern } from "@/components/ui/bg-pattern";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealStaggerItem } from "@/components/ScrollReveal";
import { Toaster, toast } from "sonner";
import {
  Focus,
  Shield,
  BarChart3,
  Users,
  MousePointer2,
  Menu,
  X,
  CheckCircle2,
  Sparkles,
  Brain,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";

// Navigation
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 py-2 md:py-3">
          <div className="flex items-center h-12 sm:h-14 md:h-16">
            <LetterHoverEffect 
              text="OATH - Own Your Time" 
              className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wide"
            />
          </div>

          <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium text-muted-foreground">
            <a href="#problem" className="hover:text-foreground transition-colors">
              Problem
            </a>
            <a href="#solution" className="hover:text-foreground transition-colors">
              Solution
            </a>
            <a href="#vision" className="hover:text-foreground transition-colors">
              Vision
            </a>
            <a href="#feedback" className="hover:text-foreground transition-colors">
              Feedback
            </a>
          </div>

          <button 
            className="text-muted-foreground hover:text-foreground transition-colors md:hidden z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-center px-6">
            <a 
              href="#problem" 
              className="text-2xl font-semibold text-foreground hover:text-accent transition-colors"
              onClick={handleLinkClick}
            >
              Problem
            </a>
            <a 
              href="#solution" 
              className="text-2xl font-semibold text-foreground hover:text-accent transition-colors"
              onClick={handleLinkClick}
            >
              Solution
            </a>
            <a 
              href="#vision" 
              className="text-2xl font-semibold text-foreground hover:text-accent transition-colors"
              onClick={handleLinkClick}
            >
              Vision
            </a>
            <a 
              href="#feedback" 
              className="text-2xl font-semibold text-foreground hover:text-accent transition-colors"
              onClick={handleLinkClick}
            >
              Feedback
            </a>
          </div>
        </div>
      )}
    </>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <ParticleCanvas />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl w-full text-center space-y-6 sm:space-y-8">
          <div className="mb-6 sm:mb-8">
            <TextBlockAnimation
              blockColor="#22d3ee"
              animateOnScroll={false}
              delay={0.3}
              duration={0.8}
              stagger={0.05}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-[0.2em] sm:tracking-[0.25em] uppercase text-center text-[#f8fafc] break-words">
                LAUNCHING SOON 🚀
              </h2>
            </TextBlockAnimation>
          </div>

          <div className="flex flex-col items-center justify-center mb-6 sm:mb-8">
            <DrawLineText
              text="TAKE THE OATH,"
              fontSize={48}
              strokeWidth={2}
              color="#F8FAFC"
              oneByOne={true}
              afterFill={true}
              letterSpacing={2}
              wordSpacing={20}
              className="font-black tracking-tight mb-4 md:hidden"
            />
            <DrawLineText
              text="TAKE THE OATH,"
              fontSize={64}
              strokeWidth={2}
              color="#F8FAFC"
              oneByOne={true}
              afterFill={true}
              letterSpacing={2}
              wordSpacing={20}
              className="font-black tracking-tight mb-4 hidden md:block lg:hidden"
            />
            <DrawLineText
              text="TAKE THE OATH,"
              fontSize={80}
              strokeWidth={2}
              color="#F8FAFC"
              oneByOne={true}
              afterFill={true}
              letterSpacing={3}
              wordSpacing={24}
              className="font-black tracking-tight mb-6 hidden lg:block"
            />
            <DrawLineText
              text="OWN YOUR TIME"
              fontSize={48}
              strokeWidth={2}
              color="#F8FAFC"
              oneByOne={true}
              afterFill={true}
              letterSpacing={2}
              wordSpacing={20}
              className="font-black tracking-tight md:hidden"
            />
            <DrawLineText
              text="OWN YOUR TIME"
              fontSize={64}
              strokeWidth={2}
              color="#F8FAFC"
              oneByOne={true}
              afterFill={true}
              letterSpacing={2}
              wordSpacing={20}
              className="font-black tracking-tight hidden md:block lg:hidden"
            />
            <DrawLineText
              text="OWN YOUR TIME"
              fontSize={80}
              strokeWidth={2}
              color="#F8FAFC"
              oneByOne={true}
              afterFill={true}
              letterSpacing={3}
              wordSpacing={24}
              className="font-black tracking-tight hidden lg:block"
            />
          </div>

          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed mt-6 sm:mt-8 break-words">
            A structured productivity platform built specifically for JEE & NEET aspirants who are serious about
            eliminating distraction and building measurable consistency.
          </p>

          <div className="pt-6 sm:pt-8 pointer-events-auto flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-6 sm:px-8 py-5 sm:py-6 bg-card-foreground text-background rounded-full font-bold tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(229,231,235,0.15)] transition-all text-sm sm:text-base transform-gpu"
            >
              Join Early Access
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 sm:px-8 py-5 sm:py-6 border-2 border-white/20 text-foreground bg-transparent rounded-full font-bold tracking-wide hover:bg-white/5 hover:border-white/30 hover:scale-105 transition-all text-sm sm:text-base transform-gpu"
            >
              Request Beta Invite
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-pulse pointer-events-none z-10">
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Interact</span>
        <MousePointer2 size={16} />
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  return (
    <section id="problem" className="relative py-12 sm:py-16 md:py-20 lg:py-40 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <BackgroundBeams />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-12 sm:mb-16 md:mb-20">
          <AnimatedText 
            text="Distraction Is Not a Motivation Problem."
            gradientColors="linear-gradient(90deg, #9CA3AF, #F8FAFC, #1F2937, #F8FAFC, #9CA3AF)"
            gradientAnimationDuration={5}
            hoverEffect={true}
            textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 sm:mb-6 break-words leading-tight"
          />
          <AnimatedText 
            text="It's a System Problem."
            gradientColors="linear-gradient(90deg, #9CA3AF, #22d3ee, #F8FAFC, #22d3ee, #9CA3AF)"
            gradientAnimationDuration={4}
            hoverEffect={true}
            textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 sm:mb-8 break-words leading-tight"
          />
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed break-words">
            Every year, lakhs of JEE & NEET aspirants start their preparation with determination. But within weeks, the
            result is lost time, broken consistency, and mental burnout.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <ScrollRevealStaggerItem>
            <HighlightCard>
              <Card className="bg-card/80 border-white/5 backdrop-blur-sm hover:border-white/10 transition-all transform-gpu">
                <CardHeader className="p-5 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl font-bold gradient-heading flex items-start gap-3 break-words leading-snug">
                    <span className="text-2xl sm:text-3xl">🌐</span>
                    <div>
                      ONLINE DISTRACTIONS
                      <p className="text-xs sm:text-sm font-normal text-muted-foreground mt-1">(Digital Overload Zone)</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-5 sm:p-6">
                  <p className="text-foreground/90 italic text-sm sm:text-base break-words">
                    "I'll just watch YouTube for 10 minutes and then study."
                  </p>
                  <ul className="space-y-2 sm:space-y-3 text-foreground/70 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      Endless Instagram Reels
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      "Just one more game"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      Web series binge sessions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      Random chatting
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      Non-educational YouTube rabbit holes
                    </li>
                  </ul>
                  <p className="text-foreground font-medium pt-2 text-sm sm:text-base break-words">
                    10 minutes quietly turn into 2 hours. Not because you are weak. But because these platforms are
                    designed to capture and retain your attention.
                  </p>
                </CardContent>
              </Card>
            </HighlightCard>
          </ScrollRevealStaggerItem>

          <ScrollRevealStaggerItem>
            <HighlightCard>
              <Card className="bg-card/80 border-white/5 backdrop-blur-sm hover:border-white/10 transition-all transform-gpu">
                <CardHeader className="p-5 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl font-bold gradient-heading flex items-start gap-3 break-words leading-snug">
                    <span className="text-2xl sm:text-3xl">🏫</span>
                    <div>
                      OFFLINE DISTRACTIONS
                      <p className="text-xs sm:text-sm font-normal text-muted-foreground mt-1">(Real-World Focus Killers)</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-5 sm:p-6">
                  <p className="text-foreground/90 italic text-sm sm:text-base break-words">
                    "Even if you delete social media…"
                  </p>
                  <ul className="space-y-2 sm:space-y-3 text-foreground/70 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      Skipping coaching classes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      Irregular sleep cycles
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      Emotional ups and downs in relationships
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      Casual timepass with friends
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      No structured daily accountability
                    </li>
                  </ul>
                  <p className="text-foreground font-medium pt-2 text-sm sm:text-base break-words">
                    Offline chaos silently destroys long-term consistency.
                  </p>
                </CardContent>
              </Card>
            </HighlightCard>
          </ScrollRevealStaggerItem>
        </ScrollRevealStagger>

        <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <ScrollRevealStaggerItem>
            <HighlightCard>
              <Card className="bg-destructive/10 border-destructive/30 backdrop-blur-sm transform-gpu">
                <CardHeader className="p-5 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold gradient-heading flex items-start gap-3 break-words leading-snug">
                    <span className="text-xl sm:text-2xl">⚠️</span>
                    The Real Issue
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 sm:p-6">
                  <p className="text-foreground/90 mb-3 sm:mb-4 text-sm sm:text-base break-words">Students don't lack ambition. They lack:</p>
                  <ul className="space-y-2 text-foreground/70 mb-3 sm:mb-4 text-sm sm:text-base">
                    <li>• Focus protection</li>
                    <li>• Structured monitoring</li>
                    <li>• Accountability</li>
                    <li>• Performance visibility</li>
                  </ul>
                  <p className="gradient-heading-light font-semibold text-base sm:text-lg break-words">
                    Motivation fades. Structure sustains.
                  </p>
                </CardContent>
              </Card>
            </HighlightCard>
          </ScrollRevealStaggerItem>

          <ScrollRevealStaggerItem>
            <HighlightCard>
              <Card className="bg-card/80 border-white/5 backdrop-blur-sm transform-gpu">
                <CardHeader className="p-5 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold gradient-heading flex items-start gap-3 break-words leading-snug">
                    <span className="text-xl sm:text-2xl">💡</span>
                    Why Current Solutions Fail
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 sm:p-6">
                  <p className="text-foreground/90 mb-3 sm:mb-4 text-sm sm:text-base break-words">Most productivity apps:</p>
                  <ul className="space-y-2 text-foreground/70 text-sm sm:text-base">
                    <li>• Are generic study timers</li>
                    <li>• Don't understand competitive exam pressure</li>
                    <li>• Ignore psychological triggers</li>
                    <li>• Don't address real-world distractions</li>
                  </ul>
                  <p className="text-foreground font-medium pt-3 sm:pt-4 text-sm sm:text-base break-words">
                    Competitive exam preparation requires a system built specifically for aspirants.
                  </p>
                </CardContent>
              </Card>
            </HighlightCard>
          </ScrollRevealStaggerItem>
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

// Why This Platform Exists Section
function WhySection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-40 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <BackgroundBeams />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <AnimatedText 
            text="Why This Platform Exists"
            gradientColors="linear-gradient(90deg, #9CA3AF, #F8FAFC, #1F2937, #F8FAFC, #9CA3AF)"
            gradientAnimationDuration={5}
            hoverEffect={true}
            textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-8 sm:mb-12 break-words leading-tight"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-6 sm:space-y-8 text-left text-foreground/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            <p className="break-words">
              We noticed something simple:
            </p>
            <AnimatedText 
              text="Students don't fail because they don't want success. They fail because they don't have a system strong enough to protect their focus."
              gradientColors="linear-gradient(90deg, #9CA3AF, #22d3ee, #F8FAFC, #22d3ee, #9CA3AF)"
              gradientAnimationDuration={4}
              hoverEffect={true}
              className="py-4 sm:py-6"
              textClassName="text-lg sm:text-xl md:text-2xl font-semibold text-left break-words leading-snug"
            />
            <p className="break-words">
              This platform is built to create that system.
            </p>
            <div className="text-center py-6 sm:py-8">
              <p className="text-muted-foreground text-sm sm:text-base break-words">Not a motivational app.</p>
              <p className="text-muted-foreground text-sm sm:text-base break-words">Not just a timer.</p>
              <AnimatedText 
                text="A behavioral control + performance tracking ecosystem designed for serious aspirants."
                gradientColors="linear-gradient(90deg, #9CA3AF, #F8FAFC, #22d3ee, #F8FAFC, #9CA3AF)"
                gradientAnimationDuration={3}
                hoverEffect={true}
                className="mt-4 sm:mt-6"
                textClassName="text-lg sm:text-xl md:text-2xl font-bold text-center break-words leading-snug"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Solution Section
function SolutionSection() {
  const features = [
    {
      icon: Focus,
      title: "Smart Focus Engine",
      description: "Deep-work sessions with real-time tracking and session validation.",
      bullets: ["No fake timers", "No passive tracking", "Only measurable effort"],
    },
    {
      icon: Shield,
      title: "Distraction Control Layer",
      description: "Designed to reduce impulsive switching.",
      bullets: [
        "Social media restriction during focus sessions",
        "Controlled YouTube filtering",
        "Focus-based app permissions",
      ],
    },
    {
      icon: BarChart3,
      title: "Performance Intelligence Dashboard",
      description: "Data-driven preparation.",
      bullets: ["Daily focus hours", "Weekly consistency graph", "Streak tracking", "Subject-wise analytics"],
    },
    {
      icon: Users,
      title: "Accountability System (Optional)",
      description: "Supportive. Not controlling.",
      bullets: [
        "Generate performance summaries",
        "Track consistency gaps",
        "Allow optional guardian/mentor reporting",
      ],
    },
  ];

  return (
    <section id="solution" className="relative py-12 sm:py-16 md:py-20 lg:py-40 px-4 sm:px-6 md:px-8 bg-background overflow-hidden">
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-12 sm:mb-16 md:mb-20">
          <AnimatedText 
            text="How We Solve It"
            gradientColors="linear-gradient(90deg, #9CA3AF, #F8FAFC, #1F2937, #F8FAFC, #9CA3AF)"
            gradientAnimationDuration={5}
            hoverEffect={true}
            textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 sm:mb-6 break-words leading-tight"
          />
        </ScrollReveal>

        <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollRevealStaggerItem key={index}>
                <HighlightCard>
                  <Card className="bg-card/80 border-white/5 backdrop-blur-sm hover:border-white/20 md:hover:bg-card/90 transition-all transform-gpu">
                    <CardHeader className="p-5 sm:p-6 md:p-8">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 bg-accent/20 rounded-xl md:hover:bg-accent/30 transition-colors">
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-xl sm:text-2xl font-bold gradient-heading mb-2 break-words leading-snug">{feature.title}</CardTitle>
                          <CardDescription className="text-muted-foreground text-sm sm:text-base break-words">{feature.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-5 sm:p-6 md:p-8">
                      <ul className="space-y-2">
                        {feature.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2 text-foreground/70 text-sm sm:text-base break-words">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </HighlightCard>
              </ScrollRevealStaggerItem>
            );
          })}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

// Future Vision Section
function FutureVisionSection() {
  const futureFeatures = [
    { icon: Brain, text: "AI-based distraction pattern detection" },
    { icon: Zap, text: "Predictive burnout alerts" },
    { icon: Target, text: "Adaptive study planning" },
    { icon: Users, text: "Peer accountability rooms" },
    { icon: TrendingUp, text: "Mock test performance integration" },
    { icon: Sparkles, text: "Competitive ranking system" },
  ];

  return (
    <section id="vision" className="relative py-12 sm:py-16 md:py-20 lg:py-40 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <BackgroundBeams />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-12 sm:mb-16 md:mb-20">
          <AnimatedText 
            text="Future Vision"
            gradientColors="linear-gradient(90deg, #9CA3AF, #F8FAFC, #22d3ee, #F8FAFC, #9CA3AF)"
            gradientAnimationDuration={5}
            hoverEffect={true}
            textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 sm:mb-8 break-words leading-tight"
          />
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto break-words">
            This is not just an app. It's the foundation of a focused preparation ecosystem.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {futureFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollRevealStaggerItem key={index}>
                <HighlightCard>
                  <Card className="bg-card/80 border-white/5 backdrop-blur-sm md:hover:border-white/20 transition-all text-center p-6 sm:p-8 transform-gpu">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent mx-auto mb-3 sm:mb-4" />
                    <p className="text-foreground/90 font-medium text-sm sm:text-base break-words">{feature.text}</p>
                  </Card>
                </HighlightCard>
              </ScrollRevealStaggerItem>
            );
          })}
        </ScrollRevealStagger>

        <ScrollReveal delay={0.3} className="text-center">
          <AnimatedText 
            text="We aim to build the most serious productivity platform for competitive exam aspirants in India."
            gradientColors="linear-gradient(90deg, #9CA3AF, #22d3ee, #F8FAFC, #22d3ee, #9CA3AF)"
            gradientAnimationDuration={4}
            hoverEffect={true}
            textClassName="text-lg sm:text-xl md:text-2xl font-bold text-center break-words leading-snug"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

// Who Is This For Section
function WhoIsThisForSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-40 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <BackgroundBeams />
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <AnimatedText 
            text="Who Is This For?"
            gradientColors="linear-gradient(90deg, #9CA3AF, #F8FAFC, #1F2937, #F8FAFC, #9CA3AF)"
            gradientAnimationDuration={5}
            hoverEffect={true}
            className="mb-12 sm:mb-16"
            textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center break-words leading-tight"
          />
        </ScrollReveal>

        <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <ScrollRevealStaggerItem>
            <HighlightCard>
              <Card className="bg-card/80 border-accent/20 backdrop-blur-sm md:hover:border-accent/40 transition-all p-6 sm:p-8 transform-gpu">
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-3 sm:mb-4" />
                <p className="text-foreground text-lg sm:text-xl font-semibold break-words">JEE Aspirants</p>
              </Card>
            </HighlightCard>
          </ScrollRevealStaggerItem>
          <ScrollRevealStaggerItem>
            <HighlightCard>
              <Card className="bg-card/80 border-accent/20 backdrop-blur-sm md:hover:border-accent/40 transition-all p-6 sm:p-8 transform-gpu">
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-3 sm:mb-4" />
                <p className="text-foreground text-lg sm:text-xl font-semibold break-words">NEET Aspirants</p>
              </Card>
            </HighlightCard>
          </ScrollRevealStaggerItem>
          <ScrollRevealStaggerItem>
            <HighlightCard>
              <Card className="bg-card/80 border-accent/20 backdrop-blur-sm md:hover:border-accent/40 transition-all p-6 sm:p-8 transform-gpu">
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-3 sm:mb-4" />
                <p className="text-foreground text-lg sm:text-xl font-semibold break-words">Students struggling with consistency</p>
              </Card>
            </HighlightCard>
          </ScrollRevealStaggerItem>
          <ScrollRevealStaggerItem>
            <HighlightCard>
              <Card className="bg-card/80 border-accent/20 backdrop-blur-sm md:hover:border-accent/40 transition-all p-6 sm:p-8 transform-gpu">
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-3 sm:mb-4" />
                <p className="text-foreground text-lg sm:text-xl font-semibold break-words">Serious competitors preparing for 1–2 year cycles</p>
              </Card>
            </HighlightCard>
          </ScrollRevealStaggerItem>
        </ScrollRevealStagger>

        <ScrollReveal delay={0.3}>
          <div className="text-center bg-destructive/10 border border-destructive/30 rounded-xl p-8 sm:p-10">
            <p className="text-foreground text-lg sm:text-xl md:text-2xl font-bold break-words leading-relaxed">
              If you're not serious about your preparation,
              <br />
              <span className="text-destructive">this platform is not for you.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Early Access Section
function EarlyAccessSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-40 px-4 sm:px-6 md:px-8 bg-background overflow-hidden">
      <BackgroundBeams />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <AnimatedText 
            text="Early Access Community"
            gradientColors="linear-gradient(90deg, #9CA3AF, #22d3ee, #F8FAFC, #22d3ee, #9CA3AF)"
            gradientAnimationDuration={5}
            hoverEffect={true}
            textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 sm:mb-8 break-words leading-tight"
          />
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 break-words">
            We're currently building this with selected early users.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <HighlightCard>
            <div className="bg-card/80 border border-white/5 rounded-xl p-8 sm:p-10 mb-8 sm:mb-12">
              <p className="text-foreground text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 break-words">If you want to:</p>
              <ul className="space-y-3 sm:space-y-4 text-foreground/80 text-left max-w-md mx-auto text-base sm:text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent mt-0.5 shrink-0" />
                  <span className="break-words">Test early features</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent mt-0.5 shrink-0" />
                  <span className="break-words">Give direct feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent mt-0.5 shrink-0" />
                  <span className="break-words">Shape the future of this platform</span>
                </li>
              </ul>
            </div>
          </HighlightCard>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <Button
            size="lg"
            className="px-8 sm:px-12 py-5 sm:py-7 bg-accent text-accent-foreground rounded-full font-bold tracking-wide hover:scale-110 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all text-base sm:text-lg transform-gpu"
          >
            Join the Early Access List
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Review Form Section
function ReviewFormSection() {
  const { mutate: submitReview, isPending } = useSubmitReview();
  const [formData, setFormData] = useState({
    name: "",
    examTarget: "jee" as "jee" | "neet",
    biggestDistraction: "",
    averageStudyHours: "",
    neededFeature: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.biggestDistraction || !formData.averageStudyHours || !formData.neededFeature) {
      toast.error("Please fill in all fields");
      return;
    }

    const hours = parseInt(formData.averageStudyHours);
    if (isNaN(hours) || hours < 0 || hours > 24) {
      toast.error("Please enter valid study hours (0-24)");
      return;
    }

    submitReview(
      {
        name: formData.name,
        examTarget: formData.examTarget === "jee" ? ExamTarget.jee : ExamTarget.neet,
        biggestDistraction: formData.biggestDistraction,
        averageStudyHours: BigInt(hours),
        neededFeature: formData.neededFeature,
      },
      {
        onSuccess: () => {
          toast.success("Thank you for your feedback! We'll be in touch soon.");
          setFormData({
            name: "",
            examTarget: "jee",
            biggestDistraction: "",
            averageStudyHours: "",
            neededFeature: "",
          });
        },
        onError: (error) => {
          toast.error("Failed to submit. Please try again.");
          console.error("Submit error:", error);
        },
      }
    );
  };

  return (
    <section id="feedback" className="relative py-12 sm:py-16 md:py-20 lg:py-40 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <BackgroundBeams />
      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <AnimatedText 
            text="Tell Us About Your Preparation Struggles"
            gradientColors="linear-gradient(90deg, #9CA3AF, #F8FAFC, #1F2937, #F8FAFC, #9CA3AF)"
            gradientAnimationDuration={5}
            hoverEffect={true}
            textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 sm:mb-6 break-words leading-tight"
          />
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl break-words">We want real feedback from real aspirants.</p>
          <p className="text-muted-foreground mt-2 sm:mt-3 text-sm sm:text-base">
            👉 Your insight helps shape the system.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <HighlightCard>
            <Card className="bg-card/80 border-white/5 backdrop-blur-sm">
              <CardContent className="pt-6 sm:pt-8 p-5 sm:p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div>
                    <Label htmlFor="name" className="text-foreground text-sm sm:text-base mb-2 sm:mb-3 block">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-white/10 text-foreground focus:border-accent text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <Label className="text-foreground text-sm sm:text-base mb-3 sm:mb-4 block">Exam Target</Label>
                    <RadioGroup
                      value={formData.examTarget}
                      onValueChange={(value: "jee" | "neet") => setFormData({ ...formData, examTarget: value })}
                      className="flex gap-4 sm:gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="jee" id="jee" className="border-white/30 text-accent" />
                        <Label htmlFor="jee" className="text-foreground cursor-pointer text-sm sm:text-base">
                          JEE
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="neet" id="neet" className="border-white/30 text-accent" />
                        <Label htmlFor="neet" className="text-foreground cursor-pointer text-sm sm:text-base">
                          NEET
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="distraction" className="text-foreground text-sm sm:text-base mb-2 sm:mb-3 block">
                      Biggest Distraction
                    </Label>
                    <Textarea
                      id="distraction"
                      value={formData.biggestDistraction}
                      onChange={(e) => setFormData({ ...formData, biggestDistraction: e.target.value })}
                      className="bg-background/50 border-white/10 text-foreground focus:border-accent min-h-[100px] text-sm sm:text-base"
                      placeholder="What distracts you the most during study time?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="studyHours" className="text-foreground text-sm sm:text-base mb-2 sm:mb-3 block">
                      Average Study Hours (per day)
                    </Label>
                    <Input
                      id="studyHours"
                      type="number"
                      min="0"
                      max="24"
                      value={formData.averageStudyHours}
                      onChange={(e) => setFormData({ ...formData, averageStudyHours: e.target.value })}
                      className="bg-background/50 border-white/10 text-foreground focus:border-accent text-sm sm:text-base"
                      placeholder="e.g., 6"
                    />
                  </div>

                  <div>
                    <Label htmlFor="neededFeature" className="text-foreground text-sm sm:text-base mb-2 sm:mb-3 block">
                      What Feature You Need Most
                    </Label>
                    <Textarea
                      id="neededFeature"
                      value={formData.neededFeature}
                      onChange={(e) => setFormData({ ...formData, neededFeature: e.target.value })}
                      className="bg-background/50 border-white/10 text-foreground focus:border-accent min-h-[100px] text-sm sm:text-base"
                      placeholder="What would help you stay focused the most?"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isPending}
                    className="w-full py-5 sm:py-7 bg-accent text-accent-foreground rounded-full font-bold tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all text-sm sm:text-base transform-gpu"
                  >
                    {isPending ? "Submitting..." : "Submit & Join the Focus Movement"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </HighlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Closing Section
function ClosingSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-40 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <BackgroundBeams />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <div className="mb-12 sm:mb-16 space-y-4 sm:space-y-6">
            <p className="text-muted-foreground text-xl sm:text-2xl md:text-3xl break-words">Discipline is hard.</p>
            <p className="text-muted-foreground text-xl sm:text-2xl md:text-3xl break-words">But chaos is harder.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-foreground text-xl sm:text-2xl md:text-3xl font-semibold mb-8 sm:mb-10 leading-relaxed break-words">
            If you're serious about cracking JEE or NEET,
            <br />
            you need more than motivation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <AnimatedText 
            text="You need a system."
            gradientColors="linear-gradient(90deg, #9CA3AF, #22d3ee, #F8FAFC, #22d3ee, #9CA3AF)"
            gradientAnimationDuration={4}
            hoverEffect={true}
            className="mb-12 sm:mb-16"
            textClassName="text-2xl sm:text-3xl md:text-5xl font-bold font-display text-center break-words leading-tight"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16 break-words">And we're building it.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <Button
            size="lg"
            className="px-8 sm:px-12 py-5 sm:py-7 bg-card-foreground text-background rounded-full font-bold tracking-wide hover:scale-110 hover:shadow-[0_0_30px_rgba(229,231,235,0.15)] transition-all text-base sm:text-lg transform-gpu"
          >
            Join Early Access
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Connect With Us Section
function ConnectWithUsSection() {
  const socials = [
    {
      name: "Instagram",
      image: "https://link-hover-lndev.vercel.app/instagram.png",
      url: "https://www.instagram.com/oath_ownyourtime/"
    },
    {
      name: "Email",
      image: "https://link-hover-lndev.vercel.app/tiktok.png",
      url: "mailto:oathteam.app@gmail.com"
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-8 bg-background overflow-hidden">
      <BGPattern variant="dots" mask="fade-center" fill="#22d3ee20" size={24} />
      <BackgroundBeams />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <AnimatedText 
            text="Connect With Us"
            gradientColors="linear-gradient(90deg, #9CA3AF, #22d3ee, #F8FAFC, #22d3ee, #9CA3AF)"
            gradientAnimationDuration={5}
            hoverEffect={true}
            className="mb-8 sm:mb-12"
            textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center break-words leading-tight"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 break-words">
            Have questions? Want to share feedback? Reach out to us.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <SocialLinks socials={socials} className="justify-center" />
        </ScrollReveal>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground text-xs sm:text-sm break-words">
          © 2026. Built with{" "}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            love using caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster position="top-center" richColors />
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <WhySection />
      <SolutionSection />
      <FutureVisionSection />
      <WhoIsThisForSection />
      <EarlyAccessSection />
      <ReviewFormSection />
      <ClosingSection />
      <ConnectWithUsSection />
      <Footer />
    </div>
  );
}
