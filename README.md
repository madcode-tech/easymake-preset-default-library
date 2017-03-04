# easymake-preset-default-library
###### default preset for [easymake](https://github.com/madcode-tech/easymake) which helps to make library

## documentation
You can find documentation here https://github.com/madcode-tech/easymake/wiki

## preset uses:
+ coding
  + babel
    + es2015
    + es2016
    + react
    + stage-1
  + bluebird
+ linting
  + eslint
+ bundling
  + webpack
+ testing
  + karma
  + mocha
  + chai
  + sinon
  + phantomjs
  + karma-coverage

## configuration in package.json:
`{`

&nbsp;&nbsp;**"name"** - *using package name as library name*,

&nbsp;&nbsp;**"config"** `= {`

&nbsp;&nbsp;&nbsp;&nbsp;**"easymake"** `= {`

&nbsp;&nbsp;&nbsp;&nbsp;**"preset": "easymake-preset-default-library"**,

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**"libraryTarget"** - *type of bundle, default 'commonjs2'  (see [libraryTarget](https://webpack.js.org/configuration/output/#output-librarytarget) )*,

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**"libraryBundle"** - *array, by default all Dependencies are externals, but if you want to bundle some dependency in your bundle - place here its name*

&nbsp;&nbsp;`}`

`}`

## main tasks (preset contains additional sub-tasks):
* create-folders
* distributive
* test-units

## how to use:
* **easymake --run create-folders** - *create base folders in project directory*
* **easymake --run distributive** - *start bundle with webpack in watch mode*
* **easymake --run distributive --production** - *make bundle (no watch)*
* **easymake --run test-units** - *run unit tests and generate code-coverage report*
