import chokidar from 'chokidar';
import { spawn } from 'node:child_process'

function getConfig() {
    return import('./config.mjs');
}

const watcher = chokidar.watch('src');

watcher.on('ready', async () => {
    console.log('================================');
    console.log('Watching for changes in src/');
    console.log('================================');
    process.env.NO_UPDATE_CHECK = true;
    spawn('npx', ['serve', 'dist', '-p', '3456'], {stdio: 'inherit'});

    watcher.on('all', (event, path) => {
        // if path is a template, re-render all pages
        // if path is a content file, re-render that page
        // if path is a static file, copy to dist
        console.log(event, path, details);
    })
})