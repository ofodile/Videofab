import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';

const hostname = 'https://www.exclusivefab.com.ng';

const categories = [  
  { url: '/', changefreq: 'weekly', priority: 0.8 },
  { url: '/anal', changefreq: 'weekly', priority: 0.8 },
  { url: '/', changefreq: 'weekly', priority: 0.8 },
  { url: '/amateur', changefreq: 'weekly', priority: 0.8 },
  { url: '/african', changefreq: 'weekly', priority: 0.8 },
  { url: '/anal', changefreq: 'weekly', priority: 0.8 },
  { url: '/arab', changefreq: 'weekly', priority: 0.8 },
  { url: '/asian', changefreq: 'weekly', priority: 0.8 },
  { url: '/bdsm', changefreq: 'weekly', priority: 0.8 },
  { url: '/big-ass', changefreq: 'weekly', priority: 0.8 },
  { url: '/big-dick', changefreq: 'weekly', priority: 0.8 },
  { url: '/big-tits', changefreq: 'weekly', priority: 0.8 },
  { url: '/black', changefreq: 'weekly', priority: 0.8 },
  { url: '/blonde', changefreq: 'weekly', priority: 0.8 },
  { url: '/blowjob', changefreq: 'weekly', priority: 0.8 },
  { url: '/bmw', changefreq: 'weekly', priority: 0.8 },
  { url: '/bondage', changefreq: 'weekly', priority: 0.8 },
  { url: '/brunette', changefreq: 'weekly', priority: 0.8 },
  { url: '/bukkake', changefreq: 'weekly', priority: 0.8 },
  { url: '/couple', changefreq: 'weekly', priority: 0.8 },
  { url: '/cowgirl', changefreq: 'weekly', priority: 0.8 },
  { url: '/creampie', changefreq: 'weekly', priority: 0.8 },
  { url: '/cum', changefreq: 'weekly', priority: 0.8 },
  { url: '/cumshot', changefreq: 'weekly', priority: 0.8 },
  { url: '/ebony', changefreq: 'weekly', priority: 0.8 },
  { url: '/family', changefreq: 'weekly', priority: 0.8 },
  { url: '/female-orgasm', changefreq: 'weekly', priority: 0.8 },
  { url: '/fetish', changefreq: 'weekly', priority: 0.8 },
  { url: '/fingering', changefreq: 'weekly', priority: 0.8 },
  { url: '/fisting', changefreq: 'weekly', priority: 0.8 },
  { url: '/footjob', changefreq: 'weekly', priority: 0.8 },
  { url: '/gangbang', changefreq: 'weekly', priority: 0.8 },
  { url: '/handjob', changefreq: 'weekly', priority: 0.8 },
  { url: '/hardcore', changefreq: 'weekly', priority: 0.8 },
  { url: '/homemade', changefreq: 'weekly', priority: 0.8 },
  { url: '/indian', changefreq: 'weekly', priority: 0.8 },
  { url: '/Interracial', changefreq: 'weekly', priority: 0.8 },
  { url: '/japanese', changefreq: 'weekly', priority: 0.8 },
  { url: '/latina', changefreq: 'weekly', priority: 0.8 },
  { url: '/lesbian', changefreq: 'weekly', priority: 0.8 },
  { url: '/lingerie', changefreq: 'weekly', priority: 0.8 },
  { url: '/massage', changefreq: 'weekly', priority: 0.8 },
  { url: '/mature', changefreq: 'weekly', priority: 0.8 },
  { url: '/masturbation', changefreq: 'weekly', priority: 0.8 },
  { url: '/milf', changefreq: 'weekly', priority: 0.8 },
  { url: '/nurses', changefreq: 'weekly', priority: 0.8 },
  { url: '/orgy', changefreq: 'weekly', priority: 0.8 },
  { url: '/outdoor', changefreq: 'weekly', priority: 0.8 },
  { url: '/pissing', changefreq: 'weekly', priority: 0.8 },
  { url: '/public', changefreq: 'weekly', priority: 0.8 },
  { url: '/pussy', changefreq: 'weekly', priority: 0.8 },
  { url: '/red-head', changefreq: 'weekly', priority: 0.8 },
  { url: '/romantic', changefreq: 'weekly', priority: 0.8 },
  { url: '/rough-sex', changefreq: 'weekly', priority: 0.8 },
  { url: '/sleep', changefreq: 'weekly', priority: 0.8 },
  { url: '/small-tits', changefreq: 'weekly', priority: 0.8 },
  { url: '/squirt', changefreq: 'weekly', priority: 0.8 },
  { url: '/striptease', changefreq: 'weekly', priority: 0.8 },
  { url: '/teen', changefreq: 'weekly', priority: 0.8 },
  { url: '/threesome', changefreq: 'weekly', priority: 0.8 },
  { url: '/toys', changefreq: 'weekly', priority: 0.8 },
  { url: '/virgin', changefreq: 'weekly', priority: 0.8 },
  { url: '/yoga', changefreq: 'weekly', priority: 0.8 }
  // Add all 60 categories here
];

const posts = [
  // Add individual posts URLs here, if needed
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream(path.join(path.resolve(), 'public', 'sitemap.xml'));

  sitemap.pipe(writeStream);

  categories.forEach(category => sitemap.write(category));
  posts.forEach(post => sitemap.write(post));
  
  sitemap.end();

  streamToPromise(sitemap)
    .then(() => console.log('Sitemap created!'))
    .catch(err => console.error('Error creating sitemap:', err));
}

generateSitemap();

