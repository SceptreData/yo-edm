import Layout from '../components/Layout.js';
import Link from 'next/link';
import {useState, useEffect} from 'react'

import fetch from 'isomorphic-unfetch';

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

const Index = ({ events }) => {
  return (
    <Layout title="Yo'Edmonton - The home of Live Edmonton Hip Hop.">
      <h1>Yo'Edmonton</h1>
      <p>Live Edmonton Hip Hop</p>

      <ul className='upcoming-shows'></ul>

      {/* <section>
        <ul>
          {events.map(event => (
            <EventItem key={event.id} src={event} />
          ))}
        </ul> */}
      {/* </section> */}
      <section>
        <h2>Featured</h2>
        <p>
          Discount Lion Safari is a hip hop duo featuring the eloquent Fawkes
          and groove magician Burgerfinger. This edmonton born and raised duo
          has been bringing crowds to their knees since 2017.
        </p>
      </section>

      <div className='flex-row'>
        <section>
          <h3>Get your Event Listed</h3>
          <p>
            Are you hosting an event? Let us know! We want to bring fans and
            content-creators together, with the goal of helping you grow your
            brand as painlessly as possible. YoEdmonton is the best way to let
            the people Edmonton know what’s up. Best of all, listing yourself on
            Yo Edmonton is completely free!
          </p>
          <p>
            Do you have pictures of an event? We would love to see them. Your
            photos could be featured here on the site. Every week we feature a
            different artist or crew, and we would love your photographs to do
            it.
          </p>
        </section>
        <section>
          <h3>About Yo'Edmonton</h3>
          <p>
            Yo’ Edmonton is the best up and coming Hip Hop and Rap event listing
            site in Edmonton. Founded in 2019, the owner was fed up trying to
            figure out where events were happening in Edmonton. At Yo’ Edmonton,
            we are bringing you the latest up-to-date information about shows
            happening around the city.
          </p>
          <p>
            Yo Edmonton is a promotional platform where artists and fans can
            promote their favorite artists, merchandise and venues. Yo Edmonton
            is built for you to engage with the Edmonton hip hop community.
          </p>
        </section>
      </div>
      <style jsx>{`
        @media only screen and (min-width: 720px) {
          .flex-row {
            display: flex;
          }
        }

        h2 {
          margin-top: 0;
        }
        section {
          position: relative;
          padding: 20px;
          border: 1px solid lightgrey;
          backdrop-filter: blur(4px);
          background: rgba(0, 0, 0, 0.5);
          margin-bottom: 2rem;
          margin-right: 1rem;
        }
        a {
          font-family: 'Roboto';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  );
};

const API_STR = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.TMASTER_API_KEY}`;

const HIPHOP_GENRE_ID = 'KnvZfZ7vAv1';
const EDMONTON_QUERY = 'locale=*&city=Edmonton&countryCode=CA';

function keywordSearch(keyword) {
  const cleanKeyWord = encodeURIComponent(keyword);
  return `&keyword=${cleanKeyWord}&${EDMONTON_QUERY}`;
}

function genreSearch(genre) {
  return `&classificationId=${genre}&${EDMONTON_QUERY}`;
}

Index.getInitialProps = async ({ req }) => {
  if (req){
    const res = await fetch(API_STR + genreSearch(HIPHOP_GENRE_ID));
    const json = await res.json();
    return { events: json._embedded.events };
  } else {
    const res = fetch(API_STR + genreSearch(HIPHOP_GENRE_ID)).then( events => set
    return {}
  }
};

export default Index;
