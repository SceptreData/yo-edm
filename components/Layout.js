import Header from './Header';

export default function Layout(props) {
  return (
    <div className='page-layout'>
      {/* <Header /> */}
      <main>{props.children}</main>
      <style jsx global>
        {`
          /* RESET */
          /*! minireset.css v0.0.5 | MIT License | github.com/jgthms/minireset.css */
          html,
          body,
          p,
          ol,
          ul,
          li,
          dl,
          dt,
          dd,
          blockquote,
          figure,
          fieldset,
          legend,
          textarea,
          pre,
          iframe,
          hr,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin: 0;
            padding: 0;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-size: 100%;
            font-weight: normal;
          }
          ul {
            list-style: none;
          }
          button,
          input,
          select,
          textarea {
            margin: 0;
          }
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          img,
          video {
            height: auto;
            max-width: 100%;
          }
          iframe {
            border: 0;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
          td,
          th {
            padding: 0;
            text-align: left;
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
            margin: 2.75rem 0 1rem;
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
}
