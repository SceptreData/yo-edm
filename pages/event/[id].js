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

const Event = ({ event }) => {
  const wideImg = getBestImage('16_9', event.images);
  const squareImg = getBestImage('4_3', event.images);

  const venue = event._embedded.venues[0];
  if (
    venue.name ===
    'Edmonton Convention Centre (formerly Shaw Conference Centre)'
  ) {
    venue.name = 'The Edmonton Convention Centre';
  }
  const { priceRanges } = event;

  return (
    <Layout title={event.name}>
      <picture>
        <source srcSet={wideImg.url} media='(min-width: 400px)' />
        <img src={squareImg.url} alt={`${event.name} at ${venue.name}`} />
      </picture>
      <h1>
        {event.name}
        <span> At {venue.name} </span>
      </h1>
      <div className='event-details'>
        <div className='date-time'>
          <time className='event-date'>{event.dates.start.localDate}</time>
          <time className='event-time'>{event.dates.start.localTime}</time>
        </div>
        <div className='purchase-info'>
          <span>
            {priceRanges && `$${Number(priceRanges[0].min).toFixed(2)}`}
          </span>
          <a className='buy-btn' href={venue.url}>
            Buy Tickets
          </a>
        </div>
      </div>
      <p></p>
      <style jsx>{`
        h1 {
          font-family: -apple-system, BlinkMacFont, 'Roboto', sans-serif;
          margin-bottom: 0;
        }

        h1 span {
          margin-left: 0.5rem;
          font-size: 1.5rem;
          font-weight: 400;
        }
        img {
          max-height: 420px;
          width: 100%;
          object-fit: cover;
        }
        time {
          display: block;
        }
        .event-details {
        }
        .purchase-info span {
          font-size: 1.5rem;
          font-weight: 700;
          display: block;
        }

        .buy-btn {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgb(243, 243, 243, 0.5);
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.2s ease-out;
        }

        .buy-btn:hover {
          background: rgb(255, 255, 255, 0.95);
          text-decoration: underline;
        }
      `}</style>
    </Layout>
  );
};

Event.getInitialProps = async function(context) {
  const { id } = context.query;

  // const res = await fetch(`https://yoedmonton.com/api/event/${id}`);
  const res = await fetch(`https://yo-edmonton.sceptre.now.sh/api/event/${id}`);
  const event = await res.json();

  return { event };
};

export default Event;
