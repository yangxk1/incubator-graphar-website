# Apache GraphAr (incubating) Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```
$ pnpm install
```

## Syncing the `docs` directory from the main repository

```
$ git clone https://github.com/apache/incubator-graphar.git --depth 1
$ rsync -av --progress incubator-graphar/docs/ docs/
or
$ cp -r incubator-graphar/docs/ docs/
```

Note: **DO NOT omit the trailing slash in the source directory.**

## Local Development

```
$ pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## LICENSE

[Apache License 2.0](./LICENSE).
