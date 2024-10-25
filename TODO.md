# TODO


* **fix SSL cert on subdomain!**
* auto-rebuild on file change


## Auto-rebuild on file change

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