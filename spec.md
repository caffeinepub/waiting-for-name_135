# OATH - Own Your Time

## Current State

The OATH landing page is a React + TypeScript application with:
- **Hero section** with interactive particle canvas background
- **Multiple content sections** with animated text, backgrounds, and cards
- **HighlightCard components** in the Solution section with premium glass effects, multiple animated layers (shimmer sweeps, pulsing glows, bouncing lights, animated dots, corner accents)
- **Responsive design system** that automatically scales text and components for mobile
- **Mobile optimization** currently removes or reduces card effects on small screens to improve performance

The HighlightCard component exists at `/components/ui/highlight-card.tsx` but the mobile version has stripped-down effects compared to desktop.

## Requested Changes (Diff)

### Add
- Always-visible animations on mobile for all HighlightCard effects (no hover/interaction required)
- Mobile-specific CSS classes that maintain full blur strength (backdrop-blur-xl, blur-3xl, blur-xl)
- Continuous animation loops for effects that were previously hover-triggered on desktop
- Hardware acceleration hints for mobile GPU optimization

### Modify
- HighlightCard component to detect mobile viewport and switch hover effects to continuous animations
- CSS animations to run perpetually on mobile instead of on hover
- Shimmer sweep, pulsing glow, bouncing light, and corner accent animations to be always active on mobile
- Icon rotation and scale effects to loop continuously on mobile
- Border glow and shadow effects to be permanently visible (not hover-dependent) on mobile

### Remove
- None - all existing desktop effects remain intact

## Implementation Plan

1. **Update HighlightCard component** (`/components/ui/highlight-card.tsx`):
   - Add mobile detection logic (viewport width check or CSS media queries)
   - Create mobile-specific CSS classes that make hover effects always active
   - Ensure all blur effects remain at full strength on mobile
   - Add `will-change` and `transform` hints for GPU acceleration

2. **Create mobile animation variants**:
   - Convert group-hover effects to always-on animations for mobile
   - Add continuous animation loops for shimmer sweeps
   - Make pulsing glows, bouncing lights, and animated dots always visible
   - Apply permanent border glow and corner accent visibility

3. **Optimize animation timing for mobile**:
   - Review animation durations for smooth 60 FPS performance
   - Adjust timing functions for buttery-smooth mobile rendering
   - Ensure all animations use GPU-accelerated properties (transform, opacity)

4. **Frontend integration**:
   - Update App.tsx to use the enhanced HighlightCard component
   - Verify all four feature cards render with full effects on mobile
   - Test animation performance on mobile viewport sizes

5. **Validation**:
   - Run typecheck, lint, and build
   - Fix any errors
   - Test responsive behavior at mobile breakpoints

## UX Notes

- **Mobile users** will see all the premium glass effects, animated layers, and shimmer sweeps without needing to tap or interact
- **Desktop users** retain the existing hover-triggered effects for interactive polish
- **Performance** is optimized with GPU acceleration hints while maintaining full visual fidelity
- **Consistency** - the same cinematic, high-end aesthetic appears on all devices
- All blur effects (backdrop-blur-xl, blur-3xl, blur-xl) remain at full strength on mobile for premium visual quality
