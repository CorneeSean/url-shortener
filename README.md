# UrlShortener App
##  Overview

This repository contains the code for UrlShortener showcase app.

The repo contains:
 * a client widget in `/frontend` directory written in TypeScript and React
 * a server in `/server` directory, written in Node.js (Express) and TypeScript
 * simple demo website, located in `/demo` directory
 * npm build and run scripts in `"scripts"` section of `package.json` file
 
 Checklist - features to complete:
 1. ~~Documentation~~
 1. ~~Widget iFrame bootstrap script~~ 
 1. ~~Demo page~~ 
 1. ~~UrlShortener server~~
 1. ~~UrlShortener React app~~
 1. ~~Setting up npm scripts with Parcel and Nodemon for developement and "production" environments~~
 1. ~~Migrate server to Typecript~~
 
### Running the demo app

Demo app is a simulation of production set-up for widgets embedded on third party websites.

To run the demo app:

1. Clone the repo.
1. Make sure you have `Node.js` installed on your machine.
1. Open terminal (command prompt) window.
1. Step into main repo directory, run `npm install` and later `npm run start:demo`
1. The browser window should open at `localhost:9000` (demo server) and UrlShortener server should start at `localhost:8080`

NOTE: Tested to work with `node` version `12.14.1` on `Windows 10`. Not tested on Linux (yet)

### Running the development server

For further app development, run `npm run start:dev`.

Development server supports simultaneous live-reload both for frontend (widget bootstrap + React App) and backend development (Node.js server)
This allows for faster iteration and easier debugging, adding unminified code and source maps support.

### Widget bootstrap process on client side

Any client website willing to use the widget, should include the following script tag on their page:

```
    <script src="{{urlShortenerServerDomain}}/public/url-shortener.widget.js"></script>
```

This will load the widget bootstrap script that appends the widget iframe to the host page.

Please take a look at bootstrap sequence diagram below for more detailed process description:
![UrlShortener boostrap diagram](./docs/diagrams/url-shortener-bootstrap.png)

### Widget client-server architecture overview

![Client Server diagram](./docs/diagrams/client-server-communication.png)

