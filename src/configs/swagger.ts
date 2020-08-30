import { readFileSync } from 'fs';
import path from 'path';

const dataFile = JSON.parse(readFileSync(path.resolve('./swagger.json'), 'utf-8'));

export default {
    config: dataFile,
};