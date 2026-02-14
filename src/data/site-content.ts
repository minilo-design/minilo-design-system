export type FeatureCard = {
  src: string;
  title: string;
  desc: string;
};

export type WalkthroughStep = {
  title: string;
  body: string;
  callout: string;
};

export const homeFeatureCards: FeatureCard[] = [
  {
    src: '/assets/design-images/design-1.svg',
    title: 'Typography & Grid System',
    desc: 'A flexible typography and grid system that adapts to any layout design.',
  },
  {
    src: '/assets/design-images/design-2.svg',
    title: 'Color Schemes & Themes',
    desc: 'Easily implement consistent color schemes and themes for a cohesive user experience.',
  },
  {
    src: '/assets/design-images/design-3.svg',
    title: 'Components',
    desc: 'A wide range of reusable and customizable components to streamline your development process.',
  },
];

export const walkthroughSteps: WalkthroughStep[] = [
  {
    title: 'Foundation Layer',
    body: 'Start with color, type, spacing, and radius tokens to establish a stable visual language.',
    callout: 'Design tokens from Storybook now power the whole website.',
  },
  {
    title: 'Component Layer',
    body: 'Compose interfaces with reusable primitives such as buttons, cards, inputs, and nav bars.',
    callout: 'Every component follows the same spacing and accessibility patterns.',
  },
  {
    title: 'Product Layer',
    body: 'Ship pages with consistent behavior, strong hierarchy, and clear interaction states.',
    callout: 'Your original content is preserved and expanded with richer storytelling.',
  },
];

export const systemStats = [
  { label: 'Reusable Components', value: '20+' },
  { label: 'Design Tokens', value: '45+' },
  { label: 'Storybook Stories', value: '30+' },
  { label: 'Core Principles', value: '8' },
];

export const designPrinciples = [
  {
    title: 'Minimalism',
    description: 'Simple and functional components that remove noise and keep user intent clear.',
  },
  {
    title: 'Accessibility',
    description: 'WCAG-aware defaults, clear contrast, and predictable states across all elements.',
  },
  {
    title: 'Responsiveness',
    description: 'Layouts and typography that adapt smoothly from mobile screens to wide displays.',
  },
  {
    title: 'Consistency',
    description: 'Unified spacing, border, and typography behavior to reduce implementation drift.',
  },
];

export const componentCategories = [
  {
    name: 'Buttons',
    summary: 'Primary, secondary, tertiary, and tile variants including loading states.',
    coverage: 'Interaction + feedback',
  },
  {
    name: 'Cards',
    summary: 'Profile, item, and layout cards for structured content presentation.',
    coverage: 'Information hierarchy',
  },
  {
    name: 'Inputs',
    summary: 'Text field, dropdown, search field, and document selection controls.',
    coverage: 'Data capture',
  },
  {
    name: 'Navigation',
    summary: 'Top bars and nav bars for mobile and desktop navigation patterns.',
    coverage: 'Wayfinding',
  },
  {
    name: 'Containers + More',
    summary: 'Containers and accordion patterns for grouped, expandable information.',
    coverage: 'Layout composition',
  },
  {
    name: 'Feedback',
    summary: 'Alert banners for system messaging, validation, and user-facing status updates.',
    coverage: 'System communication',
  },
  {
    name: 'Data Display',
    summary: 'Badges and stat cards for status visibility and metric storytelling.',
    coverage: 'Information clarity',
  },
  {
    name: 'Layout + Navigation',
    summary: 'Section headers and breadcrumbs for page hierarchy and directional context.',
    coverage: 'Page structure',
  },
  {
    name: 'Advanced Inputs',
    summary: 'Textarea and toggle switch primitives for richer forms and settings flows.',
    coverage: 'Extended form controls',
  },
];

export const aboutCopy = {
  title: 'About the Minilo Design',
  paragraphOne:
    'Minilo is a minimalistic, open-source design system that provides flexible components and tools for building user interfaces across different platforms. The system focuses on simplicity, consistency, and scalability, enabling teams to create seamless and cohesive user experiences.',
  paragraphTwo:
    "With a fixed border radius of 8px, a consistent color palette, and a clean, modern aesthetic, Minilo is designed to be timeless and adaptable to future trends. Whether you're building a mobile app, website, or any other product, Minilo offers the foundation you need for a polished, intuitive UI.",
  paragraphThree:
    "As an open-source project, Minilo encourages collaboration and contributions from the community. Whether you're a designer, developer, or enthusiast, you can help shape the future of this design system by contributing to its growth and evolution.",
};

export const docsQuickLinks = [
  { label: 'Vision', href: '#vision' },
  { label: 'Full Documentation', href: '#docs-body' },
  { label: 'How to Use', href: '#docs-use' },
  { label: 'Project Links', href: '#docs-links' },
];
