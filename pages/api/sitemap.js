import fetch from 'isomorphic-unfetch';
import Cors from 'micro-cors';
import { createSitemap } from 'sitemap';
import xml from 'xml-loader';

import staticSitemap from 'xml-loader!../../static/sitemap.xml';

const cors = Cors({});

const getEventURLS = eventData => {
  const { events } = eventData._embedded;
  return events.map(event => `/event/${event.id}`);
};

//  Function to build our sitemap, including dynamic links.
async function getSitemap(req, res) {
  const { url: rawStaticUrls } = staticSitemap.urlset;
  const staticUrls = rawStaticUrls.map(url => {
    return { url: url.loc, lastmod: url.lastmod, priority: url.priority };
  });

  const eventData = await fetch('https://yoedmonton.com/api/hiphop');
  const json = await eventData.json();
  const dynamicUrls = getEventURLS(json);

  const sitemap = createSitemap({
    hostname: 'https://www.yoedmonton.com',
    cacheTime: 600000, //600 Sec Cache purge period
    urls: [...staticUrls, { url: '/', changefreq: 'always', priority: 1.0 }]
  });

  dynamicUrls.map(url =>
    sitemap.add({ url: url, lastmod: Date.now(), priority: 0.6 })
  );

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap.toString());
}

export default cors(getSitemap);
