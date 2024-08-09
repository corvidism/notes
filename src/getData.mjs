import { globSync } from 'glob';
import markdownit from 'markdown-it';
import { default as matter } from 'gray-matter';
import path from 'node:path';

export function getData() {
    const parser = markdownit({typographer: true});

    const contentDir = path.join(process.cwd(), './src/content');
    const pageFiles = globSync(path.join(contentDir, '**/*.md'), { withFileTypes: true });

    const pages = pageFiles.map(md => {
        const fullpath = md.fullpath();
        const { data, content } = matter.read(fullpath);
        const relativeFilename = fullpath.replace(contentDir, '');
        const slug = relativeFilename.replace('.md','');

        return {
            slug,
            title: data.title,
            content: parser.render(content)
        }
    });

    return pages;
}