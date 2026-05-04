const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1509062522246-3755977927d7',
  'https://images.unsplash.com/photo-1559027615-cd4628902d4a',
  'https://images.unsplash.com/photo-1566125882500-87e10f726cdc',
  'https://images.unsplash.com/photo-1502781252888-9143ba7f074e',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
  'https://images.unsplash.com/photo-1581579438747-104c53d7fbc4',
  'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98',
  'https://images.unsplash.com/photo-1608555855762-2b657eb1c348',
  'https://images.unsplash.com/photo-1427504494785-319ce515cd69',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b',
  'https://images.unsplash.com/photo-1547592180-85f173990554',
  'https://images.unsplash.com/photo-1542810634-71277d95dcbb',
  'https://images.unsplash.com/photo-1516307365426-bea591f05011'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${res.statusCode} : ${url}`);
  }).on('error', (e) => {
    console.error(`Error with ${url}: ${e.message}`);
  });
});
