# My notes

## How to run

* `npm run dev` - builds static files and starts a server

Why:

* I want to put some words online.
* I want the plainest HTML possible, but I don't want to hand-code it.
* I could spin up another instance of Astro, but I'm currently obsessed with it and everything's starting to look like a nail.
* I don't want to learn another SSG framework.

Thus: this bullshit.

So far it has:

* Dynamic generation of pages from `*.md` files at compile-time (`glob`, `markdown-it` and a *lot* of `path.join`). 
* Nice urls by generating `index.html` in folders (stolen from Astro).
* HTML templates built on `nunjucks`. (Templating engines make me suffer. I really wanted something jsx/component-like, but I couldn't find anything that would work. Shout out to [nakedJSX](https://nakedjsx.org) to being *so damn close*.)
* Frontmatter parsing via `gray-matter` (lovely, aside from me installing `grey-matter` first and losing time and brain cells trying to debug import errors).
* `static` folder that copies over without any parsing.
* Way to serve the result (`serve`).
* Deployment to my VPS using GitHub Actions. 
* Syntax highlighting using [Prism](https://prismjs.com/), with no cleint-side JS.

Plans:
* Make it not look like a turd.
* Generate RSS.
* Watch files for change + rebuild. I was hoping some build tool could handle it, but apparently this is too primitive for most of them so I'm building my own. At least I'm learning things?




