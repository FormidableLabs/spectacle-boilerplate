# Spectacle Boilerplate

## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.markdown](https://github.com/FormidableLabs/spectacle/blob/master/README.markdown).

## Development

After downloading the boilerplate, your first order of business is to open terminal and run `npm install`

Next, run `rm -R .git` to remove the existing version control.

Then, to start up the local server, run `npm start`

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll

### On Windows

On Windows you might get an error saying

```
'NODE_ENV' is not recognized as an internal or external command,
operable program or batch file.
```

Thus, modify the npm scripts in `package.json` to properly set the `NODE_ENV` environment variable:

```json
...
"scripts": {
    "build": "SET NODE_ENV=production & webpack --config webpack.config.production.js",
    "start": "SET NODE_ENV=development & node server.js"
},
...
```

## Build & Deployment

Building the dist version of the project is as easy as running `npm run build`

If you want to deploy the slideshow to surge, run `npm run deploy`
