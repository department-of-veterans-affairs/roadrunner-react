# Roadrunner React
[![Build Status](https://travis-ci.org/department-of-veterans-affairs/roadrunner-react.svg?branch=master)](https://travis-ci.org/department-of-veterans-affairs/roadrunner-react)


## Node.js Setup
React is a Javascript framework so the underlying webserving infrastructure
is not super important. However, Roadrunner react uses webpack and node
package manager to handle both compiling the code and management of the
frontend dependencies. Thus, you need node.js set up.

First install [nvm](https://github.com/creationix/nvm) for node.js version management.

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
```

TODO(awong): add instructions for install npm.

## Running the server.
One node.js and npm is set up bootstrap the envrionment by calling.

```
npm install
```

to create populate your `node_modules` from the dependencies listed in `packages.json` and the versions in `npm-shrinkwrap.json`

You will need to call `npm install` any time `package.json` or `npm-shrinkwrap.json` is modified.

To server the webpages, run 
```
npm start
```

This will serve the `public` diretory on port 8080 using the `webpack-dev-server`. The `webpack-dev-server` will watch all files under `src` transitively referenced by `src/client.js` and run webpack to build `public/js/generated/bundle.js`

Visit [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) to load the app with webpack "hot reload" support (change to the source code are pushed and merged into the running application in the browser without having to refresh the page).

Visiting [http://localhost:8080](http://localhost:8080) will show the app w/o the hot reloading.
