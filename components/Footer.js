const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='fit-content'>
        <div className='brand'>
          <span>
            <a href='/'>Yo'Edmonton</a>
          </span>{' '}
          <p>
            {' '}
            <strong>Live</strong> Edmonton Hip Hop
          </p>
        </div>
        <nav>
          <ul>
            <li>
              <a href='/' title='Home'>
                HOME
              </a>
            </li>
            <li>
              <a href='/partners' title='Partners'>
                PARTNERS
              </a>
            </li>
            <li>
              <a href='mailto:yoedmonton@gmail.com' title='Contact'>
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .site-footer {
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          padding-bottom: 1rem;
          margin-bottom: 3rem;
          width: 100%;
        }
        .fit-content {
          padding: 0 20px;
          max-width: 960px;
          margin: 0 auto;
        }

        nav {
        }

        nav ul {
          font-size: 1rem;
          padding-top: 1.5rem;
          text-align: center;
        }

        li {
          display: inline;
          margin-right: 1.25rem;
        }

        li:last-of-type {
          margin-right: 0;
        }

        a,
        a:visited {
          color: white;
          text-decoration: none;
        }
        a:hover {
          color: gold;
        }
        .brand {
          text-align: center;
        }
        span {
          font-family: 'Permanent Marker', sans-serif;
          font-size: 2.5rem;
        }
        p {
          margin: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
