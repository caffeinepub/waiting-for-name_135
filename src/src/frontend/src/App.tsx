import { useState, FormEvent } from "react";
import { ParticleCanvas } from "./components/ParticleCanvas";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useSubmitReview } from "./hooks/useQueries";
import { ExamTarget } from "./backend.d";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import HolographicCard from "@/components/ui/holographic-card";
import { Toaster, toast } from "sonner";
import {
  Focus,
  Shield,
  BarChart3,
  Users,
  MousePointer2,
  Menu,
  CheckCircle2,
  Sparkles,
  Brain,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";

// Reusable reveal section wrapper
function RevealSection({ 
  children, 
  className = "", 
  id 
}: { 
  children: React.ReactNode; 
  className?: string;
  id?: string;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`${className} ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      {children}
    </section>
  );
}

// Navigation
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="font-bold text-accent-foreground text-lg">F</span>
          </div>
          <span className="text-card-foreground font-semibold tracking-wide text-xl hidden sm:inline">Focus</span>
        </div>

        <div className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
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

        <button className="text-muted-foreground hover:text-foreground transition-colors md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <ParticleCanvas />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-[0.25em] uppercase text-center gradient-heading animate-fade-in-up">
              LAUNCHING SOON 🚀
            </h2>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-heading tracking-tight font-display leading-tight">
            Take The Oath,
            <br />
            <span className="gradient-heading-light">
              Own Your Time
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            A structured productivity platform built specifically for JEE & NEET aspirants who are serious about
            eliminating distraction and building measurable consistency.
          </p>

          <div className="pt-8 pointer-events-auto flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-6 bg-card-foreground text-background rounded-full font-bold tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(229,231,235,0.15)] transition-all text-base"
            >
              Join Early Access
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 border-2 border-white/20 text-foreground bg-transparent rounded-full font-bold tracking-wide hover:bg-white/5 hover:border-white/30 hover:scale-105 transition-all text-base"
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
    <RevealSection id="problem" className="relative py-40 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 gradient-heading">
            Distraction Is Not a Motivation Problem.
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-8 gradient-heading">
            It's a System Problem.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Every year, lakhs of JEE & NEET aspirants start their preparation with determination. But within weeks, the
            result is lost time, broken consistency, and mental burnout.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <HolographicCard>
            <Card className="bg-card/80 border-white/5 backdrop-blur-sm hover:border-white/10 transition-all h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold gradient-heading flex items-start gap-3">
                  <span className="text-3xl">🌐</span>
                  <div>
                    ONLINE DISTRACTIONS
                    <p className="text-sm font-normal text-muted-foreground mt-1">(Digital Overload Zone)</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/90 italic">
                  "I'll just watch YouTube for 10 minutes and then study."
                </p>
                <ul className="space-y-3 text-foreground/70">
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
                <p className="text-foreground font-medium pt-2">
                  10 minutes quietly turn into 2 hours. Not because you are weak. But because these platforms are
                  designed to capture and retain your attention.
                </p>
              </CardContent>
            </Card>
          </HolographicCard>

          <HolographicCard>
            <Card className="bg-card/80 border-white/5 backdrop-blur-sm hover:border-white/10 transition-all h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold gradient-heading flex items-start gap-3">
                  <span className="text-3xl">🏫</span>
                  <div>
                    OFFLINE DISTRACTIONS
                    <p className="text-sm font-normal text-muted-foreground mt-1">(Real-World Focus Killers)</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/90 italic">
                  "Even if you delete social media…"
                </p>
                <ul className="space-y-3 text-foreground/70">
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
                <p className="text-foreground font-medium pt-2">
                  Offline chaos silently destroys long-term consistency.
                </p>
              </CardContent>
            </Card>
          </HolographicCard>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <HolographicCard>
            <Card className="bg-destructive/10 border-destructive/30 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold gradient-heading flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  The Real Issue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 mb-4">Students don't lack ambition. They lack:</p>
                <ul className="space-y-2 text-foreground/70 mb-4">
                  <li>• Focus protection</li>
                  <li>• Structured monitoring</li>
                  <li>• Accountability</li>
                  <li>• Performance visibility</li>
                </ul>
                <p className="gradient-heading-light font-semibold text-lg">
                  Motivation fades. Structure sustains.
                </p>
              </CardContent>
            </Card>
          </HolographicCard>

          <HolographicCard>
            <Card className="bg-card/80 border-white/5 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold gradient-heading flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  Why Current Solutions Fail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 mb-4">Most productivity apps:</p>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Are generic study timers</li>
                  <li>• Don't understand competitive exam pressure</li>
                  <li>• Ignore psychological triggers</li>
                  <li>• Don't address real-world distractions</li>
                </ul>
                <p className="text-foreground font-medium pt-4">
                  Competitive exam preparation requires a system built specifically for aspirants.
                </p>
              </CardContent>
            </Card>
          </HolographicCard>
        </div>
      </div>
    </RevealSection>
  );
}

// Why This Platform Exists Section
function WhySection() {
  return (
    <RevealSection className="relative py-40 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-12 gradient-heading">
          Why This Platform Exists
        </h2>

        <div className="space-y-8 text-left text-foreground/80 text-lg md:text-xl leading-relaxed">
          <p>
            We noticed something simple:
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-left gradient-heading py-6">
            Students don't fail because they don't want success. They fail because they don't have a system strong enough to protect their focus.
          </h3>
          <p>
            This platform is built to create that system.
          </p>
          <div className="text-center py-8">
            <p className="text-muted-foreground">Not a motivational app.</p>
            <p className="text-muted-foreground">Not just a timer.</p>
            <h3 className="text-xl md:text-2xl font-bold text-center gradient-heading mt-6">
              A behavioral control + performance tracking ecosystem designed for serious aspirants.
            </h3>
          </div>
        </div>
      </div>
    </RevealSection>
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
    <RevealSection id="solution" className="relative py-40 px-4 bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 gradient-heading">
            How We Solve It
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <HolographicCard key={index}>
                <Card
                  className="bg-card/80 border-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-card/90 transition-all group h-full"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-colors">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold gradient-heading mb-2">{feature.title}</CardTitle>
                        <CardDescription className="text-muted-foreground text-base">{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground/70">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </HolographicCard>
            );
          })}
        </div>
      </div>
    </RevealSection>
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
    <RevealSection id="vision" className="relative py-40 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-8 gradient-heading">
            Future Vision
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            This is not just an app. It's the foundation of a focused preparation ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {futureFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <HolographicCard key={index}>
                <Card
                  className="bg-card/80 border-white/5 backdrop-blur-sm hover:border-white/20 transition-all text-center p-8 h-full"
                >
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-foreground/90 font-medium">{feature.text}</p>
                </Card>
              </HolographicCard>
            );
          })}
        </div>

        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold text-center gradient-heading">
            We aim to build the most serious productivity platform for competitive exam aspirants in India.
          </h2>
        </div>
      </div>
    </RevealSection>
  );
}

// Who Is This For Section
function WhoIsThisForSection() {
  return (
    <RevealSection className="relative py-40 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center gradient-heading mb-16">
          Who Is This For?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <HolographicCard>
            <Card className="bg-card/80 border-accent/20 backdrop-blur-sm hover:border-accent/40 transition-all p-8 h-full">
              <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
              <p className="text-foreground text-xl font-semibold">JEE Aspirants</p>
            </Card>
          </HolographicCard>
          <HolographicCard>
            <Card className="bg-card/80 border-accent/20 backdrop-blur-sm hover:border-accent/40 transition-all p-8 h-full">
              <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
              <p className="text-foreground text-xl font-semibold">NEET Aspirants</p>
            </Card>
          </HolographicCard>
          <HolographicCard>
            <Card className="bg-card/80 border-accent/20 backdrop-blur-sm hover:border-accent/40 transition-all p-8 h-full">
              <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
              <p className="text-foreground text-xl font-semibold">Students struggling with consistency</p>
            </Card>
          </HolographicCard>
          <HolographicCard>
            <Card className="bg-card/80 border-accent/20 backdrop-blur-sm hover:border-accent/40 transition-all p-8 h-full">
              <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
              <p className="text-foreground text-xl font-semibold">Serious competitors preparing for 1–2 year cycles</p>
            </Card>
          </HolographicCard>
        </div>

        <div className="text-center bg-destructive/10 border border-destructive/30 rounded-xl p-10">
          <p className="text-foreground text-xl md:text-2xl font-bold">
            If you're not serious about your preparation,
            <br />
            <span className="text-destructive">this platform is not for you.</span>
          </p>
        </div>
      </div>
    </RevealSection>
  );
}

// Early Access Section
function EarlyAccessSection() {
  return (
    <RevealSection className="relative py-40 px-4 bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-8 gradient-heading">
          Early Access Community
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl mb-12">
          We're currently building this with selected early users.
        </p>

        <div className="bg-card/80 border border-white/5 rounded-xl p-10 mb-12">
          <p className="text-foreground text-xl md:text-2xl mb-8">If you want to:</p>
          <ul className="space-y-4 text-foreground/80 text-left max-w-md mx-auto text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 shrink-0" />
              Test early features
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 shrink-0" />
              Give direct feedback
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 shrink-0" />
              Shape the future of this platform
            </li>
          </ul>
        </div>

        <Button
          size="lg"
          className="px-12 py-7 bg-accent text-accent-foreground rounded-full font-bold tracking-wide hover:scale-110 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all text-lg"
        >
          Join the Early Access List
        </Button>
      </div>
    </RevealSection>
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
    <RevealSection id="feedback" className="relative py-40 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 gradient-heading">
            Tell Us About Your Preparation Struggles
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">We want real feedback from real aspirants.</p>
          <p className="text-muted-foreground mt-3">
            👉 Your insight helps shape the system.
          </p>
        </div>

        <Card className="bg-card/80 border-white/5 backdrop-blur-sm">
          <CardContent className="pt-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <Label htmlFor="name" className="text-foreground text-base mb-3 block">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-white/10 text-foreground focus:border-accent text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label className="text-foreground text-base mb-4 block">Exam Target</Label>
                <RadioGroup
                  value={formData.examTarget}
                  onValueChange={(value: "jee" | "neet") => setFormData({ ...formData, examTarget: value })}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="jee" id="jee" className="border-white/30 text-accent" />
                    <Label htmlFor="jee" className="text-foreground cursor-pointer text-base">
                      JEE
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="neet" id="neet" className="border-white/30 text-accent" />
                    <Label htmlFor="neet" className="text-foreground cursor-pointer text-base">
                      NEET
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="distraction" className="text-foreground text-base mb-3 block">
                  Biggest Distraction
                </Label>
                <Textarea
                  id="distraction"
                  value={formData.biggestDistraction}
                  onChange={(e) => setFormData({ ...formData, biggestDistraction: e.target.value })}
                  className="bg-background/50 border-white/10 text-foreground focus:border-accent min-h-[100px] text-base"
                  placeholder="What distracts you the most during study time?"
                />
              </div>

              <div>
                <Label htmlFor="studyHours" className="text-foreground text-base mb-3 block">
                  Average Study Hours (per day)
                </Label>
                <Input
                  id="studyHours"
                  type="number"
                  min="0"
                  max="24"
                  value={formData.averageStudyHours}
                  onChange={(e) => setFormData({ ...formData, averageStudyHours: e.target.value })}
                  className="bg-background/50 border-white/10 text-foreground focus:border-accent text-base"
                  placeholder="e.g., 6"
                />
              </div>

              <div>
                <Label htmlFor="neededFeature" className="text-foreground text-base mb-3 block">
                  What Feature You Need Most
                </Label>
                <Textarea
                  id="neededFeature"
                  value={formData.neededFeature}
                  onChange={(e) => setFormData({ ...formData, neededFeature: e.target.value })}
                  className="bg-background/50 border-white/10 text-foreground focus:border-accent min-h-[100px] text-base"
                  placeholder="What would help you stay focused the most?"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="w-full py-7 bg-accent text-accent-foreground rounded-full font-bold tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all text-base"
              >
                {isPending ? "Submitting..." : "Submit & Join the Focus Movement"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </RevealSection>
  );
}

// Closing Section
function ClosingSection() {
  return (
    <RevealSection className="relative py-40 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-16 space-y-6">
          <p className="text-muted-foreground text-2xl md:text-3xl">Discipline is hard.</p>
          <p className="text-muted-foreground text-2xl md:text-3xl">But chaos is harder.</p>
        </div>

        <p className="text-foreground text-2xl md:text-3xl font-semibold mb-10 leading-relaxed">
          If you're serious about cracking JEE or NEET,
          <br />
          you need more than motivation.
        </p>

        <h2 className="text-3xl md:text-5xl font-bold font-display text-center gradient-heading mb-16">
          You need a system.
        </h2>

        <p className="text-muted-foreground text-xl md:text-2xl mb-16">And we're building it.</p>

        <Button
          size="lg"
          className="px-12 py-7 bg-card-foreground text-background rounded-full font-bold tracking-wide hover:scale-110 hover:shadow-[0_0_30px_rgba(229,231,235,0.15)] transition-all text-lg"
        >
          Join Early Access
        </Button>
      </div>
    </RevealSection>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-4 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
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
    <div className="dark min-h-screen bg-background text-foreground">
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
      <Footer />
    </div>
  );
}
