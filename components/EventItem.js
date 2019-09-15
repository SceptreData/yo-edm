function unpackEvent(event) {
  const { name, dates, images, url } = event;
  const { genre, subGenre } = event.classifications[0];
  const venue = event._embedded.venues[0];

  return { name, dates, images, url, genre, subGenre, venue };
}

const EventItem = ({ src }) => {
  const event = unpackEvent(src);
  return (
    <li>
      <div className='name'>
        <h3>{event.name}</h3>
        <h4>{event.subGenre.name}</h4>
      </div>
      <div className='event-details'>
        <div>
          <time className='event-time'>{event.dates.start.localTime}</time>
          <time className='event-date'>{event.dates.start.localDate}</time>
        </div>
        <a className='venue-link' href={event.url} title={event.venue.name}>
          {event.venue.name}
          <span>→</span>
        </a>
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
          background: rgb(255, 255, 255, 0.15);
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

        span {
          font-size: 1.25rem;
        }
      `}</style>
    </li>
  );
};

export default EventItem;
