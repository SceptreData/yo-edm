import fetch from 'isomorphic-unfetch';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events?';
const API_STR = `apikey=${process.env.TMASTER_API_KEY}`;
const EDMONTON_QUERY = 'locale=*&city=Edmonton&countryCode=CA';

const HIP_HOP_SEARCH = `&classificationId=KnvZfZ7vAv1&${EDMONTON_QUERY}`;

function keywordSearch(keyword) {
  const cleanKeyWord = encodeURIComponent(keyword);
  return `&keyword=${cleanKeyWord}&${EDMONTON_QUERY}`;
}

function genreSearch(genre) {
  return `&classificationId=${genre}&${EDMONTON_QUERY}`;
}

function getEvents() {
  return fetch(BASE_URL + API_STR + HIP_HOP_SEARCH);
}

export default async function fetchEvents(req, res) {
  const events = await getEvents();
  const json = await events.json();
  res.send(json);
}
