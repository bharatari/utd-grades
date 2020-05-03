import React from 'react';
import './styles.css';
import 'antd/dist/antd.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>UTD Grades</title>
        <meta name="description" content="See how students did in any given class at UT Dallas. And it's free, forever." />
        <script async defer data-domain="utdgrades.com" src="https://plausible.io/js/plausible.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-128111650-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'UA-128111650-1');`
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
