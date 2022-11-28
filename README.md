# Active installations badge for HACS

This is a little nodejs rest api that will return a badge for GitHub of active installations for a given HACS integration.

## How to use

### docker compose
```bash
    docker-compose up -d
```

### docker run
```bash
    docker run -d -p 3000:3000 --name hacs-active-installations-badge kartoffeltoby/badge:latest
```

### nodejs
```bash
    npm install
    npm start
```

## Usage

### Example

```bash
    curl http://localhost:3000/badge/better_thermostat
```

### For GitHub

[![hacs_badge](https://badge.t-haber.de/badge/better_thermostat?cache=1)]()
```md
    [![hacs_badge](http://localhost:3000/badge/better_thermostat?cache=1)]()
```

### Using GitHub Actions
Look the config from this repo path after deploy to the badge is /badge.svg?cache=1

like: ``https://kartoffeltoby.github.io/hacs-statistics-badge/badge.svg?cache=1``
