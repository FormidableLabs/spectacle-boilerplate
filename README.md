Spectacle Boilerplate
=====================

> ⚠️ **Deprecated**: This project has been deprecated. Please install [`spectacle-cli`](https://github.com/FormidableLabs/spectacle-cli) and use `spectacle-boilerplate` to generate your presentations with ease!

## Generate a Spectacle presentation

First, install `spectacle-cli`:

```sh
$ npm install -g spectacle-cli
```

> ℹ️ **Note**: If you would like to avoid a global install, you can use `npx -p spectacle-cli spectacle-boilerplate` in the place of the `spectacle-boilerplate` command below.

Then generate a new boilerplate Spectacle project!

```sh
$ spectacle-boilerplate

# ... or with options! ...
$ spectacle-boilerplate \
  --mode "js" \
  --name "deck-o-awesomeness" \
  --description "My fantastic Spectacle presentation" \
  --dir "PATH/TO/NEW/DECK/DIRECTORY"

# Check out the full usage
$ spectacle-boilerplate -h
```

## Author and build your project!

See the [boilerplate guide](https://github.com/FormidableLabs/spectacle-cli/blob/master/lib/templates/boilerplate/README.md) for full instructions. As a quick starter:

```sh
# Install your dependencies
$ yarn

# Start development server at localhost:8080
$ yarn start

# Create a production build for publishing
$ yarn build
```
