import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '../assets/hero-image.png';
import SeoHead from '@/components/site/SeoHead';
import { homeFeatureCards, systemStats, walkthroughSteps } from '@/data/site-content';

const HOME_DESCRIPTION =
  'Minilo Design is a minimalistic and adaptive design system that empowers developers with flexible components for building modern UIs.';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const heroShift = Math.min(scrollY * 0.18, 140);
  const stepShiftBase = Math.min(scrollY * 0.05, 28);

  return (
    <>
      <SeoHead title="Minilo Design" description={HOME_DESCRIPTION} path="/" />

      <section className="hero-section page-section" aria-label="Hero">
        <div
          className="hero-image-layer"
          style={{ transform: `translate3d(0, ${heroShift}px, 0) scale(1.04)` }}
        >
          <Image
            src={heroImage}
            alt="Minilo design system hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="hero-glass">
          <div className="hero-content">
            <span className="minilo-chip">Version 1.0 • Open Source</span>
            <h1 className="hero-title">Build Beautiful UIs with Minilo</h1>
            <p className="hero-text">
              Fast, flexible, and modern design system for your applications. This walkthrough moves from
              foundations to components to complete product screens.
            </p>

            <div className="hero-actions">
              <Link href="/doc" className="hero-cta minilo-button minilo-button-primary">
                Read Docs
              </Link>
              <Link href="/components" className="hero-cta minilo-button minilo-button-secondary">
                Explore Components
              </Link>
            </div>

            <p className="hero-scroll-note">Scroll to follow the parallax walkthrough</p>
          </div>
        </div>
      </section>

      <section className="page-section" aria-label="System stats">
        <div className="minilo-kicker">Design System Health</div>
        <h2 className="page-title">A stable foundation for scale</h2>
        <p className="page-copy">
          Your original design principles remain intact and now drive a clearer implementation layer across
          pages and Storybook.
        </p>

        <div className="stats-grid">
          {systemStats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="walkthrough page-section" id="walkthrough" aria-label="Parallax walkthrough">
        <div className="walkthrough-header">
          <div className="minilo-kicker">Parallax Walkthrough</div>
          <h2 className="page-title">See the system move from token to product</h2>
          <p className="page-copy">
            The walkthrough uses subtle parallax offsets while preserving readability, so users can track
            where design rules become reusable UI patterns.
          </p>
        </div>

        <div className="walkthrough-track">
          {walkthroughSteps.map((step, index) => {
            const direction = index % 2 === 0 ? 1 : -1;
            const offset = direction * stepShiftBase * (index + 1) * 0.38;

            return (
              <article
                key={step.title}
                className="walkthrough-step"
                style={{ transform: `translate3d(0, ${offset}px, 0)` }}
              >
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <div className="walkthrough-callout">{step.callout}</div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-section" aria-label="Minilo features">
        <div className="minilo-kicker">Features of Minilo Design</div>
        <h2 className="page-title">Original strengths, now with stronger UX flow</h2>

        <div className="features-grid">
          {homeFeatureCards.map((item) => (
            <article key={item.title} className="feature-card minilo-card">
              <div className="feature-card-media">
                <img src={item.src} alt={item.title} loading="lazy" />
              </div>
              <div className="feature-card-body">
                <h3 className="feature-card-title">{item.title}</h3>
                <p className="feature-card-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="feature-list">
          <div className="feature-list-item">Responsive breakpoints and spacing scales are consistently tokenized.</div>
          <div className="feature-list-item">Storybook now exposes foundation-level documentation beyond component demos.</div>
          <div className="feature-list-item">The website structure now follows clearer narrative hierarchy and call-to-action flow.</div>
        </div>
      </section>

      <section className="cta-band page-section" aria-label="Call to action">
        <h2>Build faster with one source of UI truth.</h2>
        <p>
          Use docs for implementation, use components for execution, and use Storybook to validate behavior
          before product release.
        </p>
        <div className="hero-actions">
          <a
            href="https://storybook.minilo.io/?path=/docs/documentation--docs"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta minilo-button minilo-button-secondary"
          >
            Open Storybook
          </a>
          <a
            href="https://github.com/minilo-design/minilo-design-system"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta minilo-button minilo-button-primary"
          >
            View Source Code
          </a>
        </div>
      </section>
    </>
  );
}
