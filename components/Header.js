import React from 'react';

const Header = () => (
  <header className='site-header'>
    <div className='fit-content'>
      <div className='brand'>
        <h1>
          <a href='/'>Yo'Edmonton</a>
        </h1>
        <p>
          <span>Live</span> Edmonton Hip Hop
        </p>
      </div>

      <nav>
        <ul>
          <li>
            <a href='mailto:yoedmonton@gmail.com'>Contact</a>
          </li>
          <li>
            <a href='/partners'>Partners</a>
          </li>
        </ul>
      </nav>
    </div>
    <style jsx>{`
      .site-header {
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
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
      h1 {
        font-size: 2.25rem;
      }
      a,
      a:visited {
        color: white;
        text-decoration: none;
      }
      p {
        margin-bottom: 0;
      }
      span {
        font-size: 1.15rem;
        font-weight: 700;
        font-style: italic;
      }
      nav {
        text-align: right;
        height: 100%;
      }
      nav ul {
        display: block;
      }
      nav a,
      a:visited {
        font-size: 1rem;
        text-transform: uppercase;
        color: white;
        margin-right: 1.25rem;
      }
      nav a:hover {
        color: gold;
      }
      @media (min-width: 450px) {
        h1 {
          font-size: 3.052rem;
        }
      }
      @media (min-width: 530px) {
        .fit-content {
          align-items: flex-end;
        }
        nav ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    `}</style>
  </header>
);

export default Header;
