import { getData, get } from './src/getData.mjs';
import fs from 'node:fs';
import path from 'node:path';
import nunjucks from 'nunjucks';


export function generate() {
    // Copy static files
    fs.cpSync('./src/static', './dist', { recursive: true });

    nunjucks.configure('./src/templates');
    const defaultTemplate = `page.njk`;


    // Generate pages
    const pages = getData();

    for (const page of pages) {
        const filename = path.join(process.cwd(), './dist', page.slug + '.html');
        const dirname = path.dirname(filename, { recursive: true });
        
        console.log(`${page.data.title} --> ${filename}`);

        const template = page.data.template ? page.data.template + '.njk' : defaultTemplate;

        console.log(template);

        const pageContent = nunjucks.render(template, { page });

        fs.mkdirSync(dirname, { recursive: true });
        fs.writeFileSync(filename, pageContent, (err) => {
            console.error(err);
        })
    }

    // TODO also generate a RSS feed using rss
}
