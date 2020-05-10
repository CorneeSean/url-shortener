# UrlShortener App
##  Overview

This repository contains code for UrlShortener showcase app.

The repo will ultimately contain:
 * a client widget in `/frontend` directory, written in React - currently only widget bootstrap
 * a server in `/server` directory, written in Go or Node.js (Express)
 * demo website connecting the two parts above, located in `/demo` directory
 
### Running the app
Currently, only loading the initial widget script on demo page is supported.

To run the app:

1. Clone the repo.
1. Make sure you have `Node.js` installed on your machine.
1. Open terminal (command prompt) window.
1. Step into `/frontend` directory, run `npm install` and run `npm run server`.
1. In another terminal window, step into `/demo` directory, run `npm install` and `npm run server`. This should open the browser on `http://localhost:9000/index.html`. 

### Widget bootstrap process on client side

Any client website willing to use the widget, should include the following script tag on their page:

```
    <script src="{{urlShortenerServerDomain}}/url-shortener.widget.js"></script>
```

This will load the widget bootstrap script that appends the widget iframe to the host page.

Please take a look at bootstrap sequence diagram below for more detailed process description:
![UrlShortener boostrap diagram](/docs/diagrams/url-shortener-bootstrap.png)

### Widget client-server architecture overview
// TODO
