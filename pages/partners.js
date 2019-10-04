import Layout from '../components/Layout';

const Partners = () => {
  return (
    <Layout title="Partners - Yo'Edmonton">
      <section>
        <h1>Partners</h1>
        <ul>
          <li>
            <a href='http://www.bertabeer.ca'>Alberta Craft Beer</a>
          </li>
          <li>
            <a href='#'>Davis' Animation Website</a>
          </li>
        </ul>
      </section>
      <style jsx>{`
        section {
          padding: 20px;
          border: 1px solid lightgrey;
          backdrop-filter: blur(4px);
          background: rgba(0, 0, 0, 0.5);
          margin-bottom: 2rem;
          margin-right: 1rem;
        }
        a,
        a:visited {
          color: white;
          text-decoration: none;
        }
        a:hover {
          color: gold;
        }
      `}</style>
    </Layout>
  );
};

export default Partners;
