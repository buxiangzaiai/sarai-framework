Package.describe({
  name: 'sarai:sarai-core',
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
    'sarai:sarai-lib',
    'sarai:sarai-user',
    'sarai:sarai-admin',
    'sarai:sarai-layout',
    'sarai:sarai-main',
    "sarai:sarai-cms",
    "sarai:sarai-cms-data",
    "sarai:sarai-main-data",
    "sarai:sarai-services-data",
    "sarai:sarai-blog-data",
    ]

  api.use(packages);
  api.imply(packages);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-core');
});
