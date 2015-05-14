var bowerPath = fis.config.get('bower.path') || 'bower_components';

fis.config.set('project.exclude', bowerPath);
var fs = require('fs');
var path = require('path');
var originGetSource = fis.project.getSource;

function loadAllBowerFile(componentPath, source) {
    var exclude = fis.config.get('project.exclude');
    var root = fis.project.getProjectPath();
    fis.util.find(bowerPath + path.sep + componentPath, null, exclude, root).forEach(function (file) {
        file = fis.file(file);
        if (file.release) {
            source[file.subpath] = file;
        }
    });
}

fis.project.getSource = function () {
    var source = originGetSource();
    var root = fis.project.getProjectPath();
    var bowerRootPath = root + path.sep + bowerPath;
    var componentPaths;
    try {
        componentPaths = fs.readdirSync(bowerRootPath);
    } catch (e) {
        // no bower components
    }
    if (componentPaths) {
        var mainFiles = componentPaths.map(function getBowerJSON(componentPath) {
            try {
                var bowerJSON = require(bowerRootPath + path.sep + componentPath + path.sep + 'bower.json');
                if (!bowerJSON.main) {
                    fis.log.warning('No main file(s) specified in bower component [' + componentPath + ']');
                    loadAllBowerFile(componentPath, source);
                    return false;
                }
                return {
                    componentPath: componentPath,
                    main: bowerJSON.main
                };
            } catch (e) {
                fis.log.warning('No bower.json in bower component [' + componentPath + ']');
                loadAllBowerFile(componentPath, source);
                return false;
            }
        }).forEach(function (conf) {
            if (conf && conf.main) {
                var main = conf.main instanceof Array ? conf.main : [conf.main];
                var componentPath = bowerRootPath + path.sep + conf.componentPath + path.sep;
                main.forEach(function addMainFile(filePath) {
                    var files = [];
                    if (filePath.indexOf('*') !== -1) {
                        filePath = filePath.replace(/^\.\//, '');
                        fis.util.find(componentPath).forEach(function (file) {
                            var relativePath = path.relative(componentPath, file);
                            if (fis.util.glob(filePath, relativePath)) {
                                files.push(fis.file(file));
                            }
                        });
                    } else {
                        files.push(fis.file(componentPath + path.sep + filePath));
                    }
                    files.forEach(function (file) {
                        source[file.subpath] = file;
                    });
                });
            }
        });
    }
    return source;
};