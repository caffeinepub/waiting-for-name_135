"use client";

import { useState, FormEvent } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return !newErrors.fullName && !newErrors.email && !newErrors.phone;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Send email via EmailJS
      const templateParams = {
        from_name: formData.fullName,
        user_email: formData.email,
        user_phone: formData.phone,
      };

      await emailjs.send(
        "service_7e118gg",
        "template_ga0cvuc",
        templateParams,
        "yIYrcmF-W6xmRJr_u"
      );

      console.log("Early Access Form Data:", formData);
      setIsLoading(false);
      setShowSuccess(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsLoading(false);
      // Show error to user (optional)
      alert("Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
    });
    setErrors({
      fullName: "",
      email: "",
      phone: "",
    });
    setShowSuccess(false);
    onClose();
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 sm:px-6 lg:px-8 animate-in fade-in duration-200"
      onClick={handleOutsideClick}
    >
      <div
        className="relative w-full max-w-md bg-[#0B0F19] border border-white/10 rounded-xl shadow-2xl animate-in zoom-in-95 duration-200"
        style={{
          animation: "modalAppear 0.3s ease-out",
        }}
      >
        <style>{`
          @keyframes modalAppear {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8">
          {showSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-foreground text-lg font-semibold">
                You're on the list. We'll notify you at launch.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Join Early Access
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Be the first to experience OATH when we launch.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="fullName" className="text-foreground text-sm mb-2 block">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: "" });
                    }}
                    className="bg-background/50 border-white/10 text-foreground focus:border-accent"
                    placeholder="Your full name"
                  />
                  {errors.fullName && (
                    <p className="text-destructive text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground text-sm mb-2 block">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className="bg-background/50 border-white/10 text-foreground focus:border-accent"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground text-sm mb-2 block">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    className="bg-background/50 border-white/10 text-foreground focus:border-accent"
                    placeholder="+91 xxxxx xxxxx"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-6 bg-accent text-accent-foreground rounded-full font-bold tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? "Submitting..." : "Join Early Access"}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
