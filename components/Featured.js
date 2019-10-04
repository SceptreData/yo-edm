const Featured = () => {
  return (
    <section className='featured'>
      <h2>Featured</h2>
      <div>
        <figure>
          <img src='../static/img/dls.jpg' alt='Discount Lion Safari' />
          <figcaption>
            <a
              href='https://discountlionsafari.bandcamp.com/'
              title='Discount Lion Safari'
            >
              Discount Lion Safari
            </a>
          </figcaption>
        </figure>
        <p>
          <strong>Discount Lion Safari </strong>
          is a hip hop duo featuring the eloquent Fawkes and groove magician
          Burgerfinger. This edmonton born and raised duo has been bringing
          crowds to their knees since 2017.
        </p>
      </div>

      <style jsx>{`
        .featured {
          padding: 20px;
          border: 1px solid lightgrey;
          backdrop-filter: blur(4px);
          background: rgba(0, 0, 0, 0.5);
          margin-bottom: 2rem;
          margin-right: 1rem;
        }
        figure {
          max-width: 350px;
          width: 100%;
          margin: 0 auto;
        }
        img {
          max-width: 100%;
          margin: 0 auto;
        }
        figcaption {
          text-align: center;
        }
        a,
        a:visited {
          color: gold;
          font-weight: 600;
        }
        a:hover {
          color: goldenrod;
        }

        p {
          padding: 1rem;
          max-width: 58ch;
        }

        @media (min-width: 720px) {
          div {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          figure {
            width: 50%;
            max-width: 200px;
            margin: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Featured;
