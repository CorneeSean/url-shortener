import { Express } from "express";
import { ServerDeps } from "./deps";
import { urlShortenerController } from "./controllers/url-shortener.controller";

const ROUTES = {
    root: '/',
    favicon: '/favicon.ico'
};

export function bootstrapApi(app: Express, deps: ServerDeps) {
    app.get(ROUTES.root, (req, res) => {
        res.sendFile(deps.config.indexPath)
    });
    app.get(ROUTES.favicon, (req, res) => {
        // TODO: Add favicon in the future
        res.status(404);
    });

    urlShortenerController(ROUTES.root, app, deps);
}
