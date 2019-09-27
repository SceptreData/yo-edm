import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout';

function area(img) {
  return img.height * img.width;
}
function getBestImage(imgFormat, images) {
  return images
    .filter(img => img.ratio == imgFormat)
    .reduce(
      (biggest, curImg) => {
        return area(curImg) > area(biggest) ? curImg : biggest;
      },
      { width: 0, height: 0 }
    );
}
function getDescription(event) {
  if (event.description) return event.description;
  if (event.info) return event.info;
  return 'This Artist has not provided a description for this event. It will probably be awesome!';
}
const Event = ({ event }) => {
  const wideImg = getBestImage('16_9', event.images);
  const squareImg = getBestImage('4_3', event.images);

  console.log(event);
  const venue = event._embedded.venues[0];
  if (
    venue.name ===
    'Edmonton Convention Centre (formerly Shaw Conference Centre)'
  ) {
    venue.name = 'The Edmonton Convention Centre';
  }
  const { priceRanges } = event;
  const description = getDescription(event);

  return (
    <Layout className='event-layout' title={event.name}>
      <div className='img-container'>
        <picture>
          <source srcSet={wideImg.url} media='(min-width: 400px)' />
          <img src={squareImg.url} alt={`${event.name} at ${venue.name}`} />
        </picture>
      </div>

      <section>
        <div className='event-details col'>
          <header>
            <h1>{event.name}</h1>
            <span> At {venue.name} </span>
          </header>

          <div className='purchase-info'>
            <div className='date-time'>
              <time className='event-date'>{event.dates.start.localDate}</time>
              <time className='event-time'>{event.dates.start.localTime}</time>
            </div>
            <a className='buy-btn' href={venue.url}>
              Buy Tickets
            </a>
            <span>
              {priceRanges && `$${Number(priceRanges[0].min).toFixed(2)}`}
            </span>
          </div>
        </div>

        <div className='event-description col'>
          <p>{description}</p>
        </div>
      </section>
      <style jsx>{`
        .img-container {
          width: 100%;
          background: rgba(0, 0, 0, 0.5);
          padding: 0.5rem;
          border: 1px solid lightgrey;
          backdrop-filter: blur(4px);
          margin-bottom: 1.5rem;
        }
        section {
          display: flex;
          flex-wrap: wrap;
        }
        img {
          margin: 0 auto;
          max-height: 420px;
          width: 100%;
          object-fit: cover;
        }
        h1 {
          padding-left: 0.5rem;
          font-family: -apple-system, BlinkMacFont, 'Roboto', sans-serif;
          margin-bottom: 0;
        }

        header span {
          margin-left: 0.5rem;
          font-size: 1.5rem;
          font-weight: 400;
        }

        .date-time {
          margin-right: 1.5rem;
        }
        time {
          padding-left: .5rem
          display: block;
        }
        .col {
          min-height: 167px;
          width: 100%;
        }
        .event-details {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          padding: 0.5rem;
          border: 1px solid lightgrey;
          margin-bottom: 1.5rem;
        }

        .purchase-info {
          font-size: 1rem;
          display: flex;
          align-items: flex-end;
        }

        .purchase-info span {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .buy-btn {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgb(243, 243, 243, 0.8);
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.2s ease-out;
        }

        .buy-btn:hover {
          background: rgb(255, 255, 255, 0.95);
          text-decoration: underline;
        }

        .event-description {
          background: rgb(0, 0, 0, 0.5);
          border: 1px solid lightgrey;
          padding: 1rem;
        }

        .event-description p {
          margin-bottom: 0;
        }

        @media only screen and (min-width: 720px) {
          section {
            display: flex;
            justify-content: space-between;
          }
          .event-details {
            width: 49%;
            margin-bottom: 0;
          }

          .event-description {
            width: 49%;
          }
        }
      `}</style>
    </Layout>
  );
};

Event.getInitialProps = async function(context) {
  const { id } = context.query;

  const res = await fetch(`https://yoedmonton.com/api/event/${id}`);
  // const res = await fetch(`https://yo-edmonton.sceptre.now.sh/api/event/${id}`);
  const event = await res.json();

  return { event };
};

export default Event;
