import React from 'react';

const colorTokens = [
  { name: 'Primary', cssVar: '--minilo-color-primary' },
  { name: 'Primary Strong', cssVar: '--minilo-color-primary-strong' },
  { name: 'Secondary', cssVar: '--minilo-color-secondary' },
  { name: 'Background', cssVar: '--minilo-color-background' },
  { name: 'Surface', cssVar: '--minilo-color-surface' },
  { name: 'Border', cssVar: '--minilo-color-border' },
  { name: 'Text', cssVar: '--minilo-color-text' },
  { name: 'Muted Text', cssVar: '--minilo-color-text-muted' },
  { name: 'Success', cssVar: '--minilo-color-success' },
  { name: 'Alert', cssVar: '--minilo-color-alert' },
];

const spacingTokens = [
  '--minilo-space-1',
  '--minilo-space-2',
  '--minilo-space-3',
  '--minilo-space-4',
  '--minilo-space-6',
  '--minilo-space-8',
  '--minilo-space-12',
];

const radiusTokens = ['--minilo-radius-sm', '--minilo-radius-md', '--minilo-radius-lg', '--minilo-radius-xl'];

const typographyTokens = [
  { label: 'H1', cssVar: '--minilo-font-size-h1', weight: 800 },
  { label: 'H2', cssVar: '--minilo-font-size-h2', weight: 700 },
  { label: 'H3', cssVar: '--minilo-font-size-h3', weight: 700 },
  { label: 'Body', cssVar: '--minilo-font-size-md', weight: 500 },
  { label: 'Small', cssVar: '--minilo-font-size-sm', weight: 500 },
];

const colorSwatchStyle = (variableName) => ({
  background: `var(${variableName})`,
});

const tokenValueStyle = (cssVar) => ({
  fontSize: '11px',
  color: 'var(--minilo-color-text-muted)',
});

function DesignTokensShowcase() {
  return (
    <div className="token-showcase minilo-card">
      <div>
        <div className="minilo-kicker">Foundation</div>
        <h2 className="page-title" style={{ marginTop: '8px', marginBottom: '8px' }}>
          Design Tokens
        </h2>
        <p className="page-copy" style={{ marginBottom: 0 }}>
          Core visual decisions are centralized in CSS variables and used across Storybook and the website.
        </p>
      </div>

      <section>
        <h3 style={{ margin: 0, color: 'var(--minilo-color-primary)' }}>Colors</h3>
        <div className="token-grid" style={{ marginTop: '10px' }}>
          {colorTokens.map((token) => (
            <article key={token.cssVar} className="token-swatch">
              <div className="token-swatch-color" style={colorSwatchStyle(token.cssVar)} />
              <div className="token-name">{token.name}</div>
              <div className="token-value">var({token.cssVar})</div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h3 style={{ margin: 0, color: 'var(--minilo-color-primary)' }}>Typography</h3>
        <div style={{ display: 'grid', gap: '8px', marginTop: '10px' }}>
          {typographyTokens.map((token) => (
            <div key={token.cssVar} className="token-swatch" style={{ display: 'grid', gap: '4px' }}>
              <span style={{ fontSize: `var(${token.cssVar})`, fontWeight: token.weight }}>
                {token.label} token preview
              </span>
              <span style={tokenValueStyle(token.cssVar)}>var({token.cssVar})</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 style={{ margin: 0, color: 'var(--minilo-color-primary)' }}>Spacing + Radius</h3>
        <div className="token-grid" style={{ marginTop: '10px' }}>
          {spacingTokens.map((token) => (
            <article key={token} className="token-swatch">
              <div
                style={{
                  width: `var(${token})`,
                  height: `var(${token})`,
                  minWidth: '8px',
                  minHeight: '8px',
                  background: 'var(--minilo-color-secondary)',
                  borderRadius: '2px',
                }}
              />
              <div className="token-name">Spacing</div>
              <div className="token-value">var({token})</div>
            </article>
          ))}

          {radiusTokens.map((token) => (
            <article key={token} className="token-swatch">
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  background: 'var(--minilo-color-secondary-soft)',
                  borderRadius: `var(${token})`,
                  border: '1px solid var(--minilo-color-border)',
                }}
              />
              <div className="token-name">Radius</div>
              <div className="token-value">var({token})</div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default {
  title: 'Foundations/Design Tokens',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Token source of truth for color, typography, spacing, radius, and theming used by Minilo components.',
      },
    },
  },
};

export const Overview = () => <DesignTokensShowcase />;
