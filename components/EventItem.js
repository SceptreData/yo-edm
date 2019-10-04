import Link from 'next/link';

function unpackEvent(event) {
  const { id, name, dates, images, url } = event;
  const { genre, subGenre } = event.classifications[0];
  const venue = event._embedded.venues[0];

  return { id, name, dates, images, url, genre, subGenre, venue };
}
const EventItem = ({ src }) => {
  const event = unpackEvent(src);
  return (
    <li>
      <div className='name'>
        <Link href='/event/[id]' as={`/event/${event.id}`}>
          <a>
            <h3>{`${event.name}`}</h3>
            <h4>{event.subGenre.name}</h4>
          </a>
        </Link>
      </div>

      <div className='event-details'>
        <div>
          <time className='event-date'>{event.dates.start.localDate}</time>
          <time className='event-time'>{event.dates.start.localTime}</time>
        </div>

        <Link href='/event/[id]' as={`/event/${event.id}`}>
          <a className='venue-link' title={event.venue.name}>
            {event.venue.name}
            <span>→</span>
          </a>
        </Link>
      </div>

      <style jsx>{`
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid lightgrey;
          padding: 0 0.25rem;
        }

        li:hover {
          background: rgb(104, 118, 129, 0.5);
        }
        .name {
          width: 400px;
          font-size: 1.563em;
        }
        h3 {
          font-size: 1.25rem;
          margin-top: 0.25rem;
          margin-bottom: 0.25rem;
        }
        h4 {
          font-size: 0.8rem;
        }
        .event-details {
          text-align: right;
        }
        time {
          display: block;
        }
        a,
        a:visited {
          color: gold;
          text-decoration: none;
        }

        a:hover {
          color: goldenrod;
        }

        .name a,
        .name a:visited {
          color: white;
          transition: color 0.2s ease-out;
        }

        .name a:hover {
          color: gold;
        }

        span {
          font-size: 1.25rem;
        }
      `}</style>
    </li>
  );
};

export default EventItem;
