import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = (path.dirname(fileURLToPath(import.meta.url)));

export const config = {
    rootDir: path.join(__dirname, '..'),
    contentDir: './src/content',
    templateDir: './src/templates',
    staticDir: './src/static',
    outputDir: './dist',
    defaultTemplate: 'page.njk',
}