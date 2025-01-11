# Minilo Design System

[**minilo.io**](http://www.minilo.io/)

---

## 🚀 **Vision**

Our vision is to **redefine the bridge between design and development** by creating a **streamlined, niche design system** that eliminates inefficiencies, reduces friction, and accelerates the journey from **concept to code**.

---

## 🎯 **Purpose Statement**

The purpose of this design system is to:

1. **Standardize Design Patterns:** Ensure consistency across all UI components.
2. **Accelerate Development:** Reduce repetitive tasks with pre-built, reusable components.
3. **Enhance Collaboration:** Enable seamless communication between designers and developers.
4. **Minimize Ambiguity:** Provide clear documentation and usage guidelines.
5. **Focus on Niche Design Needs:** Address specific design challenges unique to our targeted audience.

---

## 🛠️ **Core Goals**

1. **Efficiency:** Reduce the design-to-development cycle time by providing ready-to-use assets and components.
2. **Scalability:** Create a modular system adaptable to small and large projects.
3. **Accessibility:** Ensure all components follow accessibility best practices (e.g., WCAG).
4. **Consistency:** Maintain a unified design language across platforms and devices.
5. **Innovation:** Continuously evolve based on user feedback and industry trends.

---

## 📚 **Core Principles**

- **Minimalism:** Simple yet functional design components.
- **Accessibility:** Inclusive and user-friendly designs.
- **Responsiveness:** Adapt seamlessly across devices.
- **Customizability:** Flexible components tailored to unique requirements.
- **Transparency:** Clear documentation and open-source contributions.

---

## 💡 **Value Proposition**

- **For Designers:** A consistent design library that reduces guesswork and promotes creativity.
- **For Developers:** Clean, reusable components with clear documentation and examples.
- **For Businesses:** Faster time-to-market and reduced development costs.

---

## 🎨 **Design Principles**

1. **Border Radius:** Fixed border-radius of `8px` or `8%` of the rectangle size.
2. **Border Color:** All borders use `#E9E9E9`.
3. **Container Background:** White for clean and minimalistic aesthetics.
4. **Text Styling:** Bold text/titles for clarity and emphasis.
5. **Layout Background:** `#FDFCFF` for a soft, consistent aesthetic.
6. **Unified Language:** All components adhere to a consistent visual style.
7. **Adaptability:** The system supports scalable, future-proof design.
8. **WCAG Compliance:** Components meet accessibility standards.

---

## 🖌️ **Design System Foundation**

### 🎨 **Color Palette**

**Primary Colors:**

- **Light Mode:** `#FFFFFF` (Pure White)
- **Dark Mode:** `#000000` (Pure Black)

**Neutral Shades:**

- **Light Mode:**
  - Neutral 1: `#FDFCFF`
  - Neutral 2: `#E9E9E9`
  - Text: `#333333`
- **Dark Mode:**
  - Neutral 1: `#181818`
  - Neutral 2: `#3A3A3A`
  - Text: `#FFFFFF`

### 🔤 **Typography**

- **Font Family:** Noto Sans (Fallback: sans-serif)
- **Mobile Font Sizes:**
  - H1: 28px
  - H2: 22px
  - H3: 18px
  - H4: 16px
  - H5: 14px
  - H6: 12px
  - Small: 11px
- **Mobile Line Heights:** Proportionally reduced for readability.
- **Features:** CSS variables, responsive breakpoints at `768px`, semantic and utility class support.

👉 [**Responsive Typography Guide**](https://prod-files-secure.s3.us-west-2.amazonaws.com/de9e1ef1-59b5-4522-b97f-14ae3eebf85e/4f0a1711-6a8d-449a-a420-989c1926a28f/typography-system-responsive.css)

---

### 📐 **Spacing & Layout Guidelines**

**1. Grid System:**

- **Base Unit:** `8px` (for margins, padding, and spacing).

**2. Responsive Breakpoints:**

- **Mobile Portrait:** `max-width: 480px`
- **Mobile Landscape / Tablet:** `481px - 768px`
- **Tablet / Small Laptop:** `769px - 1024px`
- **Desktop:** `1025px - 1440px`
- **Wide Screen:** `1441px+`

**3. Layout Grid:**

- **Mobile:** 1 Column
- **Tablet:** 2 Columns
- **Desktop:** 12 Columns

**4. Gutters:**

- **Mobile & Tablet:** `16px`
- **Desktop:** `24px`

**5. Margins & Padding:**

- **Container Padding:** Mobile: `16px`, Tablet/Desktop: `24px`
- **Outer Margins:** Mobile: `8px`, Tablet/Desktop: `16px`

**6. Typography Spacing:**

- **Line Height:** `1.4x` the font size.
- **Text Spacing:** Base unit (`8px`) for consistent spacing.

---

## 📦 **How to Use Minilo Design System**

1. Install the Design System via npm/yarn:

```bash
npm install minilo-design-system
```

2. Import core CSS into your project:

```css
@import "minilo-design-system/dist/styles.css";
```

3. Use Components:

```jsx
import { Button } from "minilo-design-system";

<Button variant="primary">Click Me</Button>;
```

4. Customize Theme (if needed):

```css
:root {
  --primary-color: #003078;
}
```

---

## 🤝 **Contributing**

We welcome contributions! Please check our [Contribution Guidelines](CONTRIBUTING.md) to get started.

---

## 📄 **License**

This project is licensed under the **Apache 2.0 License**. See the [LICENSE](LICENSE) file for more details.

---

## 🧠 **Stay Connected**

- **Website:** [minilo.io](http://www.minilo.io/)
- **Documentation:** [docs.minilo.io](http://docs.minilo.io/)
- **Community:** [Discord](https://discord.gg/minilo-design)

---

Let's **build better designs together** with **Minilo Design System**! 🚀✨

---

Copyright 2025 © Minilo Design. All Rights Reserved.
