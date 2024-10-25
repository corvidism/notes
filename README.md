# My notes

Why:

* I want to put some words online.
* I want the plainest HTML possible, but I don't want to hand-code it.
* I could spin up another instance of Astro, but I'm currently obsessed with it and everything's starting to look like a nail.
* I don't want to learn another SSG framework.

Thus: this bullshit.

So far it has:

* Dynamic generation of pages from `*.md` files at compile-time (`glob`, `markdown-it` and a *lot* of `path.join`). 
* HTML templates built on `nunjucks`. (Templating engines make me suffer. I really wanted something jsx/component-like, but I couldn't find anything that would work. Shout out to [nakedJSX](https://nakedjsx.org) to being *so damn close*.)
* Frontmatter parsing via `gray-matter` (lovely, aside from me installing `grey-matter` first and losing time and brain cells trying to debug import errors).
* `static` folder.
* Way to serve the result (`serve`).
* Github action to automatically deploy (reused from other project! Love when that happens.)
* Syntax highlighting using [Prism](https://prismjs.com/), with no cleint-side JS.

Plans:
* Generate pages as `page-slug/index.html` so it has nice urls. (Like Astro does it.)
* Make it not look like a turd.
* Generate RSS.
* Watch files for change + rebuild (+ restart browser maybe). Haven't found the right lib yet, although I'm pretty sure there's *something*. [`livereload`](https://www.npmjs.com/package/livereload), maybe? `chokidar`? I don't wanna write & run a server, but I'm getting the feeling that it won't work unless I have something of that shape. 



* when a template file changes, rebuild all pages and refresh browser
* when md file changes, rebuild md file and refresh browser
* when css file changes, refresh browser
* when the generate file(s) change, rebuild all files and refresh browser


Do I need to reload server when I add new files?

I want to maintain the current way of serving the generated static files - I want to see the site the same way it will look deployed.

Ideally, I don't want to regenerate all files when only one changes.



`dev.mjs` vs `build.mjs`

| dev   | build |
| ------|-------|
| generate all, then watch | generate all and close |
| generate by path | glob all pages, generate |
| copy when static file by path | copy all static files |
| when template file changes, regenerate all and keep watching |  |


=> I need

* generatePage(mdPath) = gets page data by path, generates file into dist
* getAllPages() = gets paths for all pages
* copyStatic(staticPath) = copies file to dist
* copyAllStatic() = copy all static files (this will likely be easier than getting all static file paths and copying them one by one)


Probably need to refactor all the `.mjs` files too. Should `build.mjs` and `dev.mjs` be outside of `src`? Should `getData.mjs` be inside it? 



