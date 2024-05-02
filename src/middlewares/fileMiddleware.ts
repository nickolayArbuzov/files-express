import multer from 'multer';
import { storage } from '../storage/fileStorage';

class FileMiddleware {
    public uploader: multer.Multer;

    constructor() {
        this.uploader = multer({ storage: storage });
    }

    single(fieldName: string) {
        return this.uploader.single(fieldName);
    }
}

export const fileMiddleware = new FileMiddleware();