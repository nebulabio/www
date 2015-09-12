# Nebula Bio Website - [www.nebula.bio](http://www.nebula.bio)

Website and ops tool for Nebula Bio. Links to our [development board](https://trello.com/b/Tb4b74V5/protochip) and processes the payments, and tracks some stuff. Work in progress.

## Building

First install [Boot](http://boot-clj.com). Then, to do development:

```sh
$ boot dev
```

This will serve a local copy of the site to the port specified by `env.edn`.

This app currently uses the [Middleman pattern](http://adambard.com/blog/middleman-enlive-your-new-god/). To work on the UI:

```sh
$ cd ui
$ bundle install
$ bin/middleman server
```

Once I get some more functionality, perhaps I'll switch to an SPA in [Hoplon](https://github.com/hoplon/hoplon).
