import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='viewport' content='width=device-width, user-scalable=no' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap'
            rel='stylesheet'
          />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='msapplication-config' content='/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#ffffff' />
          <style>
            {`/* Color scheme */
@media (prefers-color-scheme: light) {
  :root {
    --accent: #ff4500;
    --accent-light: #ffa280;
    --main: #333333;
    --background: #ffffff;
    --background-op: rgba(255, 255, 255, 0.5);
    --grey97: #f2f2f7;
    --grey93: #e8e8ed;
    --grey75: #b8b8bf;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --accent: #ff7440;
    --accent-light: #993c1a;
    --main: #d0d0d9;
    --background: #252526;
    --background-op: rgba(37, 37, 38, 0.5);
    --grey97: #38383b;
    --grey93: #3d3d40;
    --grey75: #626266;
  }
}`}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
