# Review Collection Landing Page

## Current State

The landing page exists with:
- Interactive particle hero section with "Experimental Interaction" badge and "Zero Gravity" headline
- "LAUNCHING SOON" text present but understated
- Full content sections (Problem, Why We Exist, How We Solve It, etc.)
- Review submission form
- Responsive design with Tailwind CSS

## Requested Changes (Diff)

### Add
- Large, cinematic "LAUNCHING SOON" text treatment with 3D depth
- Layered text-shadow for embossed 3D effect
- Soft cyan (#22d3ee) glow effect
- Smooth floating animation (slow vertical movement)
- Pulsing glow animation
- Fade-in animation on page load
- Subtle animated gradient sweep across text
- Slight perspective tilt for depth

### Modify
- Position "LAUNCHING SOON" above main headline
- Increase text size significantly (hero-dominant scale)
- Add wide letter-spacing (tracking)
- Update visual hierarchy to make "LAUNCHING SOON" prominent but not overpowering
- Ensure animations are slow, smooth, and professional (no jitter/blink)

### Remove
- Current minimal "Experimental Interaction" badge styling (if that's the launching soon element)

## Implementation Plan

1. **Update Hero Content Component**
   - Reposition "LAUNCHING SOON" above main headline
   - Increase font size to 2xl-4xl range (responsive)
   - Add uppercase transform and wide letter-spacing

2. **Add Custom CSS Animations**
   - Create `@keyframes` for floating motion (translateY movement)
   - Create `@keyframes` for pulsing glow (opacity/shadow intensity)
   - Create `@keyframes` for gradient sweep effect
   - Create `@keyframes` for fade-in entrance

3. **Apply 3D Text Effects**
   - Layer multiple text-shadows for 3D depth
   - Add cyan glow using box-shadow/text-shadow
   - Apply subtle perspective transform
   - Use white base color with gradient overlay

4. **Configure Animation Timing**
   - Set slow durations (3-6s for float, 4-8s for glow)
   - Use ease-in-out timing functions
   - Infinite loops for continuous motion
   - Single run for fade-in entrance

## UX Notes

- The "LAUNCHING SOON" text should command attention immediately on page load
- Animation should feel premium and controlled (luxury SaaS aesthetic)
- Text should maintain readability despite effects
- Visual hierarchy preserved: LAUNCHING SOON → Main Headline → Subheadline → CTA
- Mobile responsive: effects scale down gracefully on smaller screens
- Performance: CSS animations only (GPU-accelerated, no JS overhead)
