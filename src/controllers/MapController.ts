import {Request, Response} from 'express';
import { readFileSync } from 'fs';
import path from 'path';

export default class MapController {

    async index(request: Request, response: Response) {

        const filters = request.query;

        const limit = filters.limit as any;

        if (!limit) {
            return response.status(400).json({
                error: 'Missing filters (limit) to search classes'
            })
        }

        const dataFile = JSON.parse(readFileSync(path.resolve('./poi.json'), 'utf-8'));

        const markers = dataFile ? dataFile.slice(0, limit) : [];

        return response.json(markers);
    }
}