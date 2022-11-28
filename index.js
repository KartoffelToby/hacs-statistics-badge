const express = require('express');
const apicache = require('apicache');
const app = express()
const port = 3000

let cache = apicache.options({
  headers: {
    'cache-control': 'no-cache',
    'Content-Type': 'image/svg+xml'
  },
}).middleware

app.get('/badge/:name',cache('1 day'),async(req,res) => {
    const data = await fetch('https://analytics.home-assistant.io/custom_integrations.json');
    const custom_integrations = await data.json();
    const badgeData = await fetch(`https://img.shields.io/badge/Active_installations-${custom_integrations[req.params.name].total}-2ea44f?style=for-the-badge`);
    const badge = await badgeData.text();
    const headers = {
        'Content-Type': 'image/svg+xml'
    }
    res.writeHead(200, headers);
    res.end(badge);
});

app.get('**', (req, res) => {
  res.send('-')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})