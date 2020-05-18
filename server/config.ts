import { CorsOptions } from "cors";
import path from 'path';
import env from '../common/env';

export type ServerConfig = {
    port: number,
    host: string,
    corsOptions: CorsOptions,
    storagePath: string,
    publicPath: string,
    indexPath: string
}

const corsOptions: CorsOptions = {
    origin: env.frontendHost,
};

export const config: ServerConfig = {
    port: env.serverPort,
    host: env.serverHost,
    corsOptions,
    storagePath: path.resolve('storage', env.isDev ? 'storage.dev.txt' : 'storage.txt'),
    publicPath: path.resolve(__dirname + '/public'),
    indexPath: path.resolve(__dirname + '/public/index.html'),
};
