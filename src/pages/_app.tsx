import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SITE_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/doc', label: 'Docs' },
  { href: '/components', label: 'Components' },
  { href: '/about', label: 'About' },
];

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="site-brand" aria-label="Minilo Design home">
            <div className="site-title">Minilo Design</div>
            <div className="site-subtitle">Minimal design system for modern products</div>
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {SITE_LINKS.map((item) => {
              const active = router.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`site-nav-link ${active ? 'active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href="https://storybook.minilo.io/?path=/docs/documentation--docs"
              className="site-nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Storybook
            </a>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Component {...pageProps} />
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <span>{`Copyright ${currentYear} © Minilo Design`}</span>
          <span>Consistent UI patterns from token to product.</span>
        </div>
      </footer>
    </div>
  );
}
