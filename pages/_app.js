import App from "next/app";
import Head from "next/head";

import Layout from "../components/Layout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="Description" content="Welcome to Mario Club!" />
          <meta name="theme-color" content="#2196f3" />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon-180x180.png"
          />

          <link rel="stylesheet" type="text/css" href="/static/normalize.css" />
          <link rel="stylesheet" type="text/css" href="/static/styles.css" />

          <title>Mario Club</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
