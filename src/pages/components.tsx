import SeoHead from '@/components/site/SeoHead';
import { componentCategories, FIGMA_URL } from '@/data/site-content';

const COMPONENTS_DESCRIPTION =
  'Explore Minilo component categories, implementation coverage, and direct links to Figma and source code.';

export default function ComponentsPage() {
  return (
    <>
      <SeoHead title="Components" description={COMPONENTS_DESCRIPTION} path="/components" />

      <section className="page-intro">
        <div className="minilo-kicker">Component Library</div>
        <h1 className="page-title">Reusable building blocks for your product teams</h1>
        <p className="page-copy">
          Your core component data remains intact and is now organized for faster scanning, validation, and
          handoff between design and development.
        </p>

        <div className="resource-links">
          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Open Figma File
          </a>
          <a
            href="https://github.com/minilo-design/minilo-design-system"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Open GitHub Repo
          </a>
          <a
            href="https://storybook.minilo.io/?path=/docs/documentation--docs"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Open Storybook
          </a>
        </div>
      </section>

      <section className="page-section components-grid" aria-label="Component categories">
        {componentCategories.map((category) => (
          <article key={category.name} className="components-grid-card">
            <span className="minilo-chip">{category.coverage}</span>
            <h3>{category.name}</h3>
            <p>{category.summary}</p>
          </article>
        ))}
      </section>

      <section className="page-section minilo-card" style={{ padding: '24px' }} aria-label="Component map">
        <div className="minilo-kicker">Visual Map</div>
        <h2 className="page-title" style={{ marginTop: '8px', marginBottom: '8px' }}>
          Full component overview
        </h2>
        <p className="page-copy">
          This keeps your original component overview artwork and places it in a cleaner context for reference.
        </p>
        <div style={{ marginTop: '16px' }}>
          <img
            src="/assets/Components.svg"
            alt="Minilo components visual map"
            style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }}
          />
        </div>
      </section>
    </>
  );
}
