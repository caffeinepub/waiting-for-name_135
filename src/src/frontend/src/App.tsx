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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="font-bold text-accent-foreground text-lg">F</span>
          </div>
          <span className="text-white font-semibold tracking-wide text-xl hidden sm:inline">Focus</span>
        </div>

        <div className="hidden md:flex space-x-8 text-sm font-medium text-white/70">
          <a href="#problem" className="hover:text-white transition-colors">
            Problem
          </a>
          <a href="#solution" className="hover:text-white transition-colors">
            Solution
          </a>
          <a href="#vision" className="hover:text-white transition-colors">
            Vision
          </a>
          <a href="#feedback" className="hover:text-white transition-colors">
            Feedback
          </a>
        </div>

        <button className="text-white/80 hover:text-white transition-colors md:hidden">
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
            <h2 className="launching-soon-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[0.25em] uppercase">
              LAUNCHING SOON
            </h2>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight font-display leading-tight">
            Take The Oath,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-white">
              Own Your Time
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/70 font-light leading-relaxed">
            A structured productivity platform built specifically for JEE & NEET aspirants who are serious about
            eliminating distraction and building measurable consistency.
          </p>

          <div className="pt-8 pointer-events-auto flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-6 bg-white text-black rounded-full font-bold tracking-wide hover:scale-105 transition-transform text-base"
            >
              Join Early Access
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 border-2 border-white/30 text-white bg-transparent rounded-full font-bold tracking-wide hover:bg-white/10 hover:scale-105 transition-transform text-base"
            >
              Request Beta Invite
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-pulse pointer-events-none z-10">
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Interact</span>
        <MousePointer2 size={16} />
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  return (
    <RevealSection id="problem" className="py-24 px-4 bg-gradient-to-b from-black to-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Distraction Is Not a Motivation Problem.
            <br />
            <span className="text-accent">It's a System Problem.</span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Every year, lakhs of JEE & NEET aspirants start their preparation with determination. But within weeks, the
            result is lost time, broken consistency, and mental burnout.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-accent/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-start gap-3">
                <span className="text-3xl">🌐</span>
                <div>
                  ONLINE DISTRACTIONS
                  <p className="text-sm font-normal text-white/60 mt-1">(Digital Overload Zone)</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/80 italic">
                "I'll just watch YouTube for 10 minutes and then study."
              </p>
              <ul className="space-y-3 text-white/70">
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
              <p className="text-white/90 font-medium pt-2">
                10 minutes quietly turn into 2 hours. Not because you are weak. But because these platforms are
                designed to capture and retain your attention.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-accent/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-start gap-3">
                <span className="text-3xl">🏫</span>
                <div>
                  OFFLINE DISTRACTIONS
                  <p className="text-sm font-normal text-white/60 mt-1">(Real-World Focus Killers)</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/80 italic">
                "Even if you delete social media…"
              </p>
              <ul className="space-y-3 text-white/70">
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
              <p className="text-white/90 font-medium pt-2">
                Offline chaos silently destroys long-term consistency.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-destructive/10 border-destructive/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                The Real Issue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 mb-4">Students don't lack ambition. They lack:</p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• Focus protection</li>
                <li>• Structured monitoring</li>
                <li>• Accountability</li>
                <li>• Performance visibility</li>
              </ul>
              <p className="text-accent font-semibold text-lg">
                Motivation fades. Structure sustains.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-start gap-3">
                <span className="text-2xl">💡</span>
                Why Current Solutions Fail
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 mb-4">Most productivity apps:</p>
              <ul className="space-y-2 text-white/70">
                <li>• Are generic study timers</li>
                <li>• Don't understand competitive exam pressure</li>
                <li>• Ignore psychological triggers</li>
                <li>• Don't address real-world distractions</li>
              </ul>
              <p className="text-white/90 font-medium pt-4">
                Competitive exam preparation requires a system built specifically for aspirants.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </RevealSection>
  );
}

// Why This Platform Exists Section
function WhySection() {
  return (
    <RevealSection className="py-24 px-4 bg-gradient-to-b from-card/20 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-display">
          Why This Platform <span className="text-accent">Exists</span>
        </h2>

        <div className="space-y-6 text-left text-white/80 text-lg leading-relaxed">
          <p>
            We noticed something simple:
          </p>
          <p className="text-xl font-semibold text-white">
            Students don't fail because they don't want success. They fail because they don't have a system strong
            enough to protect their focus.
          </p>
          <p>
            This platform is built to create that system.
          </p>
          <div className="text-center py-6">
            <p className="text-white/60">Not a motivational app.</p>
            <p className="text-white/60">Not just a timer.</p>
            <p className="text-accent text-xl font-bold mt-4">
              A behavioral control + performance tracking ecosystem designed for serious aspirants.
            </p>
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
    <RevealSection id="solution" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            How We <span className="text-accent">Solve It</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card/40 border-border/50 backdrop-blur-sm hover:border-accent/70 hover:bg-card/60 transition-all group"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-colors">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-white mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-white/70 text-base">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
    <RevealSection id="vision" className="py-24 px-4 bg-gradient-to-b from-black to-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Future <span className="text-accent">Vision</span>
          </h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto">
            This is not just an app. It's the foundation of a focused preparation ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {futureFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card/40 border-border/50 backdrop-blur-sm hover:border-accent/50 transition-all text-center p-6"
              >
                <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <p className="text-white/90 font-medium">{feature.text}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-accent text-2xl font-bold">
            We aim to build the most serious productivity platform for competitive exam aspirants in India.
          </p>
        </div>
      </div>
    </RevealSection>
  );
}

// Who Is This For Section
function WhoIsThisForSection() {
  return (
    <RevealSection className="py-24 px-4 bg-gradient-to-b from-card/20 to-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-display">
          Who Is This <span className="text-accent">For?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-card/40 border-accent/50 backdrop-blur-sm p-6">
            <CheckCircle2 className="w-8 h-8 text-accent mb-3" />
            <p className="text-white text-xl font-semibold">JEE Aspirants</p>
          </Card>
          <Card className="bg-card/40 border-accent/50 backdrop-blur-sm p-6">
            <CheckCircle2 className="w-8 h-8 text-accent mb-3" />
            <p className="text-white text-xl font-semibold">NEET Aspirants</p>
          </Card>
          <Card className="bg-card/40 border-accent/50 backdrop-blur-sm p-6">
            <CheckCircle2 className="w-8 h-8 text-accent mb-3" />
            <p className="text-white text-xl font-semibold">Students struggling with consistency</p>
          </Card>
          <Card className="bg-card/40 border-accent/50 backdrop-blur-sm p-6">
            <CheckCircle2 className="w-8 h-8 text-accent mb-3" />
            <p className="text-white text-xl font-semibold">Serious competitors preparing for 1–2 year cycles</p>
          </Card>
        </div>

        <div className="text-center bg-destructive/10 border border-destructive/30 rounded-xl p-8">
          <p className="text-white text-xl font-bold">
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
    <RevealSection className="py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
          Early Access <span className="text-accent">Community</span>
        </h2>
        <p className="text-white/70 text-lg mb-8">
          We're currently building this with selected early users.
        </p>

        <div className="bg-card/40 border border-border/50 rounded-xl p-8 mb-8">
          <p className="text-white text-xl mb-6">If you want to:</p>
          <ul className="space-y-3 text-white/80 text-left max-w-md mx-auto">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 shrink-0" />
              Test early features
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 shrink-0" />
              Give direct feedback
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 shrink-0" />
              Shape the future of this platform
            </li>
          </ul>
        </div>

        <Button
          size="lg"
          className="px-12 py-7 bg-accent text-accent-foreground rounded-full font-bold tracking-wide hover:scale-110 transition-transform text-lg"
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
    <RevealSection id="feedback" className="py-24 px-4 bg-gradient-to-b from-black to-card/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Tell Us About Your <span className="text-accent">Preparation Struggles</span>
          </h2>
          <p className="text-white/70 text-xl">We want real feedback from real aspirants.</p>
          <p className="text-white/60 mt-2">
            👉 Your insight helps shape the system.
          </p>
        </div>

        <Card className="bg-card/40 border-border/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white/90 text-base mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border/50 text-white focus:border-accent text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label className="text-white/90 text-base mb-3 block">Exam Target</Label>
                <RadioGroup
                  value={formData.examTarget}
                  onValueChange={(value: "jee" | "neet") => setFormData({ ...formData, examTarget: value })}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="jee" id="jee" className="border-white/50 text-accent" />
                    <Label htmlFor="jee" className="text-white cursor-pointer text-base">
                      JEE
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="neet" id="neet" className="border-white/50 text-accent" />
                    <Label htmlFor="neet" className="text-white cursor-pointer text-base">
                      NEET
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="distraction" className="text-white/90 text-base mb-2 block">
                  Biggest Distraction
                </Label>
                <Textarea
                  id="distraction"
                  value={formData.biggestDistraction}
                  onChange={(e) => setFormData({ ...formData, biggestDistraction: e.target.value })}
                  className="bg-background/50 border-border/50 text-white focus:border-accent min-h-[100px] text-base"
                  placeholder="What distracts you the most during study time?"
                />
              </div>

              <div>
                <Label htmlFor="studyHours" className="text-white/90 text-base mb-2 block">
                  Average Study Hours (per day)
                </Label>
                <Input
                  id="studyHours"
                  type="number"
                  min="0"
                  max="24"
                  value={formData.averageStudyHours}
                  onChange={(e) => setFormData({ ...formData, averageStudyHours: e.target.value })}
                  className="bg-background/50 border-border/50 text-white focus:border-accent text-base"
                  placeholder="e.g., 6"
                />
              </div>

              <div>
                <Label htmlFor="neededFeature" className="text-white/90 text-base mb-2 block">
                  What Feature You Need Most
                </Label>
                <Textarea
                  id="neededFeature"
                  value={formData.neededFeature}
                  onChange={(e) => setFormData({ ...formData, neededFeature: e.target.value })}
                  className="bg-background/50 border-border/50 text-white focus:border-accent min-h-[100px] text-base"
                  placeholder="What would help you stay focused the most?"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="w-full py-6 bg-accent text-accent-foreground rounded-full font-bold tracking-wide hover:scale-105 transition-transform text-base"
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
    <RevealSection className="py-32 px-4 bg-gradient-to-b from-card/20 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12 space-y-4">
          <p className="text-white/60 text-2xl">Discipline is hard.</p>
          <p className="text-white/60 text-2xl">But chaos is harder.</p>
        </div>

        <p className="text-white text-2xl md:text-3xl font-semibold mb-8 leading-relaxed">
          If you're serious about cracking JEE or NEET,
          <br />
          you need more than motivation.
        </p>

        <p className="text-accent text-3xl md:text-4xl font-bold mb-12 font-display">You need a system.</p>

        <p className="text-white/70 text-xl mb-12">And we're building it.</p>

        <Button
          size="lg"
          className="px-12 py-7 bg-white text-black rounded-full font-bold tracking-wide hover:scale-110 transition-transform text-lg"
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
    <footer className="py-12 px-4 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white/50 text-sm">
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
    <div className="dark min-h-screen bg-black text-white">
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
