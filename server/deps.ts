import { config, ServerConfig } from "./config";
import { KeyValueFileStorage } from "./lib/key-value-file-storage";

export type ServerDeps = {
    config: ServerConfig,
    storage: KeyValueFileStorage
}

export const deps: ServerDeps = {
    config,
    storage: new KeyValueFileStorage(config.storagePath)
};
