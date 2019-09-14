function unpackEvent(event) {
  const { name, dates, images, url } = event;
  const { genre, subgenre } = event.classifications[0];
  const venue = event._embedded.venues[0];

  return { name, dates, images, url, genre, subgenre, venue };
}

const EventItem = ({ src }) => {
  const event = unpackEvent(src);
  return (
    <li>
      <div className='name'>
        <h3>{event.name}</h3>
        <h4>{event.subgenre}</h4>
      </div>
      <div>
        <time className='event-time'>{event.dates.start.localTime}</time>
        <time className='event-date'>{event.dates.start.localDate}</time>
      </div>
      <a href={event.url}>
        {event.venue.name}
        <span>→</span>
      </a>
      <style jsx>{`
        li {
          display: flex;
          align-items: center;
          border: 1px solid lightgrey;
        }
        .name {
          border-right: 1px solid lightgrey;
        }
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

export default EventItem;
