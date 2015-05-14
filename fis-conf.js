require('./build/bower_boost.js');

fis.config.set('pack', {
    '/pkg/vendor.js': [
        '/lib/mod.js',
        '/bower_components/angular/angular.js',
        '/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        '/bower_components/angular-cookies/angular-cookies.js',
        '/bower_components/ui-router/release/angular-ui-router.js'
    ],
    '/pkg/vendor.css': [
        '/bower_components/bootstrap/dist/css/bootstrap.css',
        '/bower_components/font-awesome/css/font-awesome.css',
        '/bower_components/rdash-ui/dist/css/rdash.css'
    ]
});

fis.config.set('modules.preprocessor.js', 'annotate');
fis.config.set('settings.postpackager.simple.autoCombine', true);