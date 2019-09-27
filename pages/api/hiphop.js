import Cors from 'micro-cors';
import fetch from 'isomorphic-unfetch';

const MUSIC_CATEGORY = 103;
const HIP_HOP_SUBCAT = 3008;

// Lookup TicketFly
const TM_BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events?';
const TM_API_STR = `apikey=${process.env.TMASTER_API_KEY}`;
const TM_EDMONTON_QUERY = 'locale=*&city=Edmonton&countryCode=CA';
const TM_HIP_HOP_SEARCH = `&classificationId=KnvZfZ7vAv1&${TM_EDMONTON_QUERY}`;

const EB_BASE_URL = 'https://www.eventbriteapi.com/v3/events/search/';
const EB_API_STR = `&token=${process.env.EB_API_KEY}`;
const EB_HIPHOP_SEARCH =
  '?q=hip+hop&sort_by=date&location.address=Edmonton&categories=103&include_adult_events=on';
const urls = [
  // TICKETMASTER
  TM_BASE_URL + TM_API_STR + HIP_HOP_SEARCH
  //EVENTBRITE
];
function keywordSearch(keyword) {
  const cleanKeyWord = encodeURIComponent(keyword);
  return `&keyword=${cleanKeyWord}&${TM_EDMONTON_QUERY}`;
}

function genreSearch(genre) {
  return `&classificationId=${genre}&${TM_EDMONTON_QUERY}`;
}

async function getEvents() {
  return fetch(TM_BASE_URL + TM_API_STR + TM_HIP_HOP_SEARCH);
}

const cors = Cors({});

async function fetchEvents(req, res) {
  const events = await getEvents();
  const json = await events.json();
  res.status(200).send(json);
}

export default cors(fetchEvents);
