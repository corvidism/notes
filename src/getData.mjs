import { globSync } from 'glob';
import markdownit from 'markdown-it';
import prism from 'markdown-it-prism';
import { default as matter } from 'gray-matter';
import path from 'node:path';

// get all pages to generate

// render markdown to object (slug, data, content)

function getSlug(fullpath) {
    const relativeFilename = fullpath.replace(contentDir, '');

    return relativeFilename.replace('.md','');
}

export function getPages() {
    const contentDir = path.join(process.cwd(), './src/content');
    const pageFiles = globSync(path.join(contentDir, '**/*.md'), { withFileTypes: true });

    return pageFiles;
}

export function parsePage(page) {
    const parser = markdownit({typographer: true}).use(prism);
    const fullpath = page.fullpath();

    const { data, content } = matter.read(fullpath);

    return {
        slug: getSlug(fullpath),
        data,
        content: parser.render(content)
        }
}

export function getData() {
    const pageFiles = getPages();

    const pages = pageFiles.map(md => parsePage(md));

    return pages;
}