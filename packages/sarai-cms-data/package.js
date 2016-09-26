Package.describe({
  name: 'sarai:sarai-cms-data',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  var packages = [
    "sarai:sarai-lib"
  ]

  api.use(packages)
  api.imply(packages)

  var lib = [
  ]

  api.addFiles(lib, ["client", "server"])

  var server = [
    "server/main-methods.js",
    "server/about-methods.js",
    "server/service-methods.js",
    "server/upload-methods.js",
    "server/fixtures.js"
  ]

  api.addFiles(server, "server")

  api.addAssets([
    ], "client")

  api.export([

  ])
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-pests-data');
});
