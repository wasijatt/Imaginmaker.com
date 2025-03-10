import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/siteicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/siteicon.svg" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/siteicon-32x32.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/siteicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
