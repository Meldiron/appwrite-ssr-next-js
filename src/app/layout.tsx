import "./globals.css";
import "@appwrite.io/pink/dist/pink.css";
import "@appwrite.io/pink-icons/dist/icon.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width" />

      <title>Almost SSR | Next.js</title>
      <meta
        name="description"
        content="Appwrite Loves Next.js! Demo application with authorized server-side and client-side rendering."
      />

      <meta property="og:url" content="https://next-js.ssr.almostapps.eu/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Almost SSR | Next.js" />
      <meta
        property="og:description"
        content="Appwrite Loves Next.js! Demo application with authorized server-side and client-side rendering."
      />
      <meta
        property="og:image"
        content="https://next-js.ssr.almostapps.eu/cover.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="next-js.ssr.almostapps.eu" />
      <meta
        property="twitter:url"
        content="https://next-js.ssr.almostapps.eu/"
      />
      <meta name="twitter:title" content="Almost SSR | Next.js" />
      <meta
        name="twitter:description"
        content="Appwrite Loves Next.js! Demo application with authorized server-side and client-side rendering."
      />
      <meta
        name="twitter:image"
        content="https://next-js.ssr.almostapps.eu/cover.png"
      />

      <body className="theme-dark">{children}</body>
    </html>
  );
}
