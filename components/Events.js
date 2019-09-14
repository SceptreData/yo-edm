import useFetch from './useFetch';
import LoadingBars from './LoadingBars';

function unpackEvent(event) {
  // if (event !== undefined) {
  const { name, dates, images, url } = event;
  const { genre, subgenre } = event.classifications[0];
  const venue = event._embedded.venues[0];

  return { name, dates, images, url, genre, subgenre, venue };
  // }
  // return null;
}

const EventItem = ({ src }) => {
  const event = unpackEvent(src);
  return (
    <li>
      <h3>{event.name}</h3>
      <h4>{event.subgenre}</h4>
      <time className='event-time'>{event.dates.start.localTime}</time>
      <time className='event-date'>{event.dates.start.localDate}</time>
      <a href={event.url}>
        {event.venue.name}
        <span>→</span>
      </a>
      <style jsx>{`
        time {
          display: block;
        }
        a,
        a:visited {
          color: gold;
          text-decoration: none;
        }

        span {
          font-size: 2rem;
        }

        a:hover {
          color: goldenrod;
        }
      `}</style>
    </li>
  );
};

const Events = () => {
  const res = useFetch('https://yo-edmonton.sceptre.now.sh/api/hiphop', {});
  // const res = useFetch('https://localhost:3000/api/hiphop', {});

  if (!res.response) {
    return (
      <section className='root'>
        <LoadingBars />
        <style jsx>{`
          .root {
            padding: 20px;
            border: 1px solid lightgrey;
            backdrop-filter: blur(4px);
            background: rgba(0, 0, 0, 0.5);
            margin-bottom: 2rem;
            margin-right: 1rem;
          }
        `}</style>
      </section>
    );
  }

  const events = res.response._embedded.events;
  return (
    <section className='root'>
      <ul>
        {events.map(event => (
          <li>
            <EventItem src={event} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .root {
          padding: 20px;
          border: 1px solid lightgrey;
          backdrop-filter: blur(4px);
          background: rgba(0, 0, 0, 0.5);
          margin-bottom: 2rem;
          margin-right: 1rem;
        }
        ul {
          list-style: none;
        }
      `}</style>
    </section>
  );
};
export default Events;
