[![Build Status](https://travis-ci.org/bardius/StaticHtmlSkeleton.svg?branch=master)](https://travis-ci.org/bardius/StaticHtmlSkeleton)
![](http://www.bardis.info/StaticHtmlSkeleton.png?)

# Static HTML Project Generator distribution with integrated Zurb Foundation 6 (v6.4.3)

## Table of contents

1.  [Overview](#overview)
2.  [Installation](#installation)
    1.  [Prerequisites](#prerequisites)
3.  [Usage and Context](#usage-and-context)
    1.  [Start local server on watch auto reload mode](#start-local-server-on-watch-auto-reload-mode)
    2.  [Compile Development code](#compile-development-code)
    3.  [Compile Production code](#compile-production-code)
    4.  [Start local server for demo](#start-local-server-for-demo)
    5.  [Lint source code](#lint-source-code)
    6.  [Format source code](#format-source-code)
    7.  [Unit test JavaScript](#unit-test-javascript)
    8.  [Generate documentation](#generate-documentation)
    9.  [Check versions or lint rules](#check-versions-or-lint-rules)
4.  [How To Use Handlebars and Assemble](#how-to-use-handlebars-and-assemble)
5.  [Webpack Configuration](#webpack-configuration)
6.  [Useful Links and Documentation](#useful-links-and-documentation)

## Overview

A static website generator for rapid prototyping & static websites based on [webpack](https://webpack.js.org/)
in order to compile and bundle the assets (images, CSS & JavaScript). Any source for CSS can be digested as
pure CSS,[SASS](https://sass-lang.com/) and [CSS Next](http://cssnext.io/) are supported.
[Babel](https://babeljs.io/) is in place so both legacy Javascript along ES6 can be digested and transpiled.
Webpack Assemble Loader in conjunction with [HTML loader](https://github.com/webpack-contrib/html-loader) are used in
order to generate the static website based on [Handlebars](https://handlebarsjs.com/) templates
[Handlebars helpers](https://github.com/helpers/handlebars-helpers) & [Assemble](http://assemble.io/), that is served
at localhost:9001 via [Webpack Dev server](https://webpack.js.org/configuration/dev-server/) for rapid prototyping and
local testing.

## Installation

One step installation is required after you checkout the project, assuming that your system fulfills the prerequisites.
Open a bash (git bash should do in windows) and execute in the folder you want to project to be cloned in:

    npm run setup

### Prerequisites

**NodeJs** and **npm** have to be installed, any NodeJs version above & including 8.0.0 is required.
NodeJs can be downloaded at https://nodejs.org/download/release/v8.12.0/ (for windows download node-v8.12.0-x86.msi).
Make sure that node is available in you PATH by executing in your CLI

    node --version

## Usage and Context

In brief the context is,

-   you have a src folder
-   that holds all CSS, JavaScript, assets & static view templates
-   and CSS can be just CSS files or SASS files (originating from new components or legacy code)
-   and JavaScript source can be ES6 or earlier (originating from new components or legacy code)
-   and Handlebars templates are used for the static views generation (partials from components or views folder)
-   that get compiled via Webpack within the generated dist folder
-   and get served (from dist folder) at localhost:9001 with the help of webpack dev server
-   Unit tests, test coverage & reports for the JavaScript code is in place with Jest while tests are on specs folder
-   All the above are configurable with configuration files found on the configs folder

Npm scrips have been prepared in order to execute required tasks (directly from node modules or webpack). You can see
the full list of available commands in the top of the package.json file.

### Start local server on watch auto reload mode

You can start working on the project for rapid prototyping on a local server, delivering the static templates to your
browser, recompiling on any change in src. For changes in configs folder you will need to stop and start the process
again. The static views server will be available at http://localhost:9001 by default

    npm start -- [optional arguments]
    (e.g.) npm start -- --env.serverHost=localhost --env.serverPort=9002

For both scripts you can pass any optional available arguments to replace/extend defaults.
In case the webpack process does not complete and you want to debug it, you can see the full error trace by using

    npm run start:debug -- [optional arguments]
    (e.g.) npm run start:debug -- --env.serverHost=localhost --env.serverPort=9002

Available arguments:

-   **--p** to set webpack production mode
-   **--env.debug** to enable debug mode in case you have build issues
-   **--env.serverHost** to change the host of the local webpack server
-   **--env.serverPort** to change the port of the local webpack server

### Compile Development code

You can build non minified code bundles generated at dist folder.

    npm run build -- [optional arguments]
    (e.g.) npm run build -- --env.debug

Available arguments:

-   **--env.debug** to enable debug mode in case you have build issues

### Compile Production code

You can build minified code bundles generated at dist folder.

    npm run release -- [optional arguments]
    (e.g.) npm run release -- --env.debug

Available arguments:

-   **--env.debug** to enable debug mode in case you have build issues

### Start local server for demo

You can start a local server, delivering the static templates to your browser for demo without the need of an
server running and no watch mode enabled. By default dist folder is served at http://localhost:9001

    npm run serve:build
    or
    npm run serve:release

[Budo](https://www.npmjs.com/package/budo) is used for the local server in that case, so you can use any available
optional CLI arguments from the documentation found at https://www.npmjs.com/package/budo .

### Lint source code

Code formatting & style rules are enforced ia the use of linters. [ESLint](https://eslint.org/) and
[StyleLint](https://stylelint.io/) are configured in order to keep the Sass/CSS and JavaScript source code nice and
tidy. The linting is run as pre-commit step. You can also manually run it.

    npm run lint (this will run all linters)
    or to specify only one
    npm run lint:css
    npm run lint:js
    npm run:test

The configuration for ESLint rule set can be found at .eslintrc and .eslintignore files.
The configuration for Stylelint rule set can be found at .stylelintrc and .stylelintignore files.

In order to generate linting results reports as part of CI in Jenkins checkstyle xml output can be generated at the
folder reports/checkstyle.

    npm run checkstyle (this will run all linters)
    or to specify only one
    npm run checkstyle:css
    npm run checkstyle:js

### Format source code

To assist proper source code styling and formatting [Prettier](https://prettier.io/) has been added as a pre-commit
step that will automatically format the CSS and Javascript source code on changed files. You can also manually run it.
  
 npm run pretty-quick
  
The configuration for Prettier rule set can be found at .prettierrc and .prettierignore files.

### Unit test JavaScript

[Jest](https://facebook.github.io/jest/) is the tool of choice for executing JavaScript unit tests. JSDom environment
is configured to execute the tests in, results and coverage reports are displayed in CLI and generated in files under
reports/unit-tests folder. Unit tests run as step of the pre-commit after linting.
To manually execute the unit tests:

    npm run test:unit
    or
    npm run test:watchAll (run in watch mode to re run test after changes)

Configuration (jest options, JSDom & ignores) and test files are found under specs folder.

### Generate documentation

[JSDoc 3](http://usejsdoc.org/) can be used to generate documentation from annotations in the JavaScript code.
Corresponding npm module [JSDoc](https://www.npmjs.com/package/jsdoc) ca be used to do so.

    npm run doc

Configuration is found in the configs/jsdoc.config.json

### Check versions or lint rules

Npm scripts have been created to assist checking if node requirements are met, if npm modules updates exist and if there
are any lint rules that conflict with prettier rules. Checks run as a post install step. You can also manually run them.

    npm run check:node
    npm run check:npm-modules
    npm run check:eslint
    npm run check:stylelint

## How To Use Handlebars and Assemble

The HTML files are generated with a webpack loader based on Assemble generator with the Handlebars templates found in
src/views folder. The templates are split into layouts, partials and pages. Partials also get loaded form any folder
within src so you components han live along their partial.

Data can be used in the Handlebars files in order to be passed into the included partials and is stored as a JavaScript
object found under views/data

Partials can be included in a layout, page or another partial. Pages can have variables whose values are defined in the
top part of the file (eg. page title).

## Webpack Configuration

All webpack configurations for development or production mode along with all plugin and loaders used can be found under
configs folder. Base configuration holds common setup and is extended by the dev, dev.server and prod. ES6 is allowed
within all config files as it is supported by minimum node version.

For documentation refer to the official[webpack website](https://webpack.js.org/configuration/).
Each important section of webpack configuration has been split into its own file with link to its documentation
commented at the top of the files.

-   **alias** - holds the definition of path resolution aliases
-   **entrypoints** - holds the definition of the distinct code bundles and their source code
-   **externals** - holds the definition of JavaScript globals that are expected to already be loaded
-   **paths** - holds the definition of paths that are used to define source and target directories
-   **provides** - holds the definition of JavaScript globals that are correspond to existing loaded global
-   **rules** - holds the definition of loaders that are used by webpack to handle/manipulate different file sources
-   **utilities** - helper methods used to assist the configuration generation

Each used webpack plugin has its configuration on a separate file with link to its documentation commented at the top
of the files.

-   **assemble** - static pages that will be generated, defining the bundles that each will include
-   **cleanup** - list of folders to clean on startup
-   **copyfiles** - list of files that should be copied as is to the dist folder without any processing on them
-   **css.extract** - configuration to extract the css in their own bundle files instead of being inline in js
-   **postcss** - configuration for the postcss plugin in order to set autoprefixer, css-next and cssnamo options
-   **sitemap** - configuration for generating a sitemap for the static pages

## Useful Links and Documentation

-   http://git-scm.com/downloads (GIT)
-   http://nodejs.org/ (NodeJs)
-   https://npmjs.org/ (Node Packaged Modules)
-   http://sass-lang.com/install (Sass)
-   http://assemble.io/ (Assemble)
-   https://handlebarsjs.com/ (Handlebars)
-   https://github.com/helpers/handlebars-helpers (handlebars helpers)
-   http://foundation.zurb.com/sites/docs/ (Foundation 6 - Sass based)
