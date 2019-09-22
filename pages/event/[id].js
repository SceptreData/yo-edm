import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout';

const Event = ({ event }) => (
  <Layout title={event.name}>
    <h1>{event.name}</h1>
  </Layout>
);

Event.getInitialProps = async function(context) {
  const { id } = context.query;

  // const res = await fetch(`https://yoedmonton.com/api/event/${id}`);
  const res = await fetch(`https://yo-edmonton.sceptre.now.sh/api/event/${id}`);
  console.log(res);

  const event = await res.json();

  console.log(`Fetched ${event.name}`);

  return { event };
};

export default Event;
