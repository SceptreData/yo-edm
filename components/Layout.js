import Header from './Header';
import Head from 'next/head';
const Layout = ({ title, children }) => {
  return (
    <div className='page-layout'>
      <Head>
        <meta name='keywords' content='Live,Edmonton,Hip Hop' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          href='https://fonts.googleapis.com/css?family=Permanent+Marker|Roboto:300,500&display=swap'
          rel='stylesheet'
        />
        <link
          rel='shortcut icon'
          type='image/x-icon'
          href='/static/favicon.ico'
        />
        <title>{title}</title>
      </Head>
      {/* <Header /> */}
      <main>{children}</main>
      <style jsx global>
        {`
          /* RESET */
          html {
            box-sizing: border-box;
            font-size: 100%;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          ol,
          ul {
            margin: 0;
            padding: 0;
            font-weight: normal;
          }

          ol,
          ul {
            list-style: none;
          }

          img {
            max-width: 100%;
            height: auto;
          }

          /*
           * MY STYLES HERE
           */
          html {
            font-family: 'Roboto', sans-serif;
            background: url('/static/img/concert-big.jpg') no-repeat center
              center fixed;
            background-size: cover;
            color: #fff;
            background-color: rgba(255, 255, 255, 0.5);
          }
          body {
            position: relative;
          }
          h1 {
            font-family: 'Permanent Marker', sans-serif;
          }
          p {
            margin-bottom: 1.25em;
            font-weight: 300;
          }

          main {
            position: relative;
            max-width: 960px;
            margin: 0 auto;
          }

          h2,
          h3,
          h4,
          h5 {
            margin: 0rem 0 1rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            line-height: 1.15;
          }

          h1 {
            margin-top: 0;
            font-size: 3.052em;
          }

          h2 {
            font-size: 2.441em;
          }

          h3 {
            font-size: 1.953em;
          }

          h4 {
            font-size: 1.563em;
          }

          h5 {
            font-size: 1.25em;
          }

          small,
          .text_small {
            font-size: 0.8em;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
