const fs = require('fs');
const integration = process.env.INTEGRATION || 'better_thermostat';

(async() => {
    const data = await fetch('https://analytics.home-assistant.io/custom_integrations.json');
    const custom_integrations = await data.json();
    const badgeData = await fetch(`https://img.shields.io/badge/Active_installations-${custom_integrations[integration].total}-2ea44f?style=for-the-badge`);
    const badge = await badgeData.text();
    fs.writeFileSync('dist/badge.svg', badge);
})();