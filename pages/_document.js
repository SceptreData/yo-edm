// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Html, Head, Main, NextScript } from 'next/document';
// import 'typeface-roboto';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='keywords' content='Live,Edmonton,Hip Hop' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link
            href='https://fonts.googleapis.com/css?family=Permanent+Marker|Roboto:300,500&display=swap'
            rel='stylesheet'
          />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
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
