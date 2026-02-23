# OATH Landing Page - Navigation Logo Update

## Current State

The navigation bar currently displays "OATH" using the `HoverTextGlow` component, which creates an SVG-based gradient effect following the cursor.

The navigation is responsive with:
- Desktop navigation showing full menu links
- Mobile hamburger menu with overlay
- Fixed positioning with backdrop blur

## Requested Changes (Diff)

### Add
- New `LetterHoverEffect` component (`scale-letter.tsx`) with 3D letter-by-letter hover scaling effect
- CSS theme variables for the letter hover effect (`--th-text`, `--th-shadow`, `--th-shadow-light`)
- Responsive logo text showing "OATH - Own Your Time"

### Modify
- Navigation logo: Replace `HoverTextGlow` component with `LetterHoverEffect`
- Logo text: Change from "OATH" to "OATH - Own Your Time"
- Logo sizing: Implement responsive sizing (smaller on mobile, larger on desktop)
- Logo container: Remove fixed width constraint to allow flexible sizing

### Remove
- Previous `HoverTextGlow` import (kept in codebase for potential future use)
- Fixed width constraint on logo container (`w-72`)

## Implementation Plan

1. **Create `scale-letter.tsx` component** ✅
   - Extract and adapt the LetterHoverEffect component with proper TypeScript interfaces
   - Configure for dark theme (white text with cyan shadows)
   - Make text configurable via props
   - Support custom className for responsive styling

2. **Update global CSS** ✅
   - Add theme variables for the component's color system
   - Ensure proper contrast for dark background

3. **Update App.tsx navigation** ✅
   - Import the new `LetterHoverEffect` component
   - Replace logo implementation with two responsive instances:
     - Mobile: `text-sm sm:text-base md:hidden` (small text, hidden on desktop)
     - Desktop: `hidden md:block text-lg lg:text-xl` (larger text, hidden on mobile)
   - Set text to "OATH - Own Your Time"
   - Remove fixed width constraint from container

4. **Validation**
   - Test build compilation
   - Verify responsive behavior across breakpoints
   - Check hover interactions work smoothly
   - Ensure no layout shifts or overlaps with navigation links

## UX Notes

**Responsive Behavior:**
- Mobile (< 768px): Smaller text size to fit constrained space, full logo text visible
- Tablet/Desktop (≥ 768px): Larger, more prominent logo with clear hover effects

**Interactive Behavior:**
- Each letter scales and lifts on hover with 3D perspective
- Neighboring letters (distance 1-2) also animate subtly for wave effect
- Smooth easing with cubic-bezier timing for premium feel
- Brightness increases on hovered letters for emphasis

**Visual Consistency:**
- Maintains the dark, cinematic aesthetic of the landing page
- White text with subtle cyan shadows matches the existing accent color system
- Bold font weight for strong brand presence
- Letter spacing configured for readability

**Performance:**
- Hover effect uses CSS transforms (GPU-accelerated)
- No heavy SVG operations or canvas rendering
- Smooth 60fps animations via optimized transition properties
