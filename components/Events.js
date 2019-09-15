import useFetch from './useFetch';
import LoadingBars from './LoadingBars';
import EventItem from './EventItem';

import testEvents from '../data/testEvents';

const Events = () => {
  // const res = useFetch('https://yoedmonton.com/api/hiphop', {});
  const res = useFetch('/api/hiphop', {});
  // const res = useFetch('https://yo-edmonton.sceptre.now.sh/api/hiphop', {});
  // const res = useFetch('https://localhost:3000/api/hiphop', {});

  // show a loading animation if results haven't arrived yet.
  if (!res.response) {
    return <LoadingBars />;
  }

  // Display our list of events.
  const events = res.response._embedded.events;
  // console.log(testEvents);
  // const events = testEvents._embedded.events;
  return (
    <section className='root'>
      <h2>Events</h2>
      <ul>
        {events.map(event => (
          <EventItem src={event} key={event.id} />
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
        h2 {
          padding: 0 0.25rem;
        }
        ul {
          list-style: none;
        }
      `}</style>
    </section>
  );
};
export default Events;
