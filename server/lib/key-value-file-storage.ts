import { WriteStream, default as fs } from "fs";
import nodePath from 'path';

const CSV_SEPARATOR = ',';
const KV_SEPARATOR = ':';

type Cache = { [key: string]: string };


/**
 * Simple Key-value file storage with in-memory cache.
 *
 * Save data format is CSV key-value pairs:
 * key{separator}value,key{separator}value,key{separator}value
 */
export class KeyValueFileStorage {

    /** In-memory key-value object representation of stored data. */
    private readonly _cache: Cache;
    private readonly _fileStream: WriteStream;

    constructor(filePath: string) {
        this._cache = this._loadDataFromStorage(filePath);
        this._fileStream = this._createFileStream(filePath)
    }

    /**
     * Gets entry from storage by key
     */
    get(key: string): string {
        return this._cache[key];
    }

    /**
     * Adds entry to storage by key.
     */
    add(key: string, value: string): void {
        if (this._cache[key]) {
            throw new Error(`Entry already exists under ${key} key`);
        }

        try {
            this._saveKVPair(key, value);
        } catch {
            throw new Error('Failed to save KV pair');
        }

        this._cache[key] = value;
    }

    private _createFileStream(filePath: string): WriteStream {
        const dirPath = nodePath.dirname(filePath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, {recursive: true})
        }

        return fs.createWriteStream(filePath, {flags: 'a'});
    }

    private _loadDataFromStorage(filePath: string): Cache {
        if (!fs.existsSync(filePath)) {
            return {};
        }

        const fileContent: string = fs.readFileSync(filePath, 'utf-8');
        return fileContent
            .split(CSV_SEPARATOR)
            .filter(val => !!val)
            .map(KVPair => KVPair.split(KV_SEPARATOR))
            .reduce((cache, [key, value]) => {
                cache[key] = value;
                return cache;
            }, {} as Cache);
    }

    private _saveKVPair(key: string, value: string) {
        this._fileStream.write(key + KV_SEPARATOR + value + CSV_SEPARATOR);
    }
}
