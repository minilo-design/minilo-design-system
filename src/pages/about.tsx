import SeoHead from '@/components/site/SeoHead';
import { aboutCopy, designPrinciples } from '@/data/site-content';

const ABOUT_DESCRIPTION =
  'Learn the vision, principles, and collaboration model behind the Minilo open-source design system.';

export default function AboutPage() {
  return (
    <>
      <SeoHead title="About" description={ABOUT_DESCRIPTION} path="/about" />

      <section className="page-intro">
        <div className="minilo-kicker">About</div>
        <h1 className="page-title">{aboutCopy.title}</h1>
        <p className="page-copy">
          Minilo is designed as a long-term, collaborative system where design language and implementation stay
          synchronized.
        </p>
      </section>

      <section className="about-layout page-section" aria-label="About content">
        <article className="about-panel">
          <p>{aboutCopy.paragraphOne}</p>
        </article>
        <article className="about-panel">
          <p>{aboutCopy.paragraphTwo}</p>
        </article>
        <article className="about-panel" style={{ gridColumn: '1 / -1' }}>
          <p>{aboutCopy.paragraphThree}</p>
        </article>
      </section>

      <section className="page-section minilo-card" style={{ padding: '20px' }} aria-label="Core principles">
        <div className="minilo-kicker">Core Principles</div>
        <h2 className="page-title" style={{ marginTop: '8px', marginBottom: '8px' }}>
          The standards behind each Minilo release
        </h2>
        <div className="principles-grid">
          {designPrinciples.map((principle) => (
            <article key={principle.title} className="principle-item">
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
