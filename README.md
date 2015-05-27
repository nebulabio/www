# Nebula Bio Website - [www.nebula.bio](http://www.nebula.bio)

Static-page website for Nebula Bio. Links to our [development board](https://trello.com/b/Tb4b74V5/protochip) and processes the payments.

## Building

First install [Boot](http://boot-clj.com). Then, to do development:

```sh
boot dev
```

This will serve a local copy of the site to port 4000. You can change the port with the `-p` flag. When you're finished developing, you can deploy with:

```sh
make deploy
```

That calls `boot prod` first to compile the project with optimizations and prerendering, then calls [`ghp-import`](https://github.com/davisp/ghp-import) which is a Python program that takes a target directory (in this case `resources/public`) and adds it to the `gh-pages` branch of this repo. This automatically pushes the `gh-pages` branch to GitHub, which serves the site.
