import Cors from 'micro-cors';
import fetch from 'isomorphic-unfetch';

const ENDPOINT = `https://app.ticketmaster.com/discovery/v2/events/`;
const API_KEY = `?apikey=${process.env.TMASTER_API_KEY}`;

async function getEvent(id) {
  return fetch(`${ENDPOINT}${id}` + API_KEY);
}

const cors = Cors({});
async function fetchEvent(req, res) {
  const {
    query: { id }
  } = req;
  const event = await getEvent(id);
  const json = await event.json();

  res.status(200).send(json);
}

export default cors(fetchEvent);
