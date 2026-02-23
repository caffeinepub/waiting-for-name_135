# OATH - Own Your Time

## Current State
Landing page with hero section, problem/why/solution/future vision sections, review form, and closing CTA. All sections use dark premium aesthetic with animated backgrounds and text effects. Navigation includes logo with LetterHoverEffect component.

## Requested Changes (Diff)

### Add
- **Connect With Us footer section** below the closing section
  - Heading "Connect With Us" with AnimatedText gradient effect
  - SocialLinks component with Instagram and Email
  - Clickable links that open Instagram profile and email client
  - Animated hover effect with icons popping up above text
  - Dark premium styling consistent with rest of page
  - Background pattern (dots or grid) with fade mask

### Modify
- None

### Remove
- None

## Implementation Plan

### Frontend
1. Create `/components/ui/social-links.tsx` component file with provided code
2. Verify framer-motion dependency is installed (already in project)
3. Add "Connect With Us" section to `App.tsx` below closing section
4. Configure social links data:
   - Instagram: "Instagram" → opens https://www.instagram.com/oath_ownyourtime/
   - Email: "Email" → opens mailto:oathteam.app@gmail.com
5. Source icon images:
   - Instagram icon (from provided CDN or local asset)
   - Email/Mail icon (from provided CDN or local asset)
6. Style section with:
   - AnimatedText heading with grey-white-cyan gradient
   - BGPattern background (dots with fade-center cyan accent)
   - Responsive padding and spacing
   - White text color for link names on dark background
7. Wrap social links with `<a>` tags to make clickable
8. Test hover animation and click functionality

## UX Notes
- Footer section provides clear call-to-action to connect
- Animated hover effect adds premium, playful interaction
- Icons pop up above text on hover (Instagram logo, email icon)
- Clicking text opens respective link (Instagram profile in new tab, email client)
- Maintains dark aesthetic with subtle background pattern
- Responsive design works on mobile and desktop
