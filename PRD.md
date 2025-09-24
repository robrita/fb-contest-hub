# FB Post Contest Landing Page

Create a mobile-responsive landing page for Facebook post contests that encourages participation through heart reactions and displays contest results dynamically.

**Experience Qualities**:
1. **Engaging** - Vibrant design with smooth animations that create excitement around the contest
2. **Trustworthy** - Clean, professional layout that builds confidence in the contest legitimacy  
3. **Effortless** - Intuitive navigation and clear mechanics that require no explanation

**Complexity Level**: Light Application (multiple features with basic state)
  - Features include contestant display, winner announcement, search/filter, and countdown functionality with JSON-driven content

## Essential Features

**Hero Section with Contest Overview**
- Functionality: Displays contest title, tagline, and primary CTA
- Purpose: Creates immediate engagement and communicates contest value
- Trigger: Page load
- Progression: User sees title → reads mechanics → clicks CTA → views FB post
- Success criteria: High click-through rate to Facebook post

**Dynamic Winner Announcement**
- Functionality: Conditionally displays winner based on JSON configuration
- Purpose: Creates anticipation and celebrates contest completion
- Trigger: JSON contains winner data
- Progression: Page load → check winner status → display announcement with confetti → show congratulations
- Success criteria: Winner clearly highlighted with celebratory experience

**Contestants Directory with Search**
- Functionality: Displays all participants with filtering capabilities
- Purpose: Shows contest participation and builds social proof
- Trigger: User scrolls to contestants section or uses search
- Progression: View all contestants → search by name → filter results → click profile links
- Success criteria: Easy browsing of all participants with quick search results

**Live Countdown Timer**
- Functionality: Shows time remaining until winner announcement
- Purpose: Creates urgency and anticipation
- Trigger: Page load when contest is active
- Progression: Display countdown → update every second → show "Results Available" when complete
- Success criteria: Accurate time display that builds excitement

**Contest Mechanics Display**
- Functionality: Clear instructions for participation
- Purpose: Removes barriers to entry and explains rules
- Trigger: User clicks "How to Join" or scrolls to mechanics
- Progression: Read instructions → understand requirements → navigate to FB post → participate
- Success criteria: Clear understanding of participation process

## Edge Case Handling

- **Missing Profile Pictures**: Default avatar placeholder with consistent styling
- **No Winner Announced**: Hide winner section completely, keep countdown active
- **Empty Contestants List**: Show encouraging message to be first participant
- **Broken Facebook Links**: Graceful handling with alternative call-to-action
- **Long Names**: Text truncation with tooltip for full names
- **Slow JSON Loading**: Skeleton loading states for all dynamic content

## Design Direction

The design should feel celebratory and energetic while maintaining trust through clean, modern aesthetics - think Instagram contest vibes with Facebook's reliability.

## Color Selection

Triadic color scheme using vibrant, social media-inspired colors that evoke excitement and engagement.

- **Primary Color**: Vibrant Facebook Blue (oklch(0.55 0.18 250)) - represents the platform connection and trust
- **Secondary Colors**: Warm coral (oklch(0.7 0.15 25)) for engagement elements and energetic orange (oklch(0.75 0.12 60)) for highlights
- **Accent Color**: Celebration Gold (oklch(0.8 0.1 85)) for winner announcements and special callouts
- **Foreground/Background Pairings**: 
  - Background White (oklch(1 0 0)): Dark text (oklch(0.2 0 0)) - Ratio 16:1 ✓
  - Primary Blue (oklch(0.55 0.18 250)): White text (oklch(1 0 0)) - Ratio 8.2:1 ✓
  - Secondary Coral (oklch(0.7 0.15 25)): White text (oklch(1 0 0)) - Ratio 5.1:1 ✓
  - Accent Gold (oklch(0.8 0.1 85)): Dark text (oklch(0.2 0 0)) - Ratio 12.8:1 ✓

## Font Selection

Typography should feel modern and friendly while maintaining excellent readability across devices, using Inter for its clarity and contemporary feel.

- **Typographic Hierarchy**: 
  - H1 (Contest Title): Inter Bold/32px/tight letter spacing
  - H2 (Section Headers): Inter Semibold/24px/normal spacing  
  - H3 (Contestant Names): Inter Medium/18px/normal spacing
  - Body (Mechanics): Inter Regular/16px/relaxed line height
  - CTA Buttons: Inter Semibold/16px/wide letter spacing

## Animations

Subtle, purposeful animations that enhance the contest excitement without overwhelming the content or slowing user interactions.

- **Purposeful Meaning**: Smooth transitions communicate energy and engagement, while confetti celebrates winners
- **Hierarchy of Movement**: Winner announcement gets celebratory animation, contestant cards have gentle hover effects, countdown pulses subtly

## Component Selection

- **Components**: Card for contestants, Dialog for detailed mechanics, Button for CTAs, Input for search, Badge for winner status, Avatar for profile pictures, Separator for content sections
- **Customizations**: Custom confetti component using canvas, enhanced countdown timer with progress indication, social share component
- **States**: Buttons show loading states during actions, cards highlight on hover, search input provides real-time filtering feedback
- **Icon Selection**: Heart icons for contest theme, Search for filtering, Share for social actions, Trophy for winner indication, Clock for countdown
- **Spacing**: Consistent 4/6/8/12/16px spacing using Tailwind scale, generous padding on cards (p-6), comfortable gaps between sections (gap-8)
- **Mobile**: Single column layout on mobile with full-width cards, collapsible sections, touch-optimized button sizes (min 44px), horizontal scroll for contestant cards if needed