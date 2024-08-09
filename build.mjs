import { getData } from './src/getData.mjs';
import fs from 'node:fs';
import path from 'node:path';
import ejs from 'ejs';

// Copy static files
fs.cpSync('./src/static', './dist', { recursive: true });

// Generate pages
const template = ejs.compile(fs.readFileSync('./src/templates/base.ejs', 'utf8'));
const pages = getData();

for (const page of pages) {
    const filename = path.join(process.cwd(), './dist', page.slug + '.html');
    const dirname = path.dirname(filename, { recursive: true });
    
    console.log(`${page.title} --> ${filename}`);

    const pageContent = template({page});

    fs.mkdirSync(dirname, { recursive: true });
    fs.writeFileSync(filename, pageContent, (err) => {
        console.error(err);
    })
}

// TODO also generate a RSS feed using rss