import Head from 'next/head';

type SeoHeadProps = {
  title: string;
  description: string;
  path?: string;
};

const SITE_NAME = 'Minilo Design';
const SITE_URL = 'https://minilo.io';

export default function SeoHead({ title, description, path = '' }: SeoHeadProps) {
  const absoluteUrl = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#003078" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="design system, Minilo, UI components, web design, responsive design, modern UI, adaptive UI"
      />
      <meta name="author" content={SITE_NAME} />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <meta property="og:title" content={`${title} | ${SITE_NAME}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${SITE_NAME}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/logo.png" />
    </Head>
  );
}
