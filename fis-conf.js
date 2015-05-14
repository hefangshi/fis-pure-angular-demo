require('./build/bower_boost.js');

fis.config.set('pack', {
    '/pkg/modules.js': 'modules/**.js',
    '/pkg/modules.css': 'modules/**.less'
});

fis.config.set('modules.preprocessor.js', 'annotate');
fis.config.set('settings.postpackager.simple.autoCombine', true);