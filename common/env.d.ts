type Env = {
    isProd: boolean,
    isDev: boolean,
    serverPort: number,
    frontendHost: string,
    serverHost: string,
}

declare const env: Env;
export default env;
