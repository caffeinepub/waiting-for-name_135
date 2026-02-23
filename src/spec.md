# OATH Landing Page - Logo Visibility Fix

## Current State

The landing page has a navigation bar with:
- `LetterHoverEffect` component already integrated at lines 51-59 in App.tsx
- Component displays "OATH - Own Your Time" text
- CSS variables for theme colors defined in index.css (lines 238-249)
- Component accepts `text` and `className` props
- Mobile and desktop responsive sizing configured

**Problem**: Logo text is not visible on both desktop and mobile. Space exists in the navigation bar where the logo should be, but no text is rendering.

## Requested Changes (Diff)

### Add
- Nothing new to add - component already exists

### Modify
- Fix logo visibility in navigation by ensuring proper color contrast and CSS rendering
- Verify z-index layering doesn't hide the text
- Ensure CSS variables are properly applied
- Test that the component renders correctly with the dark background (#0B0F19)

### Remove
- Nothing to remove

## Implementation Plan

1. **Diagnose the visibility issue**:
   - Check if CSS variables are being applied correctly
   - Verify the component is actually rendering (inspect DOM)
   - Check for z-index conflicts with other navigation elements
   - Ensure the dark mode class is properly set on the root element

2. **Fix the rendering**:
   - Ensure `--th-text` CSS variable resolves to white (#fff) for dark theme
   - Add explicit color fallback if needed
   - Verify the navigation container doesn't have overflow issues
   - Check that backdrop-blur or other effects aren't hiding the text

3. **Responsive sizing verification**:
   - Mobile: `text-sm sm:text-base` (lines 51-54)
   - Desktop: `text-lg lg:text-xl` (lines 56-59)
   - Ensure both variants render properly

4. **Validation**:
   - Run typecheck to ensure no TypeScript errors
   - Run lint to check for code quality issues
   - Run build to verify production bundle works
   - Visually verify logo is visible on both mobile and desktop layouts

## UX Notes

- Logo should be clearly visible with high contrast against dark navy background
- Interactive hover effect should work on desktop (3D letter scaling)
- Text should be legible and not too small on mobile
- Logo position: top-left in navigation bar with proper padding
- Should work seamlessly with mobile menu toggle button on the right
