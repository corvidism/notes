# My notes

Why:

* I want to put some words online.
* I want the plainest HTML possible, but I don't want to hand-code it.
* I could spin up another instance of Astro, but I'm currently obsessed with it and everything's starting to look like a nail.
* I don't want to learn another SSG framework.

Thus: this bullshit.

So far it has:

* Dynamic generation of pages from `*.md` files at compile-time (`glob`, `markdown-it` and a *lot* of `path.join`). 
* HTML templates built on `ejs`. (I hate ejs and I hate most templating engines. I really wanted something jsx/component-like, but I couldn't find anything that would work. Shout out to [nakedJSX](https://nakedjsx.org) to being *so damn close*!)
* Frontmatter parsing via `gray-matter` (lovely, aside from me installing `grey-matter` first and losing time and brain cells trying to debug import errors).
* `static` folder.

Plans:
* Make it not look like a turd.
* Generate RSS.
* GitHub Action to deploy to my VPS. (Conveniently I've already made one for a different project. Reduce-reuse-recycle, baby!)
* Serve + watch files for change + rebuild. (I thought this would be easy. There has to be a library for that, right? Lol.)




